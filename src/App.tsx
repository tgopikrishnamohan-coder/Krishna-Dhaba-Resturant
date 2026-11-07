import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Story from '@/components/Story';
import Signature from '@/components/Signature';
import MenuSection from '@/components/MenuSection';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Reservation from '@/components/Reservation';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-chocolate-950 text-cream-100">
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Signature />
        <MenuSection />
        <Gallery />
        <Testimonials />
        <Reservation />
      </main>
      <Footer />
    </div>
  );
}
