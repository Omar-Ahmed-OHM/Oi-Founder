"use client";
import { ApiCall } from "@/app/utils/ApiCall";
import { useState, useEffect, useRef } from "react";
import React from "react";

export default function Posts() {
  const [scroll, setScroll] = useState<boolean>(false);
  const [data, setData] = useState<any[]>([]); // Array of posts
  const [page, setPage] = useState<number>(1); // Track the current page
  const ref = useRef<HTMLDivElement>(null);

  // Detect end of page
  const endPage = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 5) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  // Fetch data
  const Fetchdata = async () => {
    try {
      const response = await ApiCall(
        `https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`,
        "GET"
      );
      setData((prevData) => [...prevData, ...response.data]); // Append new posts
      setPage((prevPage) => prevPage + 1); // Increment page number
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", endPage);
    Fetchdata(); // Fetch initial data
    return () => {
      window.removeEventListener("scroll", endPage);
    };
  }, []);

  useEffect(() => {
    if (scroll) {
      Fetchdata();
    }
  }, [scroll]);

  return (
    <div>
      {data.map((post, index) => (
        <div key={post.id || index} className="post">
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
