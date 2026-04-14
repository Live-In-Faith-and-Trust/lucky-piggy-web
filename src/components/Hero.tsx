import Image from 'next/image';
import { PLAY_STORE_URL } from '@/lib/constants';

export default function Hero() {
  return (
    <section className="relative">
      {/* Gold gradient zone */}
      <div
        className="relative px-6 pt-6"
        style={{ background: 'linear-gradient(145deg, #FEE255 0%, #FFDD13 100%)', paddingBottom: 60 }}
      >
        {/* Logo lockup */}
        <div className="animate-fade-in flex items-center gap-2 mb-8 max-w-5xl mx-auto">
          <Image src="/images/app-icon.png" alt="당첨돼지 로고" width={36} height={36} className="rounded-xl" />
          <span style={{ fontSize: 22, fontWeight: 700, color: '#1A1A1A' }}>당첨돼지</span>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:gap-12">
            {/* Text content */}
            <div className="flex-1 order-2 md:order-1">
              {/* Eyebrow tag */}
              <div className="animate-fade-in-up-d1 flex justify-center md:justify-start mb-4">
                <span
                  className="pill"
                  style={{ background: '#FE6A86', color: '#FFFFFF', fontSize: 12, fontWeight: 500, padding: '6px 16px' }}
                >
                  매주 토요일 MBC 로또 생방송
                </span>
              </div>

              {/* Headline */}
              <h1
                className="animate-fade-in-up-d2 text-center md:text-left"
                style={{ fontSize: 'clamp(22px, 3.5vw, 48px)', fontWeight: 800, lineHeight: 1.25, color: '#1A1A1A', wordBreak: 'keep-all' }}
              >
                가입만 해도 응모권 100장<br />1,000만원 당첨에 도전하세요
              </h1>

              {/* Sub-headline */}
              <p
                className="animate-fade-in-up-d3 text-center md:text-left mt-4"
                style={{ fontSize: 'clamp(17px, 2vw, 22px)', fontWeight: 400, color: '#444444', maxWidth: 420, wordBreak: 'keep-all' }}
              >
                실제 로또 동일번호로 매주 토요일 추첨
              </p>

              {/* CTA */}
              <div className="animate-fade-in-up-d4 flex flex-col items-center md:items-start gap-2 mt-8">
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-dark animate-gold-pulse"
                  style={{ width: '100%', maxWidth: 320, boxShadow: '0 4px 16px rgba(0,0,0,0.25)' }}
                >
                  구글 플레이에서 무료 다운로드
                </a>
              </div>
            </div>

            {/* Pig hero asset */}
            <div className="animate-fade-in-up flex justify-center order-1 md:order-2 mb-6 md:mb-0 md:w-80 lg:w-96">
              <Image
                src="/images/pig/pig-money.png"
                alt="돈 든 돼지"
                width={320}
                height={320}
                className="animate-float"
                style={{ filter: 'drop-shadow(0 16px 48px rgba(0,0,0,0.18))' }}
              />
            </div>
          </div>
        </div>

        <div style={{ height: 40 }} />
      </div>
    </section>
  );
}
