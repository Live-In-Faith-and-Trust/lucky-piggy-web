import Image from 'next/image';

const prizes = [
  {
    label: '메인 리워드',
    amount: '주간 리워드',
    sub: '선정된 참여자에게 지급',
    style: 'gold' as const,
  },
  {
    label: '참여 리워드',
    amount: '추가 혜택',
    sub: '주간 프로모션 운영',
    style: 'silver' as const,
  },
  {
    label: '보너스 리워드',
    amount: '응모권 혜택',
    sub: '참여 활동에 따라 제공',
    style: 'bronze' as const,
  },
];

const trustBadges = ['무료 활동 참여', '운영 기준 안내', '개인정보 보호'];

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
          리워드 안내
        </p>

        {/* Headline */}
        <h2 className="text-center mt-2" style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.2 }}>
          매주 리워드 프로모션에<br />참여해요
        </h2>

        {/* Sub */}
        <p className="text-center mt-3" style={{ fontSize: 16, fontWeight: 400, color: '#BDBDBF' }}>
          응모권으로 주간 프로모션에 참여할 수 있어요.
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
                  메인 리워드
                </span>
                <div style={{ fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 700, color: '#1A1A1A', marginTop: 8, lineHeight: 1 }}>
                  주간 리워드
                </div>
                <div style={{ fontSize: 14, fontWeight: 400, color: '#444444', marginTop: 4 }}>
                  선정된 참여자에게 지급
                </div>
              </div>
              <Image
                src="/images/pig/pig-money.png"
                alt="리워드 돼지"
                width={96}
                height={96}
                style={{ marginBottom: -24, marginRight: -4, flexShrink: 0 }}
              />
            </div>
          </div>

          {/* 2등 */}
          <div style={{ background: '#FFFFFF', borderRadius: 20, padding: '24px', borderLeft: '4px solid #BDBDBF' }}>
            <div style={{ fontSize: 18, fontWeight: 600, color: '#444444' }}>참여 리워드</div>
            <div style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 700, color: '#1A1A1A', marginTop: 8 }}>추가 혜택</div>
            <div style={{ fontSize: 14, fontWeight: 400, color: '#767676', marginTop: 4 }}>주간 프로모션 운영</div>
          </div>

          {/* 3등 */}
          <div style={{ background: '#FFFFFF', borderRadius: 20, padding: '24px', borderLeft: '4px solid #FD969A' }}>
            <div style={{ fontSize: 18, fontWeight: 600, color: '#444444' }}>보너스 리워드</div>
            <div style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 700, color: '#1A1A1A', marginTop: 8 }}>응모권 혜택</div>
            <div style={{ fontSize: 14, fontWeight: 400, color: '#767676', marginTop: 4 }}>참여 활동에 따라 제공</div>
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
