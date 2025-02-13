import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import TypeWriterEffect from "react-typewriter-effect";

import Mobile from "../Mobile";
import Tablet from "../Tablet";
import Laptop from "../Laptop";

import rji from "../assets/img/RJI.png";
import gambar1 from "../assets/img/gambar1.jpg";
import gambar2 from "../assets/img/gambar2.jpg";
import gambar3 from "../assets/img/gambar3.jpg";

import mentalhealth from "../assets/img/mentalhealth.jpg";
import animasimentalhealth from "../assets/img/animasimentalhealth.jpg";
import mentalhealthanimation from "../assets/img/mentalhealthanimation.jpg";
import digitalmentalhealth2 from "../assets/img/digitalmentalhealth2.png";
import psikologonline from "../assets/img/psikologonline.jpg";

// import gambar2 from "../assets/img/gambar2.jpg";
// import gambar3 from "../assets/img/gambar3.jpg";

import Image from "../components/Image";

function Content() {
  const [ref, inView] = useInView({
    threshold: 0.44, // Elemen dianggap terlihat jika 50% bagiannya berada di viewport
    triggerOnce: false, // Tambahkan opsi ini
  });

  const [ref1, inView1] = useInView({
    threshold: 0.56, // Elemen dianggap terlihat jika 50% bagiannya berada di viewport
    triggerOnce: false, // Tambahkan opsi ini
  });

  const [card2, inView2] = useInView({
    threshold: 0.2, // Elemen dianggap terlihat jika 50% bagiannya berada di viewport
    triggerOnce: false, // Tambahkan opsi ini
  });
  const [card3, inView3] = useInView({
    threshold: 0.2, // Elemen dianggap terlihat jika 50% bagiannya berada di viewport
    triggerOnce: false, // Tambahkan opsi ini
  });
  const [card4, inView4] = useInView({
    threshold: 0.2, // Elemen dianggap terlihat jika 50% bagiannya berada di viewport
    triggerOnce: false, // Tambahkan opsi ini
  });

  // const [isVisible, setIsVisible] = useState(false); // State untuk visibility

  // useEffect(() => {
  //   if (inView) {
  //     setIsVisible(true);
  //   }
  // }, [inView]);

  return (
    <>
      <section
        className={`min-h-screen overflow-hidden bg-content [&_div]:w-full`}
      >
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}

        <header className="flex-col text-center flexc">
          {/* ⭕ */}
          <Mobile>
            <div className="relative flex-col text-2xl font-bold flexc text-[1.2rem]">
              {/* === CARD 1 === */}
              <div
                ref={ref1}
                className="container text-white bg-primary h-[80vh] flexc"
              >
                {inView1 && (
                  <span className="mx-20 text-3xl text-center !h-1/3 flexc">
                    <TypeWriterEffect
                      textStyle={{
                        textAlign: "center",
                      }}
                      startDelay={100}
                      cursorColor="white"
                      text="Ada Yang Bisa Kami Bantu?"
                      typeSpeed={50}
                    />
                  </span>
                )}
              </div>
              {/* === CARD 1 === */}

              {/* === CARD 2 === */}
              <div
                ref={card2}
                className="relative h-[16em] !w-[90%] my-3 block flexc"
              >
                <div
                  className={`transcenter scale-100 ${
                    !inView2 && "!left-[200%] !scale-0"
                  } flexc w-full h-full overflow-hidden shadow shadow-gray-400 rounded-3xl transall !duration-500`}
                >
                  <Image
                    style={{ backgroundPosition: "100% 100%" }}
                    className={`transcenter z-[1] h-full w-full`}
                    imageLink={mentalhealthanimation}
                  />
                  <div className="transcenter !items-end container z-[2] flexc text-left h-full">
                    <p className="w-full py-5 text-base text-center text-white bg-primary">
                      Edukasi Mental Health
                    </p>
                  </div>
                </div>
              </div>
              {/* === CARD 2 === */}

              {/* === CARD 3 === */}
              <div
                ref={card3}
                className="relative h-[16em] !w-[90%] my-3 block flexc"
              >
                <div
                  className={`transcenter scale-100 ${
                    !inView3 && "!-left-[200%] !scale-0"
                  } flexc w-full h-full overflow-hidden shadow shadow-gray-400 rounded-3xl transall !duration-500`}
                >
                  <Image
                    style={{ backgroundPosition: "45% 100%" }}
                    className={`transcenter z-[1] h-full w-full`}
                    imageLink={digitalmentalhealth2}
                  />
                  <div className="transcenter !items-end container z-[2] flexc text-left h-full">
                    <p className="w-full py-5 text-base text-center text-white bg-primary">
                      Platform Digital Kesehatan Mental
                    </p>
                  </div>
                </div>
              </div>
              {/* === CARD 3 === */}

              {/* === CARD 4 === */}
              <div
                ref={card4}
                className="relative h-[16em] !w-[90%] my-3 block flexc"
              >
                <div
                  className={`transcenter scale-100 ${
                    !inView4 && "!left-[200%] !scale-0"
                  } flexc w-full h-full overflow-hidden shadow shadow-gray-400 rounded-3xl transall !duration-500`}
                >
                  <Image
                    style={{ backgroundPosition: "50% 100%" }}
                    className={`transcenter z-[1] h-full w-full`}
                    imageLink={psikologonline}
                  />
                  <div className="transcenter !items-end container z-[2] flexc text-left h-full">
                    <p className="w-full py-5 text-base text-center text-white bg-primary">
                      Psikolog Online
                    </p>
                  </div>
                </div>
              </div>
              {/* === CARD 4 === */}

              {/* === CARD 5 === */}
              <div
                ref={ref}
                className="container text-white bg-primary h-[90vh] flexc group"
              >
                <span className="mx-[3rem] text-3xl min-w-64 !h-1/3 flexc flex-col">
                  <span className="h-[2.3rem] flexc">Semua Yang</span>

                  <span className="relative w-full flexc">
                    <span className="relative z-[2] w-full h-[2.3rem] flexc">
                      Kamu Butuhkan!
                    </span>
                    <span
                      className={`absolute z-[1] left-0 opacity-0 block w-0 h-full origin-left ${
                        inView && "!w-full opacity-100"
                      } transall !duration-800 bg-primary-empas`}
                    ></span>
                  </span>
                  <span className="h-[2.3rem] flexc">Ada di</span>

                  <span className="relative w-full flexc">
                    <span className="relative z-[2] h-[2.3rem] flexc">
                      Platform Ini!
                    </span>
                    <span
                      className={`absolute z-[1] left-0 opacity-0 block w-0 h-full origin-left ${
                        inView && "!w-full opacity-100"
                      } transall !duration-800 bg-primary-empas`}
                    ></span>
                  </span>
                </span>
              </div>
              {/* === CARD 5 === */}
            </div>
          </Mobile>
          {/* ⭕ */}

          <Tablet>
            <div className="relative flex-col text-2xl font-bold flexc">
              <div className="container bg-orange-600 h-52 flexc">
                <span className="mx-20 bg-blue-500">
                  Ada Yang Bisa Kami Bantu?
                </span>
              </div>

              <p className="container bg-red-600 py-2 text-left before:mx-3 before:content-['•'] before:bg-red-800 h-full">
                <span className="text-base">Edukasi Mental Health</span>
              </p>
              <p className="container bg-red-600 py-2 text-left before:mx-3 before:content-['•'] before:bg-red-800 h-full">
                <span className="text-base">
                  Platform Digital Kesehatan Mental
                </span>
              </p>
              <p className="container bg-red-600 py-2 text-left before:mx-3 before:content-['•'] before:bg-red-800 h-full">
                <span className="text-base">Psikologi Online</span>
              </p>
              <div></div>
            </div>
          </Tablet>

          <Laptop>
            <div className="relative flex-col text-2xl font-bold flexc">
              <div className="container bg-orange-600 h-52 flexc">
                <span className="mx-20 bg-blue-500">
                  Ada Yang Bisa Kami Bantu?
                </span>
              </div>

              <p className="container bg-red-600 py-2 text-left before:mx-3 before:content-['•'] before:bg-red-800 h-full">
                <span className="text-base">Edukasi Mental Health</span>
              </p>
              <p className="container bg-red-600 py-2 text-left before:mx-3 before:content-['•'] before:bg-red-800 h-full">
                <span className="text-base">
                  Platform Digital Kesehatan Mental
                </span>
              </p>
              <p className="container bg-red-600 py-2 text-left before:mx-3 before:content-['•'] before:bg-red-800 h-full">
                <span className="text-base">Psikologi Online</span>
              </p>
              <div></div>
            </div>
          </Laptop>
        </header>

        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}

        {/* <div className="flex-wrap gap-5 flexc">
          {[
            {
              imageLink: rji,
              imageText: "aewriwaejrwearjaweriou",
            },
            {
              imageLink: rji,
              imageText: "aewriwaejrwearjaweriou",
            },
            {
              imageLink: rji,
              imageText: "aewriwaejrwearjaweriou",
            },
          ].map((value) => (
            <div className="flex-col p-5 bg-red-500 flexc">
              <img className="size-52" src={value.imageLink} alt="RJI Logo" />
              <span className="text-center">{value.imageText}</span>
            </div>
          ))}
        </div> */}

        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
      </section>
    </>
  );
}

export default Content;
