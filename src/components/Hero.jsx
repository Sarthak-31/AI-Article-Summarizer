import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-end items-center w-full mb-10 pt-3'>
      <button
          type='button'
          onClick={() =>
            window.open("https://github.com/TidbitsJS/Summize", "_blank")
          }
          className='black_btn'
        >
          GitHub Link
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='bg-gradient-to-r from-red-700 to-rose-300 bg-clip-text text-transparent'>Rapid API</span>
      </h1>
      <h2 className='desc'>
        Improve your reading with Summarize, an article summarizer
        which gives concise summaries for lengthy articles
      </h2>
    </header>
  );
};

export default Hero;
