const missions = [
  { icon: '🚶', name: '만보 달성', reward: '응모권 3장', frequency: '매일' },
  { icon: '📺', name: '광고 시청', reward: '응모권 1장', frequency: '하루 5회' },
  { icon: '👥', name: '친구 초대', reward: '응모권 10장', frequency: '무제한' },
  { icon: '🔔', name: '출석 체크', reward: '응모권 1장', frequency: '매일' },
];

export default function MissionList() {
  return (
    <section className="entrance" style={{ background: '#FFFFFF', padding: '48px 24px' }}>
      <div className="max-w-2xl mx-auto">
        {/* Section label */}
        <p
          className="text-center"
          style={{ fontSize: 14, fontWeight: 500, color: '#FE6A86', letterSpacing: '0.08em', textTransform: 'uppercase' }}
        >
          미션 &amp; 보상
        </p>

        {/* Headline */}
        <h2 className="text-center mt-2" style={{ fontSize: 24, fontWeight: 600, color: '#1A1A1A' }}>
          이렇게 응모권을 모아요
        </h2>

        {/* Mission table card */}
        <div className="card mt-6 overflow-hidden">
          {missions.map((m, i) => (
            <div
              key={m.name}
              className="flex items-center"
              style={{
                padding: '16px 24px',
                borderBottom: i < missions.length - 1 ? '1px solid #F5F5F5' : 'none',
              }}
            >
              <div style={{ fontSize: 32, width: 40, flexShrink: 0 }}>{m.icon}</div>
              <div className="flex-1" style={{ marginLeft: 12 }}>
                <p style={{ fontSize: 16, fontWeight: 400, color: '#1A1A1A' }}>{m.name}</p>
              </div>
              <div className="text-right">
                <p style={{ fontSize: 16, fontWeight: 600, color: '#FE6A86' }}>{m.reward}</p>
                <p style={{ fontSize: 12, fontWeight: 500, color: '#BDBDBF' }}>{m.frequency}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Total potential chip */}
        <div className="flex flex-col items-center mt-6">
          <p style={{ fontSize: 14, fontWeight: 400, color: '#767676' }}>하루 최대</p>
          <div style={{ background: '#1A1A1A', borderRadius: 12, padding: '12px 24px', marginTop: 8 }}>
            <p style={{ fontSize: 24, fontWeight: 600, color: '#FFDD13' }}>응모권 20장 획득 가능</p>
          </div>
        </div>
      </div>
    </section>
  );
}
