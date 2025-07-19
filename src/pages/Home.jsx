import HeroSection from "../components/Home/HeroSection";
import BookingForm from "../components/Home/BookingForm";
import RoomSection from "../components/Home/RoomSection";
import AmenitiesSection from "../components/Home/AmenitiesSection";
import TestimonialSection from "../components/Home/TestimonialSection";
import TeamSection from "../components/Home/TeamSection";
import Footer from "../components/Footer/Footer";


function Home() {
  return (
    <div className="home-container">
      <HeroSection />
      <RoomSection />
      <AmenitiesSection />
      <TestimonialSection />
      <TeamSection />
      <Footer />
      <BookingForm />
    </div>
    
  );
}

export default Home;
