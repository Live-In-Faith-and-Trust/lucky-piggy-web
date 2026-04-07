import { PLAY_STORE_URL, PRE_SIGNUP_COUNT } from '@/lib/constants';

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 py-20 text-center bg-white">
      <p className="text-sm font-medium text-gray-500 mb-3">매일 걷기만 해도</p>
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
        1,000만 원<br />공짜로 받아가세요
      </h1>
      <p className="text-base sm:text-lg text-gray-600 max-w-md mb-8">
        걷고, 보고, 초대하면 응모권이 쌓여요.
        <br />
        매주 토요일 MBC 로또 방송으로 당첨자를 뽑아요.
      </p>
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-gray-900 text-white font-semibold px-8 py-4 rounded-full text-base hover:bg-gray-700 transition-colors"
      >
        구글 플레이에서 무료 다운로드
      </a>
      <p className="mt-4 text-sm text-gray-400">
        지금 {PRE_SIGNUP_COUNT.toLocaleString()}명이 사전 신청했어요
      </p>
    </section>
  );
}
