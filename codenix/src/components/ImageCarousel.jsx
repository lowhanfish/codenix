"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageCarousel() {
  const items = [
    { src: "/products/app1.png", title: "Project Management App" },
    { src: "/products/app2.png", title: "E-Commerce Dashboard" },
    { src: "/products/app3.png", title: "Analytics Platform" },
    { src: "/products/app4.png", title: "Mobile Banking UI" },
    { src: "/products/app5.png", title: "Task Tracker System" },
    { src: "/products/app1.png", title: "Project Management App" },
    { src: "/products/app2.png", title: "E-Commerce Dashboard" },
    { src: "/products/app3.png", title: "Analytics Platform" },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4;

  const next = () => {
    if (startIndex + visibleCount < items.length) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto py-6">
      {/* Tombol kiri */}
      <button
        onClick={prev}
        disabled={startIndex === 0}
        className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white dark:bg-gray-800 shadow-md transition hover:scale-110 ${startIndex === 0 ? "opacity-30 cursor-not-allowed" : ""
          }`}
      >
        <ChevronLeft size={24} />
      </button>

      {/* Container carousel */}
      <div className="overflow-hidden px-10 relative">
        <div
          className="flex transition-transform duration-500 ease-in-out "
          style={{
            transform: `translateX(-${startIndex * 25}%)`, // geser 25% per item
          }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="w-1/4 flex-shrink-0 flex flex-col items-center px-0 scale-90 hover:scale-100 transition-transform duration-300"
            >
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-xl 
      before:absolute before:inset-x-6 before:-bottom-4 before:h-6 
      before:rounded-full before:bg-black/50 before:blur-lg before:content-[''] 
      before:transition-all hover:before:opacity-20">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Tombol kanan */}
      <button
        onClick={next}
        disabled={startIndex + visibleCount >= items.length}
        className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white dark:bg-gray-800 shadow-md transition hover:scale-110 ${startIndex + visibleCount >= items.length
          ? "opacity-30 cursor-not-allowed"
          : ""
          }`}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
