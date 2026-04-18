// 친구 초대 deep link redirect 로직 — `/invite/{code}` 페이지에서 사용.

export const ANDROID_PACKAGE_NAME = 'kr.co.withly.android';

/**
 * referral 코드 sanitization — 알파벳/숫자만, 최대 32글자.
 * 잘못된 코드여도 redirect는 진행되며 앱이 서버 검증으로 reject한다.
 */
export function sanitizeCode(rawCode: string): string {
  return rawCode.replace(/[^A-Za-z0-9]/g, '').slice(0, 32);
}

/**
 * Android Play Store install referrer URL 생성.
 * 설치 후 첫 실행 시 Install Referrer SDK가 referral_code={code}를 전달.
 */
export function buildPlayStoreReferrerUrl(code: string): string {
  const sanitized = sanitizeCode(code);
  const referrer = encodeURIComponent(`referral_code=${sanitized}`);
  return `https://play.google.com/store/apps/details?id=${ANDROID_PACKAGE_NAME}&referrer=${referrer}`;
}

export function isAndroid(userAgent: string): boolean {
  return /android/i.test(userAgent);
}

export function isIos(userAgent: string): boolean {
  return /iphone|ipad|ipod/i.test(userAgent);
}
