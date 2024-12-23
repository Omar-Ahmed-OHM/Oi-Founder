"use client";

import { ApiCall } from "@/app/utils/ApiCall";
import { useState, useEffect } from "react";
import React from "react";
import Image from "next/image";
import admin from "../../../../public/asset/images/logo.svg";
import { Button } from "@/app/shared/ui/Button";

export default function Posts() {
  type posttype = {
    id: number;
    title: string;
    body: string;
    userId: number;
    image: string;
  };

  const [data, setData] = useState<posttype[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const FetchData = async () => {
    if (loading || !hasMore) return;
    setLoading(true);

    try {
      const response = await ApiCall(
        `https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`,
        "GET"
      );

      if (response?.data?.length) {
        const formattedData = response.data.map((post: any) => ({
          id: post.id,
          title: post.title,
          body: post.body,
          userId: post.userId,
          image: admin || post.image,
        }));

        setData((prevData) => [...prevData, ...formattedData]); // Append new data to existing data
        setPage((prevPage) => prevPage + 1);
      } else {
        setHasMore(false); 
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    setLoading(false);
  };

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 100) {
      FetchData(); 
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    FetchData();

    return () => {
      window.removeEventListener("scroll", handleScroll); 
    };
  }, []);

  return (
    <>
      <section className="bg-main-color min-h-screen">
        <div className="mx-auto container px-4 py-6">
          <div className="flex flex-col gap-4">
            {data.map((post, index) => (
              <div
                key={`${post.id}-${post.userId}-${index}`} 
                className="bg-card-color shadow-md rounded-lg p-4 border border-border-color"
              >
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 mr-3">
                    <Image
                      src={post.image}
                      alt="Admin Profile"
                      width={48}
                      height={48}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-300">User {post.userId}</h4>
                    <p className="text-sm text-gray-500">2 hrs ago</p>
                  </div>
                </div>
                <div>
                  <h3 className="bg-text-gradient bg-clip-text text-lg font-semibold text-transparent">
                    {post.title}
                  </h3>
                  <p className="text-slate-200 mt-2">{post.body}</p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <Button theme="primary" classname="w-full">
                    Chat
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {loading && (
            <div className="text-center my-4">
              <p>Loading...</p>
            </div>
          )}

          {!hasMore && (
            <div className="text-center my-4">
              <p>No more posts to load.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
