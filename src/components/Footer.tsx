const notices = [
  '당첨돼지는 MBC 또는 복권위원회와 관계없는 독립 서비스예요.',
  '추첨 기준 번호로 로또 6/45 당첨번호를 사용하며, 실제 로또 구매·판매와 무관해요.',
  '상금 지급 시 관계 법령에 따라 제세공과금이 공제될 수 있어요.',
];

export default function Footer() {
  return (
    <footer className="px-6 py-12 bg-gray-50 border-t border-gray-200">
      <div className="max-w-lg mx-auto">
        <ul className="space-y-1 mb-6">
          {notices.map((notice) => (
            <li key={notice} className="text-xs text-gray-400">
              · {notice}
            </li>
          ))}
        </ul>
        <div className="flex gap-4 text-xs text-gray-500 mb-4">
          <a href="/privacy" className="hover:underline">
            개인정보처리방침
          </a>
          <a href="/terms" className="hover:underline">
            이용약관
          </a>
        </div>
        <p className="text-xs text-gray-400">
          © 2026 당첨돼지. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
