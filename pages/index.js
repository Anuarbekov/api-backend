import Head from "next/head";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Link from "next/link";
export default function Home() {
  return (
    <div className="main-container">
      <Head>
        <title>Create Next App</title>
      </Head>
      <Link href="/posts">
        <a>View posts</a>
      </Link>
    </div>
  );
}
