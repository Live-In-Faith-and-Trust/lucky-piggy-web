export default function FinalCTA() {
  return (
    <section className="entrance px-6 py-24 text-center" style={{ background: '#FFDD13' }}>
      <div className="max-w-lg mx-auto">
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

        <p style={{ fontSize: 14, color: '#767676', marginBottom: 8 }}>
          사전신청 하고
        </p>

        <a
          href="https://tally.so/r/GxBJYz"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-dark animate-gold-pulse"
          style={{
            fontSize: 18,
            width: '100%',
            maxWidth: 320,
            display: 'block',
            margin: '0 auto',
          }}
        >
          무료 복권 100장 받기
        </a>
      </div>
    </section>
  );
}
