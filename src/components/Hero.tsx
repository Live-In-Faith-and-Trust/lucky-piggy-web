import Image from 'next/image';
import { PLAY_STORE_URL } from '@/lib/constants';

export default function Hero() {
  return (
    <section className="relative">
      {/* Gold gradient zone */}
      <div
        className="relative px-6 pt-6 overflow-hidden"
        style={{
          background: 'linear-gradient(145deg, #FEE255 0%, #FFDD13 100%)',
          paddingBottom: 60,
          minHeight: '100vh',
        }}
      >
        {/* Logo lockup */}
        <div className="animate-fade-in flex items-center gap-2 mb-8 max-w-5xl mx-auto relative z-10">
          <Image src="/images/app-icon.png" alt="당첨돼지 로고" width={36} height={36} className="rounded-xl" />
          <span style={{ fontSize: 22, fontWeight: 700, color: '#1A1A1A' }}>당첨돼지</span>
        </div>

        {/* Text content + Pig */}
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="md:max-w-[50%] md:mt-[100px]">
            {/* Eyebrow tag */}
            <div className="animate-fade-in-up-d1 flex justify-center md:justify-start mb-4">
              <span
                className="pill"
                style={{ background: '#FF7070', color: '#FFFFFF', fontSize: 15, fontWeight: 800, padding: '7px 22px' }}
              >
                로또 응모 앱테크
              </span>
            </div>

            {/* Headline */}
            <h1
              className="animate-fade-in-up-d2 text-center md:text-left"
              style={{ fontSize: 'clamp(32px, 3.5vw, 48px)', fontWeight: 800, lineHeight: 1.25, color: '#1A1A1A', wordBreak: 'keep-all' }}
            >
              걷기만해도 받는 응모권
            </h1>

            {/* CTA — 데스크톱 전용 */}
            <div className="animate-fade-in-up-d4 hidden md:flex flex-col items-start gap-2 mt-8">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark animate-gold-pulse"
                style={{ width: '100%', maxWidth: 320, boxShadow: '0 4px 16px rgba(0,0,0,0.25)', fontSize: 18 }}
              >
                지금 바로 다운로드
              </a>
            </div>
          </div>

          {/* Pig — 데스크톱: 컨테이너 기준 absolute, 우측 절반 */}
          <div className="hidden md:flex absolute -top-[160px] right-0 w-1/2 justify-center items-end">
            <div
              className="speech-bubble"
              style={{
                position: 'absolute',
                top: 48,
                right: 0,
                background: '#FFFFFF',
                borderRadius: 16,
                padding: '10px 16px',
                fontSize: 21,
                fontWeight: 700,
                color: '#1A1A1A',
                whiteSpace: 'nowrap',
                boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
                zIndex: 2,
              }}
            >
              가입만해도 응모권 100장을 드려요!
              <div style={{
                position: 'absolute',
                bottom: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 0,
                height: 0,
                borderLeft: '10px solid transparent',
                borderRight: '10px solid transparent',
                borderTop: '10px solid #FFFFFF',
              }} />
            </div>
            <Image
              src="/images/pig/pig-money.png"
              alt="돈 든 돼지"
              width={496}
              height={496}
              className="w-[428px] lg:w-[496px] h-auto"
              style={{ filter: 'drop-shadow(0 16px 48px rgba(0,0,0,0.18))' }}
            />
          </div>

          {/* Pig — 모바일 전용: 일반 흐름 */}
          <div className="md:hidden flex justify-center mt-8 mb-0 relative">
            <div
              className="speech-bubble"
              style={{
                position: 'absolute',
                top: 48,
                right: 0,
                background: '#FFFFFF',
                borderRadius: 16,
                padding: '10px 16px',
                fontSize: 19,
                fontWeight: 700,
                color: '#1A1A1A',
                whiteSpace: 'nowrap',
                boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
                zIndex: 2,
              }}
            >
              가입만해도 응모권 100장을 드려요!
              <div style={{
                position: 'absolute',
                bottom: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 0,
                height: 0,
                borderLeft: '10px solid transparent',
                borderRight: '10px solid transparent',
                borderTop: '10px solid #FFFFFF',
              }} />
            </div>
            <Image
              src="/images/pig/pig-money.png"
              alt="돈 든 돼지"
              width={384}
              height={384}
              className="w-[72%] h-auto"
              style={{ filter: 'drop-shadow(0 16px 48px rgba(0,0,0,0.18))' }}
            />
          </div>

          {/* CTA — 모바일 전용 */}
          <div
            className="flex md:hidden justify-center w-full"
            style={{ marginTop: -50, position: 'relative', zIndex: 10 }}
          >
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-dark animate-gold-pulse"
              style={{ width: '100%', maxWidth: 320, boxShadow: '0 4px 16px rgba(0,0,0,0.25)', fontSize: 18 }}
            >
              지금 바로 다운로드
            </a>
          </div>
        </div>

        <div className="h-2 md:h-10" />
      </div>
    </section>
  );
}
