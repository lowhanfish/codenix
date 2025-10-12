import Image from "next/image";

import Foother from "../components/Foother.jsx";
import Navbar from "../components/Navbar.jsx";


export default function Home() {
  return (
    <>
      <Navbar />
      <div className="font-sans grid grid-rows-[20px_1fr_20px] min-h-screen p-8">

        <main className="">
          <h1>asdsa</h1>
        </main>
        <Foother />
      </div>
    </>
  );
}
