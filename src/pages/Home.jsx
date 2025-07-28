import React, { useEffect, useRef } from "react";
import Lenis from "lenis";

import HeroSection from "../components/Home/HeroSection";
import RoomSection from "../components/Home/RoomSection";
import AmenitiesSection from "../components/Home/AmenitiesSection";
import TestimonialSection from "../components/Home/TestimonialSection";
import TeamSection from "../components/Home/TeamSection";
import Footer from "../components/Footer/Footer";

function Home() {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: true,
    });

    lenisRef.current = lenis;

    const raf = time => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="home-container">
      <HeroSection />
      <RoomSection />
      <AmenitiesSection />
      <TestimonialSection />
      <TeamSection />
      <Footer />
    </div>
  );
}

export default Home;
