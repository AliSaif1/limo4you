import Hero from '../components/Home/Hero';
import BookingForm from '../components/Home/BookingForm';
import Fleet from '../components/Home/Fleet';
import Testimonials from '../components/Home/Testimonials';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Hero />
        <BookingForm />
        <Fleet />
        <Testimonials />
      </main>
    </div>
  );
};

export default Home;