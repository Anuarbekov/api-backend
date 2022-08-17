import Head from "next/head";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Link from "next/link";
import Skeleton from "../components/Skeleton";
export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const startingValue = currentPage === 1 ? 0 : currentPage * 10 - 10;
    axios.get(`api/getPosts/${startingValue}`).then((response) => {
      setTimeout(() => {
        setPosts(response.data);
        setIsLoading(false);
      }, 350);
    });
  }, [currentPage]);
  let pageNumbers = [];
  for (let i = 1; i <= 10; i++) {
    pageNumbers.push(i);
  }
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className="main-container-posts">
      <Head>
        <title>Posts</title>
      </Head>
      <Link href="/">
        <a className="back">Back</a>
      </Link>
      {isLoading ? (
        <>
          <Skeleton />
        </>
      ) : (
        <>
          {posts &&
            posts.map((post) => (
              <Card id={post.id} title={post.title} body={post.body} />
            ))}
          <div className="page-numbers">
            {pageNumbers.map((page) => (
              <span
                onClick={() => handlePageChange(page)}
                className={`page-number ${
                  page === currentPage ? "current" : ""
                }`}
              >
                {page}
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
