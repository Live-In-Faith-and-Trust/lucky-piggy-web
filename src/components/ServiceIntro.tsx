import Image from 'next/image';

const steps = [
  {
    number: '01',
    pig: '/images/pig/pig-walk.png',
    title: '하루 만보 걸으면',
    body: '걸음수에 따라 복권 티켓이 자동 적립돼요. 만보 달성 시 최대 3장.',
    tag: '📍 만보 = 복권 3장',
    tagStyle: { background: '#F5F5F5', color: '#444444' },
  },
  {
    number: '02',
    pig: '/images/pig/pig-cinema.png',
    title: '광고 보고 추가 획득',
    body: '하루 최대 5회 광고 시청으로 복권 추가 적립.',
    tag: '📺 광고 1회 = 복권 1장',
    tagStyle: { background: '#F5F5F5', color: '#444444' },
  },
  {
    number: '03',
    pig: '/images/pig/pig-invite.png',
    title: '친구 초대하면 보너스',
    body: '친구가 앱을 설치하면 양쪽 모두 복권 10장 지급.',
    tag: '👥 친구 1명 = 복권 10장',
    tagStyle: { background: '#F5F5F5', color: '#444444' },
  },
  {
    number: '04',
    pig: '/images/pig/pig-default.png',
    title: '매주 토요일 생방송 추첨',
    body: 'MBC 로또 6/45 생방송에 연동. 투명하고 공정한 추첨.',
    tag: '📺 MBC 로또 6/45 연동',
    tagStyle: { background: '#FFDCE0', color: '#FE6A86' },
  },
];

export default function ServiceIntro() {
  return (
    <section className="entrance" style={{ background: '#E5E5E5', padding: '48px 24px' }}>
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <p
          className="text-center"
          style={{ fontSize: 14, fontWeight: 500, color: '#FE6A86', letterSpacing: '0.08em', textTransform: 'uppercase' }}
        >
          서비스 소개
        </p>

        {/* Headline */}
        <h2 className="text-center mt-2" style={{ fontSize: 32, fontWeight: 700, color: '#1A1A1A', lineHeight: 1.3 }}>
          걷기만 해도<br />복권이 생겨요
        </h2>

        {/* Step cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {steps.map((step) => (
            <div key={step.number} className="card relative overflow-hidden" style={{ padding: 24 }}>
              {/* Step number circle */}
              <div
                className="flex items-center justify-center"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: '#FFDD13',
                  fontSize: 16,
                  fontWeight: 600,
                  color: '#1A1A1A',
                  marginBottom: 12,
                  flexShrink: 0,
                }}
              >
                {step.number}
              </div>

              {/* Pig image — right side, bottom-anchored */}
              <div style={{ position: 'absolute', right: 16, bottom: 0 }}>
                <Image src={step.pig} alt={step.title} width={80} height={80} />
              </div>

              {/* Content */}
              <div style={{ paddingRight: 96 }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: '#1A1A1A' }}>{step.title}</h3>
                <p style={{ fontSize: 14, fontWeight: 400, color: '#767676', marginTop: 4, lineHeight: 1.5 }}>
                  {step.body}
                </p>
                <span
                  className="pill mt-3"
                  style={{ ...step.tagStyle, fontSize: 13, fontWeight: 500, padding: '5px 14px' }}
                >
                  {step.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
