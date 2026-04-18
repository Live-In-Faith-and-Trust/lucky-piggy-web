import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import {
  buildPlayStoreReferrerUrl,
  isAndroid,
  isIos,
  sanitizeCode,
} from '@/lib/invite';

export const dynamic = 'force-dynamic';

interface InvitePageProps {
  params: Promise<{ code: string }>;
}

export default async function InvitePage({ params }: InvitePageProps) {
  const { code: rawCode } = await params;
  const code = sanitizeCode(rawCode);

  const headersList = await headers();
  const userAgent = headersList.get('user-agent') ?? '';

  // Android: 앱 설치되어 있으면 App Links가 이 페이지 도달 전에 가로챔.
  // 여기 도달 = 미설치 → Play Store + install referrer로 redirect.
  if (isAndroid(userAgent)) {
    redirect(buildPlayStoreReferrerUrl(code));
  }

  // iOS: App Store 출시 전 — fallback 페이지
  // Desktop / 기타: fallback 페이지
  return (
    <main className="max-w-md mx-auto px-6 py-20 text-center">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">
        당첨돼지 친구 초대
      </h1>
      <p className="text-gray-600 mb-6">
        초대코드: <span className="font-mono font-bold">{code}</span>
      </p>
      {isIos(userAgent) ? (
        <p className="text-gray-500 text-sm">iOS 앱은 곧 출시 예정이에요.</p>
      ) : (
        <p className="text-gray-500 text-sm">
          모바일에서 이 링크를 열어주세요.
        </p>
      )}
    </main>
  );
}
