import React from 'react'
import { words } from '../constants/index.js'
import Button from '../componets/Button.jsx'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import TerminalSkills from '../componets/TerminalSkills.jsx'

const Hero = () => {

  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power2.inOut",
      }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
        <div className="absolute top-0 left-0 z-10">
            
        </div>

        <div className="hero-layout">
            {/* Hero Content */}
            <header className="flex flex-col justify-center w-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
                <div className="flex flex-col gap-4 sm:gap-6 md:gap-7">
                                    <div className="hero-text">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Hi there, I'm Kevin.</h1>
                    <h1 className="relative mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                        <span className="slide">
                            <span className="wrapper">
                                {words.map((word) => (
                                    <span key={word.text} className="
                                    flex items-center
                                    gap-1 sm:gap-2 pb-2 leading-none h-[50px] sm:h-[60px] md:h-[70px] lg:h-[80px] xl:h-[100px] flex items-center">
                                        <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl"> 
                                            {word.text}
                                        </span>
                                    </span>
                                ))}
                            </span>
                        </span>
                    </h1>
                </div>
                <div className="relative z-10 mt-8">
                    <Button 
                    text = "View Experience"
                    className="text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2"
                    id = "experience"
                    />
                </div>
                </div>
            </header>
        </div>
        {/* Right Side - Terminal Skills */}
        <TerminalSkills />
        
    </section>
    
  )
}

export default Hero