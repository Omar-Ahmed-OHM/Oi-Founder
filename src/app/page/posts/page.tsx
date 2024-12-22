"use client";

import { ApiCall } from "@/app/utils/ApiCall";
import { useState, useEffect } from "react";
import React from "react";
import Image from "next/image";
import admin from "../../../../public/asset/images/admin profile.jpg";

export default function Posts() {
  type posttype = {
    id: number;
    title: string;
    body: string;
    userId: number;
    image: string;
  };

  const [scroll, setScroll] = useState(false);
  const [data, setData] = useState<posttype[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false); // Add loading state

  const endPage = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 5) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const Fetchdata = async () => {
    if (loading) return;
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
          image: admin || post.image, // Fallback image
        }));

        setData((prevData) => [...prevData, ...formattedData]);
        setPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    setLoading(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", endPage);

    Fetchdata();

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
    <>
      <section className="bg-main-color min-h-screen">
        <div className="mx-auto container px-4 py-6">
          <div className="flex flex-col gap-4">
            {data.map((post: posttype) => (
              <div
                key={post.id}
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
                    <h4 className="font-semibold text-gray-800">User {post.userId}</h4>
                    <p className="text-sm text-gray-500">2 hrs ago</p>
                  </div>
                </div>
                {/* Apply the requested styles to the post title */}
                <h3 className="bg-text-gradient bg-clip-text text-lg font-semibold text-transparent">
                  {post.title}
                </h3>
                <p className="text-gray-700 mt-2">{post.body}</p>
                <div className="mt-4 flex items-center justify-between">
                  <button className="text-sm font-semibold text-gray-600 hover:text-btn-color">
                    Like
                  </button>
                  <button className="text-sm font-semibold text-gray-600 hover:text-btn-color">
                    Comment
                  </button>
                  <button className="text-sm font-semibold text-gray-600 hover:text-btn-color">
                    Share
                  </button>
                </div>
              </div>
            ))}
          </div>

          {loading && (
            <div className="text-center my-4">
              <p>Loading...</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
