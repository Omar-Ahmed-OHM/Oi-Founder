"use client";
import Image from "next/image";
import logo from "../../../public/asset/images/logo.svg";
import person from "../../../public/asset/images/admin profile.jpg";
import { useState, useEffect } from "react";

export default function DashNav() {
  const [show, setShow] = useState<boolean>(true); // Tracks navbar visibility
  const [lastScrollY, setLastScrollY] = useState<number>(0); // Tracks last scroll position

  const handleScroll = () => {
    const currentScroll = window.scrollY;

    // Hide navbar when scrolling down, show when scrolling up
    if (currentScroll > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(currentScroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <section
        className={`bg-bg-dash-board border-[1px] border-gray-500 shadow-xl fixed w-full transition-transform duration-300 ${
          show ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="flex justify-between container mx-auto items-center p-2">
          {/* Logo */}
          <div className="logo pr-10">
            <Image src={logo} alt="logo" width={150} />
          </div>

          {/* Profile Section */}
          <div className="profile flex items-center gap-2  rounded-[34px] p-3 min-w-[250px] justify-center">
            <div>
              <Image
                src={person}
                alt="person"
                className="rounded-full w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px]"
              />
            </div>
            
          </div>
        </nav>
      </section>
    </>
  );
}
