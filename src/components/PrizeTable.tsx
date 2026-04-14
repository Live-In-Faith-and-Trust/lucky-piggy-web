import Image from 'next/image';

const prizes = [
  {
    label: '🏆 1등',
    amount: '10,000,000원',
    sub: '매주 1명, 현금 지급',
    style: 'gold' as const,
  },
  {
    label: '🥈 2등',
    amount: '500,000원',
    sub: '매주 3명',
    style: 'silver' as const,
  },
  {
    label: '🥉 3등',
    amount: '100,000원',
    sub: '매주 10명',
    style: 'bronze' as const,
  },
];

const trustBadges = ['MBC 로또 6/45 연동', '공정위 심사 완료', '개인정보 보호'];

export default function PrizeTable() {
  return (
    <section
      className="entrance"
      style={{ background: 'radial-gradient(ellipse at center, #1A1A1A 0%, #2A2A2A 100%)', padding: '64px 24px' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <p
          className="text-center"
          style={{ fontSize: 14, fontWeight: 500, color: '#FFDD13', letterSpacing: '0.08em', textTransform: 'uppercase' }}
        >
          당첨 구조
        </p>

        {/* Headline */}
        <h2 className="text-center mt-2" style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.2 }}>
          매주 1,000만원<br />실제로 드려요
        </h2>

        {/* Sub */}
        <p className="text-center mt-3" style={{ fontSize: 16, fontWeight: 400, color: '#BDBDBF' }}>
          응모권 1장 = 추첨 1회 참가. 응모권이 많을수록 당첨 확률 UP.
        </p>

        {/* Prize cards — responsive grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* 1등 — gold gradient + shimmer */}
          <div
            className="animate-shimmer md:col-span-3"
            style={{
              background: 'linear-gradient(145deg, #FFDD13, #FEE255)',
              borderRadius: 20,
              padding: 24,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div className="flex justify-between items-end">
              <div>
                <span
                  className="pill"
                  style={{ background: 'rgba(255,255,255,0.4)', color: '#1A1A1A', fontSize: 12, fontWeight: 500, padding: '4px 12px' }}
                >
                  🏆 1등
                </span>
                <div style={{ fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 700, color: '#1A1A1A', marginTop: 8, lineHeight: 1 }}>
                  10,000,000원
                </div>
                <div style={{ fontSize: 14, fontWeight: 400, color: '#444444', marginTop: 4 }}>
                  매주 1명, 현금 지급
                </div>
              </div>
              <Image
                src="/images/pig/pig-money.png"
                alt="당첨 돼지"
                width={96}
                height={96}
                style={{ marginBottom: -24, marginRight: -4, flexShrink: 0 }}
              />
            </div>
          </div>

          {/* 2등 */}
          <div style={{ background: '#FFFFFF', borderRadius: 20, padding: '24px', borderLeft: '4px solid #BDBDBF' }}>
            <div style={{ fontSize: 18, fontWeight: 600, color: '#444444' }}>🥈 2등</div>
            <div style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 700, color: '#1A1A1A', marginTop: 8 }}>500,000원</div>
            <div style={{ fontSize: 14, fontWeight: 400, color: '#767676', marginTop: 4 }}>매주 3명</div>
          </div>

          {/* 3등 */}
          <div style={{ background: '#FFFFFF', borderRadius: 20, padding: '24px', borderLeft: '4px solid #FD969A' }}>
            <div style={{ fontSize: 18, fontWeight: 600, color: '#444444' }}>🥉 3등</div>
            <div style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 700, color: '#1A1A1A', marginTop: 8 }}>100,000원</div>
            <div style={{ fontSize: 14, fontWeight: 400, color: '#767676', marginTop: 4 }}>매주 10명</div>
          </div>

          {/* 보너스 */}
          <div style={{ background: '#F5F5F5', borderRadius: 20, padding: '24px' }}>
            <div style={{ fontSize: 18, fontWeight: 600, color: '#444444' }}>🎁 보너스</div>
            <div style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 700, color: '#1A1A1A', marginTop: 8 }}>추가 응모권 10장</div>
            <div style={{ fontSize: 14, fontWeight: 400, color: '#767676', marginTop: 4 }}>사전신청자 전원</div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="flex justify-center flex-wrap gap-3 mt-10">
          {trustBadges.map((badge) => (
            <span
              key={badge}
              className="pill"
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#FFFFFF', fontSize: 12, fontWeight: 500, padding: '6px 14px' }}
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
