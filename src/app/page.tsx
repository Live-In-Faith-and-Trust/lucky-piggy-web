import Hero from '@/components/Hero';
import StickyHeader from '@/components/StickyHeader';

export default function Home() {
  return (
    <>
      <StickyHeader />
      <main>
        <Hero />
      </main>
    </>
  );
}
