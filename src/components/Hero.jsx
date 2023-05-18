import React from 'react'
import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sum_logo' className='w-28 object-contain' />
        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/tanvisankhyan/OpenAI_article_summarizer", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
        
      </nav>
      <h1 className='head_text'>
        <span className='blue_gradient '>OpenAI GPT-4</span> <br className='max-md:hidden' />
        Summarizer
      </h1>
      <h2 className='desc'>
      Trim the Noise, Embrace the Essence: Unveil the Quintessence with our Article Summarizer
      </h2>
    </header>
  );
};
export default Hero