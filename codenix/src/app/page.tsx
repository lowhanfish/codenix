"use client";

// REFERENSI
// https://cruip.com/


import Image from "next/image";

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ImageCarousel from "../components/ImageCarousel.jsx";

export default function Home() {
  return (
    <div className="font-sans grid h-full">
      {/* <Navbar /> */}
      <main className="flex flex-col">



        <div className=" flex flex-wrap flex-col md:flex-col lg:flex-row scroll-zoom px-10 md:px-25 lg:px-30 xl:px-45 py-20">
          <div className="flex justify-center flex-col flex-1 scroll-fade max-w-full h-auto rounded-lg">
            <div className="flex flex-col justify-center align-middle text-center lg:text-left">
              <div className="antialiased text-xs xl:text-base font-semibold transition-colors duration-300 text-muted-foreground">
                EMPOWER YOUR BUSINESS WITH SMART SOFTWARE
              </div>
              <div className="antialiased text-4xl xl:text-5xl font-bold pt-2 transition-colors duration-300 text-foreground">
                We design and build custom web & mobile solutions
              </div>
              <div className="font-light pt-5 transition-colors duration-300 text-muted-foreground">
                Innovative. Scalable. Reliable.
              </div>
            </div>
            <div className="flex flex-col pt-10 lg:flex-row">
              <div>
                <button className="p-2 w-40 border-3 font-semibold rounded-2xl transition-all duration-300 ease-in-out hover:scale-105 hover:bg-accent hover:text-foreground"
                  style={{
                    color: 'var(--color-text-secondary)',
                    borderColor: 'var(--border-strong)',
                    backgroundColor: 'transparent',
                  }}
                >
                  Discover More
                </button>
              </div>
              <div>
                <button className="ml-3 p-2 w-40 border-3 font-semibold rounded-2xl transition-all duration-300 ease-in-out hover:scale-105 hover:bg-primary-500 hover:text-primary-foreground hover:border-transparent"
                  style={{
                    color: 'var(--color-primary)',
                    borderColor: 'var(--color-primary-300)',
                    backgroundColor: 'transparent',
                  }}
                >
                  Create Item
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-1/6 justify-center items-center">

            <img
              className="scale-100 hover:scale-110 transition-transform duration-500 "
              src="/banner2.png"
              alt=""
            />
          </div>
        </div>

        <div className="px-10 md:px-25 lg:px-30 xl:px-45 py-20 transition-colors duration-300 bg-background-alt">
          <p className="text-4xl xl:text-5xl font-bold transition-colors duration-300 text-text">
            Hot bid
          </p>
          <div className="">
            <ImageCarousel />
          </div>
        </div>

      </main>
      {/* <Footer / */}
    </div>

  );
}

