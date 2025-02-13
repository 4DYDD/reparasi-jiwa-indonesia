import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";

import Mobile from "./Mobile";
import Tablet from "./Tablet";
import Laptop from "./Laptop";

import squidward from "./assets/img/squidward.jpg";
import brokoli from "./assets/img/brokoli.jpg";
// XS VIEW
// {/* <MediaQuery minWidth={320}>werawerio</MediaQuery> */}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Mobile>
        <Navbar />
        <Content />
        {/* <Footer /> */}
      </Mobile>
      <Tablet>
        <div className="flex-col h-screen px-16 text-3xl font-bold text-center text-white bg-red-500 flexc">
          <span>UNTUK UKURAN WEBSITE INI BELUM KU BUAT, LAGI MALASSS</span>
          <br />
          <br />
          <div
            style={{
              backgroundImage: `url(${brokoli})`,
            }}
            className="bg-no-repeat bg-cover border-4 border-white rounded-lg bg-center px-[20rem] py-[12rem]"
          ></div>
        </div>
      </Tablet>
      <Laptop>
        <div className="flex-col h-screen px-16 text-3xl font-bold text-center text-white bg-red-500 flexc">
          <span>UNTUK UKURAN WEBSITE INI BELUM KU BUAT, LAGI MALASSS</span>
          <br />
          <br />
          <div
            style={{
              backgroundImage: `url(${brokoli})`,
            }}
            className="bg-no-repeat bg-cover border-4 border-white rounded-lg bg-center px-[20rem] py-[12rem]"
          ></div>
        </div>
      </Laptop>
    </>
  );
}

export default App;
