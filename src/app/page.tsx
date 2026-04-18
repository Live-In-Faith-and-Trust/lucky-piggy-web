import Hero from '@/components/Hero';
import FeatureSection from '@/components/FeatureSection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import StickyHeader from '@/components/StickyHeader';
import AnimationObserver from '@/components/AnimationObserver';

const features = [
  { headline: '걷기만 해도\n복권을 드려요',    layout: 'reversed' as const, mobileImgRight: false, mobileImgClass: 'w-[72%]' },
  { headline: '매주 토요일\n로또 번호로 추첨', layout: 'default'  as const, mobileImgRight: false, mobileImgClass: 'w-[86%]' },
  { headline: '당첨금은\n현금으로 출금',       layout: 'reversed' as const, mobileImgRight: false, mobileImgClass: 'w-[72%]' },
];

export default function Home() {
  return (
    <>
      <StickyHeader />
      <main>
        <Hero />
        {features.map((f, i) => (
          <FeatureSection key={i} headline={f.headline} index={i} layout={f.layout} mobileImgRight={f.mobileImgRight} mobileImgClass={f.mobileImgClass} />
        ))}
        <FinalCTA />
      </main>
      <Footer />
      <AnimationObserver />
    </>
  );
}
