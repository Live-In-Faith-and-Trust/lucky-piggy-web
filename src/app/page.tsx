import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import StickyHeader from '@/components/StickyHeader';

export default function Home() {
  return (
    <>
      <StickyHeader />
      <main>
        <Hero />
      </main>
      <Footer />
</>
  );
}
