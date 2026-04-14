import Image from 'next/image';

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
                style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, lineHeight: 1.2, color: '#1A1A1A' }}
              >
                하루 만보,<br />1000만원<br />당첨 기회
              </h1>

              {/* Sub-headline */}
              <p
                className="animate-fade-in-up-d3 text-center md:text-left mt-4"
                style={{ fontSize: 'clamp(15px, 1.5vw, 18px)', fontWeight: 400, color: '#444444', maxWidth: 360 }}
              >
                걸을수록 복권이 쌓여요. 매주 추첨, 진짜 현금 지급.
              </p>

              {/* CTA */}
              <div className="animate-fade-in-up-d4 flex flex-col items-center md:items-start gap-2 mt-8">
                <a
                  href="#pre-signup"
                  className="btn-dark animate-gold-pulse"
                  style={{ width: '100%', maxWidth: 320, boxShadow: '0 4px 16px rgba(0,0,0,0.25)' }}
                >
                  지금 사전신청하기
                </a>
                <p style={{ fontSize: 12, fontWeight: 500, color: '#767676' }}>무료 · 앱 출시 알림만 받아요</p>
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

      {/* Social proof strip — white card overlapping gold zone */}
      <div
        style={{
          background: '#FFFFFF',
          borderRadius: '24px 24px 0 0',
          marginTop: -24,
          position: 'relative',
          zIndex: 1,
          padding: '24px 32px',
        }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-3 max-w-lg mx-auto md:max-w-none md:flex md:justify-center md:gap-16">
            {[
              { value: '1,000만원', label: '주간 상금' },
              { value: '매주 토요일', label: '추첨' },
              { value: 'MBC 로또 6/45', label: '연동 추첨' },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center py-2"
                style={i > 0 ? { borderLeft: '1px solid #E0E0E0' } : {}}
              >
                <div style={{ fontSize: 'clamp(16px, 2vw, 20px)', fontWeight: 600, color: '#1A1A1A' }}>{stat.value}</div>
                <div style={{ fontSize: 12, fontWeight: 500, color: '#767676' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
