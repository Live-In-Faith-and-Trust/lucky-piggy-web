const missions = [
  {
    icon: '🚶',
    title: '매일 걷기',
    description: '하루 1,000보~10,000보, 걸음 수에 따라 응모권 지급',
  },
  {
    icon: '📱',
    title: '광고 보기',
    description: '짧은 광고 영상 시청 시 응모권 즉시 지급',
  },
  {
    icon: '👫',
    title: '친구 초대',
    description: '친구가 가입하면 나도, 친구도 응모권 지급',
  },
];

export default function MissionList() {
  return (
    <section className="px-6 py-20 bg-white text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-12">
          응모권 받는 방법
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {missions.map((mission) => (
            <div key={mission.title} className="flex flex-col items-center gap-3">
              <span className="text-4xl">{mission.icon}</span>
              <h3 className="font-semibold text-gray-900">{mission.title}</h3>
              <p className="text-sm text-gray-500">{mission.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
