import Link from 'next/link';

export const metadata = {
  title: '신청 완료 | 당첨돼지',
};

export default function Welcome() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        backgroundColor: '#FFFFFF',
      }}
    >
      {/* Checkmark circle */}
      <div
        style={{
          width: 80,
          height: 80,
          borderRadius: '50%',
          background: '#FFDD13',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 32,
        }}
      >
        <span style={{ fontSize: 36, fontWeight: 800, color: '#1A1A1A' }}>✓</span>
      </div>

      {/* Headline */}
      <h1
        style={{
          fontWeight: 800,
          fontSize: 'clamp(24px, 3vw, 36px)',
          color: '#1A1A1A',
          marginBottom: 12,
          textAlign: 'center',
        }}
      >
        사전신청이 완료되었어요!
      </h1>

      {/* Sub-text */}
      <p
        style={{
          fontSize: 16,
          color: '#767676',
          marginBottom: 40,
          textAlign: 'center',
        }}
      >
        빠른 시일 내에 소식을 전해드릴게요.
      </p>

      {/* CTA button */}
      <Link
        href="/"
        className="btn-dark"
        style={{
          width: '100%',
          maxWidth: 280,
          fontSize: 16,
        }}
      >
        홈으로 돌아가기
      </Link>
    </main>
  );
}
