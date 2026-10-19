"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";    
import { useGSAP } from "@gsap/react";
import Image from "next/image";

export default function AboutSection() {

    useGSAP (() => {
        gsap.to(".box", {
            keyframes: {
                x: [0, 80, -10, 30, 0],
                ease:"none",
                easeEach: "power2.inOut",
            },
            rotation: 180,
            duration: 3,
            repeat: -1,
            stagger: 0.3,

        });
    }, []);

    return (
            <section id="about" className="w-full font-body">
                <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-16 sm:px-10 lg:flex-row lg:gap-12 lg:px-16 lg:py-24" >
                    <div className="flex basis-1/4 flex-col">
                        <h1 className="font-mono text-md tracking-widest">
                        {"//1. ABOUT ME"}
                        </h1>
                        <div className="mt-8 hidden flex-col lg:mt-20 lg:flex">
                            <div className="box h-15 w-15 bg-lime-300"/>
                            <div className="box mt-5 h-15 w-15 bg-lime-300"/>
                            <div className="box mt-5 h-15 w-15 bg-lime-300"/>
                            <div className="box mt-5 h-15 w-15 bg-lime-300"/>
                            <div className="box mt-5 h-15 w-15 bg-lime-300"/>

                        </div>
                    
                    </div>
                    <div className="basis-3/4">
                        <h1 className="font-heading text-4xl font-bold sm:text-5xl">
                        A curious mind.
                        </h1>
                        <h1 className="font-heading text-4xl font-bold text-lime-300 sm:text-5xl">
                        A builder&apos;s instinct.
                        </h1>
                        <p className="mt-6 font-mono text-sm text-neutral-400">
                            Asuka Verduijn · Aarhus, Denmark
                        </p>
                        <p className="mt-2 font-heading text-lg text-lime-300 sm:text-xl">
                            Software Engineering Trainee | Web Developer
                        </p>
                    <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                        <Image
                            src="/image.jpg"
                            alt="Portrait"
                            width={400}
                            height={400}
                            className="h-auto w-full max-w-sm object-cover"
                        />
                        <div className="flex flex-col lg:ml-8">
                            <h1 className="mt-4 font-heading text-2xl font-bold sm:text-3xl">
                                I like the space between “what if” and “it works”.
                            </h1>
                            <p className="mt-8 text-md text-neutral-400">
                            I’m a software engineering student with professional experience in web development, freelance work, and digital design. My background also includes running my own business and coordinating international events. I enjoy solving practical problems, learning new technologies, and turning ideas into working products.
                            </p>
                            <p className="mt-4 text-md text-neutral-400">
                            I’m looking for a trainee company where I can combine VIA’s Software Engineering Trainee programme with hands-on development.
                            </p>
                            </div>
                    </div>
                    </div>
            </div>
            </section>
    );
}