import Hero from '@/components/Hero';
import ServiceIntro from '@/components/ServiceIntro';
import MissionList from '@/components/MissionList';
import PrizeTable from '@/components/PrizeTable';
import PreSignup from '@/components/PreSignup';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <ServiceIntro />
      <MissionList />
      <PrizeTable />
      <PreSignup />
      <Footer />
    </main>
  );
}
