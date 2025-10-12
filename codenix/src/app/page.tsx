import Image from "next/image";

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  return (
    <div className="font-sans grid min-h-screen pt-25 px-4 sm:px-8 lg:px-10 xl:px-20">
      <Navbar />
      <main className="flex flex-col sm:px-10 md:px-25">
        <div className=" flex flex-wrap flex-col md:flex-col lg:flex-row">
          <div className="flex flex-1">
            <div className="flex flex-col justify-center align-middle text-center lg:text-left">
              <div className="antialiased text-lg text-gray-500 font-semibold">THE NEW CREATIVE ECONOMY</div>
              <div className="antialiased text-5xl md:text-6xl font-bold text-gray-500">Share your creations with the world</div>
              <div className="font-light text-gray-500 pt-5">Collect and sell digital art, powered by the best online tools.</div>
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
