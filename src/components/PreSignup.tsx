export default function PreSignup() {
  return (
    <section id="pre-signup" className="entrance" style={{ background: '#FFFFFF', padding: '64px 24px' }}>
      <div className="max-w-xl mx-auto text-center">
        {/* Section label */}
        <p style={{ fontSize: 14, fontWeight: 500, color: '#FE6A86', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          사전신청
        </p>

        {/* Headline */}
        <h2 className="mt-2" style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, color: '#1A1A1A', lineHeight: 1.3 }}>
          출시 전 미리 신청하면<br />추가 응모권 10장 증정
        </h2>

        <p className="mt-3" style={{ fontSize: 16, fontWeight: 400, color: '#767676' }}>
          앱 출시 시 카카오톡으로 알림을 보내드려요.
        </p>

        {/* CTA */}
        <div className="flex justify-center mt-8">
          <a
            href="#"
            className="btn-dark"
            style={{ width: '100%', maxWidth: 360, boxShadow: '0 4px 16px rgba(0,0,0,0.15)' }}
          >
            무료로 사전신청하기 →
          </a>
        </div>

        <p className="mt-3" style={{ fontSize: 12, fontWeight: 500, color: '#BDBDBF' }}>
          무료 · 스팸 없음 · 언제든지 취소 가능
        </p>
      </div>
    </section>
  );
}
