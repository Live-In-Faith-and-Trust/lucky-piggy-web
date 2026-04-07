# 당첨돼지 랜딩페이지

당첨돼지 앱의 구글 플레이스토어 다운로드 유도 랜딩페이지.

## 기술 스택

- Next.js 16 (App Router)
- TypeScript
- TailwindCSS
- Vercel 배포

## 로컬 실행

```bash
npm install
npm run dev
```

## 테스트

```bash
npm test
```

## 교체 포인트

`src/lib/constants.ts`에서 관리:

- `PLAY_STORE_URL` — 구글 플레이스토어 앱 URL
- `PRE_SIGNUP_COUNT` — 사전 신청자 수 (정적 값 또는 API 연동)
- `PRE_SIGNUP_GOAL` — 목표 인원

## 미결 사항

- [ ] 구글 플레이스토어 앱 URL 확정 → `constants.ts`의 `PLAY_STORE_URL` 교체
- [ ] 사전 신청자 수 API 연동 (현재 정적 값)
- [ ] 앱 스크린샷 / 캐릭터 이미지 에셋 추가
- [ ] 도메인 확정 후 Vercel 커스텀 도메인 설정
- [ ] 개인정보처리방침 · 이용약관 내용 작성

## 배포

Vercel에 레포를 연결하면 자동 배포됩니다.
