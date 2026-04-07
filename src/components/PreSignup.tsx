import { PLAY_STORE_URL, PRE_SIGNUP_COUNT, PRE_SIGNUP_GOAL } from '@/lib/constants';

export default function PreSignup() {
  const progress = Math.min((PRE_SIGNUP_COUNT / PRE_SIGNUP_GOAL) * 100, 100);

  return (
    <section className="px-6 py-20 bg-white text-center">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          5,000명이 모이면 정식 오픈해요
        </h2>
        <p className="text-gray-600 mb-8">
          현재 {PRE_SIGNUP_COUNT.toLocaleString()}명이 기다리고 있어요
        </p>

        <div
          role="progressbar"
          aria-valuenow={PRE_SIGNUP_COUNT}
          aria-valuemin={0}
          aria-valuemax={PRE_SIGNUP_GOAL}
          className="w-full bg-gray-200 rounded-full h-3 mb-2"
        >
          <div
            className="bg-gray-900 h-3 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-sm text-gray-400 mb-10">
          {PRE_SIGNUP_COUNT.toLocaleString()} / {PRE_SIGNUP_GOAL.toLocaleString()}명
        </p>

        <p className="text-sm text-gray-500 mb-6">
          사전 신청 기간에 다운로드하면
          <br />
          오픈 즉시 응모권을 드려요.
        </p>

        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gray-900 text-white font-semibold px-8 py-4 rounded-full text-base hover:bg-gray-700 transition-colors"
        >
          지금 바로 다운로드하기
        </a>
      </div>
    </section>
  );
}
