import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import mobile from "../images/mobile.png";
import desktop from "../images/desk.png";
 
gsap.registerPlugin(ScrollTrigger);
 
function Home() {
  const headingRef = useRef();
  const subtextRef = useRef();
  const buttonRef = useRef();
  const imagesRef = useRef([]);
 
  useEffect(() => {
    // Heading animation
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        },
      }
    );
 
    // Subtext animation
    gsap.fromTo(
      subtextRef.current,
      { opacity: 0, y: -30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: subtextRef.current,
          start: "top 70%",
        },
      }
    );
 
    // Button animation
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 60%",
        },
      }
    );
 
    // Images animation: left, top, right
    gsap.fromTo(
      imagesRef.current[0], // Left image
      { opacity: 0, x: -150 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imagesRef.current[0],
          start: "top 85%",
        },
      }
    );
 
    gsap.fromTo(
      imagesRef.current[1], // Middle image (drop from above)
      { opacity: 0, y: -200 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: imagesRef.current[1],
          start: "top 85%",
        },
      }
    );
 
    gsap.fromTo(
      imagesRef.current[2], // Right image
      { opacity: 0, x: 150 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imagesRef.current[2],
          start: "top 85%",
        },
      }
    );
  }, []);
 
  return (
<div
      className="min-h-screen flex flex-col justify-center items-center text-center px-4"
      style={{
        background: "linear-gradient(to right, #fed7aa, #bfdbfe)", // Orange to blue gradient
      }}
>
      {/* Main Heading */}
<h1
        ref={headingRef}
        className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4"
>
        Revolutionize Your Digital Landscape
</h1>
 
      {/* Subtext */}
<p
        ref={subtextRef}
        className="text-gray-600 text-lg sm:text-xl mb-6"
>
        Innovative Solutions for Unparalleled Digital Experiences
</p>
 
      {/* Explore More Button */}
<button
        ref={buttonRef}
        className="bg-red-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-red-600 transition duration-300"
>
        Explore More
</button>
 
      {/* Devices Showcase */}
<div className="mt-10 flex justify-center items-center space-x-4">
        {/* Left Image */}
<img
          ref={(el) => (imagesRef.current[0] = el)}
          src={mobile}
          alt="Mobile View"
          className="w-24 sm:w-32"
        />
 
        {/* Middle Image */}
<img
          ref={(el) => (imagesRef.current[1] = el)}
          src={desktop}
          alt="Desktop View"
          className="w-64 sm:w-96"
        />
 
        {/* Right Image */}
<img
          ref={(el) => (imagesRef.current[2] = el)}
          src={mobile}
          alt="Tablet View"
          className="w-28 sm:w-40"
        />
</div>
</div>
  );
}
 
export default Home;

