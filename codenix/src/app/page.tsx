import Image from "next/image";

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  return (
    <div className="font-sans grid min-h-screen pt-25 px-4 sm:px-8 lg:px-20 xl:px-32">
      <Navbar />
      <main className="flex flex-col sm:px-10 md:px-25">
        <div className="flex flex-wrap">
          <div className="flex flex-1 ">
            <div>
              <div className="antialiased text-lg text-gray-400 font-semibold">THE NEW CREATIVE ECONOMY</div>
              <div className="antialiased text-6xl font-bold text-gray-900">Share your creations with the world</div>
              <div className="font-light text-gray-500">Collect and sell digital art, powered by the best online tools.</div>
              <div></div>
            </div>
          </div>
          <div className="flex flex-1 justify-center items-center flex-wrap">

            <img
              className="max-w-full h-auto"
              src="/banner2.png"
              width={1000}
              alt=""
            />


            {/* <Image alt=""
              className="h-auto"
              fill
              style={{ borderWidth: 3, borderColor: 'red', }}
              src="https://static.vecteezy.com/system/resources/previews/021/707/022/non_2x/isometric-flat-3d-illustration-concept-of-technology-transformation-digital-button-free-vector.jpg" /> */}
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </div>

  );
}
