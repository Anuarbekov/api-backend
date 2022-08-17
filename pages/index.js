import Head from "next/head";
import Link from "next/link";
export default function Home() {
  return (
    <div className="main-container">
      <Head>
        <title>Posts App</title>
      </Head>
      <h1 className="welcome">Welcome to practice posts page</h1>
      <Link href="/posts">
        <a className="view-post">View posts</a>
      </Link>
    </div>
  );
}
