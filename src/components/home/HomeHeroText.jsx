import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='font-[font1] mt-72 lg:mt-0 pt-5 text-center'>
       <p className='absolute lg:w-[17vw] w-64 lg:right-20 right-0 bottom-28  lg:bottom-72 font-[font1] lg:text-lg text-xs lg:leading-relaxed leading-tight'>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"K72 is an agency that builds brands from every angle. Today, tomorrow and years from now. We think the best sparks fly when comfort zones get left behind and friction infuses our strategies, brands and communications with real feeling. We’re transparent, honest and say what we mean, and when we believe in something, we’re all in."</p>
      <div className='lg:text-[9.5vw] text-[12.5vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]'>
        The spark for
      </div>
      <div className='lg:text-[9.5vw] text-[12.5vw] justify-center flex items-start uppercase lg:leading-[8vw] leading-[10vw]'>
        all
        <div className='h-[7vw] w-[16vw] rounded-full -mt-2 overflow-hidden'>
          <Video />
        </div>
        things
      </div>
      <div className='lg:text-[9.5vw] text-[12.5vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]'>
        creative
      </div>
    </div>
  )
}

export default HomeHeroText
