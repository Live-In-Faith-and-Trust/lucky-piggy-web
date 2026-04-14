import Hero from '@/components/Hero';
import PreSignup from '@/components/PreSignup';
import ServiceIntro from '@/components/ServiceIntro';
import MissionList from '@/components/MissionList';
import PrizeTable from '@/components/PrizeTable';
import Footer from '@/components/Footer';
import StickyHeader from '@/components/StickyHeader';
import AnimationObserver from '@/components/AnimationObserver';

export default function Home() {
  return (
    <>
      <StickyHeader />
      <AnimationObserver />
      <main>
        <Hero />
        <PreSignup />
        <ServiceIntro />
        <MissionList />
        <PrizeTable />
        <Footer />
      </main>
    </>
  );
}
