import React, { useState, useEffect, useRef } from "react";
import { animateScroll, scroller } from "react-scroll";

import rji from "../assets/img/RJI.png";

function Navbar() {
  const scrollToTop = (event) => {
    event.preventDefault();

    animateScroll.scrollTo(0, {
      smooth: true,
      duration: 500,
    });
  };

  const [drawer, setDrawer] = useState(false);

  const sidebar = useRef(null);
  const burgerbutton = useRef(null);
  const theBurger = useRef(null);
  const theX = useRef(null);

  function handleDrawer() {
    setDrawer(!drawer);

    const element = sidebar.current;
    const btnburger = burgerbutton.current;
    const TB = theBurger.current;
    const TX = theX.current;

    if (!drawer) {
      TX.classList.add("!inline-block");
      TB.classList.add("!hidden");

      element.classList.remove("animate-hidden");
      void element.offsetWidth;
      element.classList.add("animate-show");
    } else {
      TX.classList.remove("!inline-block");
      TB.classList.remove("!hidden");

      element.classList.remove("animate-show");
      void element.offsetWidth;
      element.classList.add("animate-hidden");
    }

    btnburger.classList.add("pointer-events-none");
    setTimeout(() => {
      btnburger.classList.remove("pointer-events-none");
    }, 400);
  }

  return (
    <>
      <header class="text-primary shadow-lg block bg-navbar sticky top-0 z-[99]">
        <div class="flex items-center justify-between h-24 sm:h-20 container mx-auto">
          {/* === LOGO === */}
          <div className="flex items-center justify-center px-3 sm:px-5 h-full sm:text-[0.7rem]">
            <a href="">
              <img
                class="size-[3.5em] sm:size-[4.5em] border-white rounded-full border-2"
                src={rji}
                alt="RJI Logo"
              />
            </a>
            <span class="ml-4 uppercase font-black sm:text-[1.3em]">
              Reparasi Jiwa <br /> Indonesia
            </span>
          </div>
          {/* === LOGO === */}

          <nav class="relative font-semibold text-base lg:text-lg flex justify-center sm:w-60 h-full">
            <ul class="sm:flex justify-center items-center w-full hidden">
              <a
                href=""
                class="py-2 mx-2 px-5 rounded bg-[#e09129] hover:bg-white hover:text-[#e09129] outline hover:outline-none transall text-base"
              >
                <span className="hidden sm:flex">Home</span>
              </a>
              <a
                href=""
                class="py-2 mx-2 px-5 rounded bg-[#e09129] hover:bg-white hover:text-[#e09129] outline hover:outline-none transall text-base"
              >
                <span className="hidden sm:flex">About</span>
              </a>
            </ul>

            <div className="absolute top-0 right-0 h-full gap-3 px-3 flexc">
              <span
                ref={burgerbutton}
                onClick={handleDrawer}
                className="rounded-lg text-primary sm:hidden size-10 flexc"
              >
                <span ref={theBurger} className="inline-block">
                  <i className="text-2xl fa-solid fa-bars"></i>
                </span>
                <span ref={theX} className="hidden">
                  <i className="text-2xl fa-solid fa-xmark"></i>
                </span>
              </span>
            </div>
          </nav>
        </div>

        <div
          ref={sidebar}
          className={`fixed transall z-1 px-2.5 top-28 -right-[20%] flexc flex-col gap-3`}
        >
          <button
            onClick={scrollToTop}
            className="bg-white rounded-lg text-primary sm:hidden size-10 flexc"
          >
            <i className="text-xl fa-solid fa-house"></i>
          </button>
          <button className="bg-white rounded-lg text-primary sm:hidden size-10 flexc">
            <i class="text-xl fa-solid fa-circle-question"></i>
          </button>
        </div>
      </header>
    </>
  );
}

export default Navbar;
