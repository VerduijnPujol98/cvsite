"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
export default function Hero() {
  
  const [isDone, setIsDone] = useState(false);
  const myDiv = useRef(null);
  const Circle1 = useRef(null);
  const Circle2 = useRef(null);

 useEffect(() => {
    gsap.to(myDiv.current, {
      keyframes: {
        x: [0, 300, 300, 250, 250],
        y: [0, 0, 300, 250, 250],
        rotate: [0, 0, 180, 360, 360], 
        scale: [1, 1, 1, 5],
        ease: "none",
        easeEach: "power2.inOut",
        
      },
      rotation: 180,
      onComplete: handleAnimationComplete,
      ease: "elastic.out(1, 0.3)",
      duration: 2,
      
      
    });



  }, []);

  function handleAnimationComplete() {
    gsap.to(myDiv.current, {
      keyframes: {
        rotate: [0, 180],
        opacity: [1, 0],
        ease: "none",
        easeEach: "power2.inOut",
      },
      ease: "elastic.out(1, 0.3)",
      duration: 15,
      onStart: () => circle1animation(),
    });
  }

  function circle1animation() {
    gsap.set(Circle1.current, { opacity: 1 });
    gsap.to(Circle1.current, {
      keyframes: {
        x: [200, 200],
        y: [50, 100, 50],
        rotate: [0, 0], 
        scale: [1, 1],
        ease: "none",
        easeEach: "power2.inOut",
        
        
      },
      rotation: 180,
      ease: "elastic.out(1, 0.3)",
      duration: 10,
      repeat: -1,
      onStart: () => circle2animation(),
      
      
    });

    function circle2animation() {
      gsap.set(Circle2.current, { opacity: 1 });
      gsap.to(Circle2.current, {
        keyframes: {
          x: [100, 500, 100],
          y: [0, -200, 0],
          ease: "none",
          easeEach: "power2.inOut",
          
          
        },
        rotation: 180,
        ease: "elastic.out(1, 0.3)",
        duration: 10,
        repeat: -1,
        
        
      });
    }
  }

  return (
<div className="w-full font-body">
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-16 sm:px-10 lg:flex-row lg:items-center lg:gap-8 lg:px-16 lg:py-24" >
      <div className="flex basis-1/2 flex-col">
        <h1 class="font-mono text-md tracking-widest">
          MY DEVELOPER'S PORTFOLIO
        </h1>

        <h1 className="mt-12 font-heading text-5xl font-bold leading-none sm:text-7xl lg:mt-20 lg:text-8xl">
          CURIOUSITY.
        </h1>
        <h1 className="mt-4 font-heading text-5xl font-bold leading-none sm:text-7xl lg:text-8xl">
          CODE.
        </h1>
        <h1 className="mt-4 font-heading text-5xl font-bold leading-none text-lime-300 sm:text-7xl lg:text-8xl">
          POSSIBILITY.
        </h1>

        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="mt-8 max-w-md text-md text-neutral-400">
            I’m Asuka. I turn ideas into digital experiences, one experiment at a time.
          </p>

          <a href="#about" className="mt-2 inline-flex min-h-11 items-center rounded-full bg-lime-300 px-4 py-2 font-body text-md text-black transition-colors hover:bg-lime-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-300 sm:mt-8">
            View my work
          </a>
        </div>
      </div>

      <div className="relative min-h-72 basis-1/2 overflow-hidden sm:min-h-96 lg:overflow-visible">
        <div ref={myDiv} className="h-16 w-16 bg-lime-300 sm:h-20 sm:w-20"/>
        <div ref={Circle1} className="w-70 rounded-full h-70 bg-lime-300 opacity-0" />
        <div ref={Circle2} className="w-30 rounded-full h-30 bg-lime-300 opacity-0" />

      </div>
    </div>
</div>
  );
}