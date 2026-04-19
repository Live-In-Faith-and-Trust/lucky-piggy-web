import Image from 'next/image';

export default function FinalCTA() {
  return (
    <section className="px-6 py-24 text-center" style={{ background: '#FFDD13' }}>
      <div className="entrance max-w-lg mx-auto">
        <div className="flex justify-center mb-8">
          <Image
            src="/images/pig/cta-main.png"
            alt="당첨돼지"
            width={200}
            height={207}
            className="w-[288px] md:w-[360px] h-auto drop-shadow-xl animate-float"
          />
        </div>
        <p
          style={{
            fontSize: 'clamp(28px, 3vw, 44px)',
            fontWeight: 800,
            lineHeight: 1.35,
            color: '#1A1A1A',
            wordBreak: 'keep-all',
            whiteSpace: 'pre-line',
            marginBottom: 32,
          }}
        >
          {'지금 바로 시작하고\n1,000만원의\n주인공이 되어보세요'}
        </p>

        <p style={{ fontSize: 18, fontWeight: 700, color: '#1A1A1A', opacity: 0.6, marginBottom: 2 }}>
          사전신청 하고
        </p>

        <a
          href="https://tally.so/r/GxBJYz"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-dark animate-gold-pulse"
          style={{
            width: '100%',
            fontSize: 18,
            boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
          }}
        >
          무료 복권 100장 받기
        </a>
      </div>
    </section>
  );
}
