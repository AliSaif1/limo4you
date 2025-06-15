import React, { useRef } from 'react';
import Hero from '../components/Home/Hero';
import BookingForm from '../components/Home/BookingForm';
import Fleet from '../components/Home/Fleet';
import Testimonials from '../components/Home/Testimonials';

const Home = () => {
  const bookingRef = useRef();

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Hero onBookNowClick={() => bookingRef.current?.scrollIntoView({ behavior: 'smooth' })} />
        <BookingForm ref={bookingRef} />
        <Fleet />
        <Testimonials />
      </main>
    </div>
  );
};

export default Home;