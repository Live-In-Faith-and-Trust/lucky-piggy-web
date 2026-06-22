import Hero from '@/components/Hero';
import FeatureSection from '@/components/FeatureSection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import StickyHeader from '@/components/StickyHeader';
import AnimationObserver from '@/components/AnimationObserver';

const features = [
  { headline: '걷기만 해도\n응모권을 드려요',    layout: 'reversed' as const, mobileImgRight: false, mobileImgClass: 'w-[72%]', imgFadeBottom: true, fadeImgClass: 'w-[68%] md:w-[76%]' },
  { headline: '주 1회\n응모 결과를 발표해요', highlightNumber: '1', layout: 'default'  as const, mobileImgRight: false, mobileImgClass: 'w-[90%]', imgWidthPct: 90 },
  { headline: '선정된 참여자에게\n리워드를 지급해요',       layout: 'reversed' as const, mobileImgRight: false, mobileImgClass: 'w-[72%]', imgFadeBottom: true },
];

export default function Home() {
  return (
    <>
      <StickyHeader />
      <main>
        <Hero />
        {features.map((f, i) => (
          <FeatureSection key={i} headline={f.headline} index={i} layout={f.layout} highlightNumber={f.highlightNumber} mobileImgRight={f.mobileImgRight} mobileImgClass={f.mobileImgClass} imgFadeBottom={f.imgFadeBottom} fadeImgClass={f.fadeImgClass} imgWidthPct={f.imgWidthPct} />
        ))}
        <FinalCTA />
      </main>
      <Footer />
      <AnimationObserver />
    </>
  );
}
