import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative">
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

        {/* Main content: vertical stack on mobile, side-by-side on desktop */}
        <div className="max-w-5xl mx-auto relative z-10 flex flex-col md:flex-row md:items-center md:gap-8">
          {/* Left column: Label → Headline → helper + CTA */}
          <div className="flex-1 flex flex-col md:max-w-[320px]">
            {/* Label pill */}
            <div className="animate-fade-in-up-d1 flex justify-start mb-4">
              <span
                className="pill"
                style={{
                  background: '#FF7070',
                  color: '#FFFFFF',
                  fontSize: 15,
                  fontWeight: 800,
                  padding: '7px 22px',
                  borderRadius: '100px',
                }}
              >
                로또 앱테크
              </span>
            </div>

            {/* Headline */}
            <h1
              className="animate-fade-in-up-d2 text-left"
              style={{
                fontSize: 'clamp(32px, 3.5vw, 48px)',
                fontWeight: 800,
                lineHeight: 1.25,
                color: '#1A1A1A',
                wordBreak: 'keep-all',
              }}
            >
              매주 실제 로또 번호로<br />당첨금 1000만원
            </h1>

            {/* Image placeholder — mobile only */}
            <div className="animate-fade-in-up-d3 md:hidden flex justify-center mt-8 mb-6">
              <div
                className="rounded-3xl flex items-center justify-center"
                style={{
                  width: 280,
                  height: 280,
                  background: 'rgba(254, 226, 85, 0.6)',
                }}
              >
                <span style={{ color: '#1A1A1A', opacity: 0.4, fontSize: 16 }}>이미지 영역</span>
              </div>
            </div>

            {/* Helper text + CTA */}
            <div className="animate-fade-in-up-d4 flex flex-col items-center md:items-start gap-2 mt-4 md:mt-8">
              <p style={{ fontSize: 18, fontWeight: 700, color: '#1A1A1A', opacity: 0.6, marginBottom: 8 }}>
                사전신청 하고
              </p>
              <a
                href="https://tally.so/r/GxBJYz"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark animate-gold-pulse"
                style={{ width: '100%', fontSize: 18 }}
              >
                무료 복권 100장 받기
              </a>
            </div>
          </div>

          {/* Right column: Image placeholder — desktop only */}
          <div className="hidden md:flex flex-1 justify-center items-center">
            <div
              className="rounded-3xl flex items-center justify-center"
              style={{
                width: 400,
                height: 400,
                background: 'rgba(254, 226, 85, 0.6)',
              }}
            >
              <span style={{ color: '#1A1A1A', opacity: 0.4, fontSize: 16 }}>이미지 영역</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
