const prizes = [
  { rank: '🥇 1등', condition: '6개 일치', reward: '10,000,000원' },
  { rank: '🥈 2등', condition: '5개 + 보너스', reward: '1,000,000원' },
  { rank: '🥉 3등', condition: '5개 일치', reward: '1,000,000원' },
  { rank: '4등', condition: '4개 일치', reward: '응모권 10장' },
  { rank: '5등', condition: '3개 일치', reward: '응모권 5장' },
];

const notes = [
  '매주 토요일 저녁 8시 35분, MBC 로또 6/45 생방송 당첨번호로 추첨해요.',
  '1~3등 상금은 당첨자 수로 나눠 지급해요.',
  '상금 5만원 초과 시 제세공과금 22%가 공제돼요.',
];

export default function PrizeTable() {
  return (
    <section className="px-6 py-20 bg-gray-50">
      <div className="max-w-lg mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">
          당첨되면 이렇게 드려요
        </h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 font-semibold text-gray-700">등수</th>
              <th className="text-left py-3 font-semibold text-gray-700">조건</th>
              <th className="text-right py-3 font-semibold text-gray-700">당첨금</th>
            </tr>
          </thead>
          <tbody>
            {prizes.map((prize) => (
              <tr key={prize.rank} className="border-b border-gray-100">
                <td className="py-3 text-gray-900">{prize.rank}</td>
                <td className="py-3 text-gray-600">{prize.condition}</td>
                <td className="py-3 text-right font-medium text-gray-900">{prize.reward}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <ul className="mt-6 space-y-1">
          {notes.map((note) => (
            <li key={note} className="text-xs text-gray-400">
              · {note}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
