import Image from "next/image";

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  return (
    <div className="font-sans grid min-h-screen pt-25 px-4 sm:px-8 lg:px-10 xl:px-20">
      <Navbar />
      <main className="flex flex-col sm:px-10 md:px-25">



        <div className=" flex flex-wrap flex-col md:flex-col lg:flex-row scroll-zoom animate-bounce">
          <div className="flex flex-1 scroll-fade max-w-full h-auto rounded-lg">
            <div className="flex flex-col justify-center align-middle text-center lg:text-left">
              <div className="antialiased text-xs xl:text-base text-gray-500 font-semibold">EMPOWER YOUR BUSINESS WITH SMART SOFTWARE</div>
              <div className="antialiased text-4xl xl:text-5xl font-bold text-gray-600 pt-2">We design and build custom web & mobile solutions</div>
              <div className="font-light text-gray-500 pt-5">Innovative. Scalable. Reliable.</div>
            </div>
          </div>
          <div className="flex flex-1/6 justify-center items-center">

            <img
              className=""
              src="/banner2.png"
              alt=""
            />
          </div>
        </div>
        <div className=" flex flex-wrap flex-col md:flex-col lg:flex-row scroll-zoom animate-bounce">
          <div className="flex flex-1 scroll-fade max-w-full h-auto rounded-lg">
            <div className="flex flex-col justify-center align-middle text-center lg:text-left">
              <div className="antialiased text-xs xl:text-base text-gray-500 font-semibold">EMPOWER YOUR BUSINESS WITH SMART SOFTWARE</div>
              <div className="antialiased text-4xl xl:text-5xl font-bold text-gray-600 pt-2">We design and build custom web & mobile solutions</div>
              <div className="font-light text-gray-500 pt-5">Innovative. Scalable. Reliable.</div>
            </div>
          </div>
          <div className="flex flex-1/6 justify-center items-center">

            <img
              className=""
              src="/banner2.png"
              alt=""
            />
          </div>
        </div>












      </main>
      {/* <Footer /> */}
    </div>

  );
}
