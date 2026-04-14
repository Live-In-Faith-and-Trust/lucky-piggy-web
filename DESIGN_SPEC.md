# 당첨돼지 (Lucky Piggy) — Landing Page Design Specification

## Design Principles
- **Tone:** Premium fintech excitement — trustworthy gold + playful pig
- **Mood:** "This is real money, and it's actually winnable"
- **Motion:** Subtle, purposeful — no gimmicks
- **Font:** Pretendard (all weights)

---

## Section 1: Hero

### Layout
Full-viewport section (min-height: 100vh). Split into two vertical zones:
- **Top zone (60%):** Gold gradient background with headline + CTA
- **Bottom zone (40%):** White surface card partially overlapping, holding social proof strip

### Background
Gradient: `#FFDD13` → `#FEE255`, direction: 145deg (bottom-left to top-right)
Subtle noise texture overlay at 4% opacity for premium feel.

### Content Structure (top-to-bottom, centered)
1. **Logo lockup** — `pig-logo.png` (32×32px) + wordmark "당첨돼지" in Title Large (22px/700) in `#1A1A1A`, inline, gap: sm(8px). Positioned top-left with padding: lg(24px).
2. **Pig hero asset** — `pig-money.png`, 280px wide, centered horizontally, slight drop shadow (`0 16px 48px rgba(0,0,0,0.18)`). Floats above content with `z-index: 2`.
3. **Eyebrow tag** — Pill badge, bg: `#FE6A86`, text: "매주 월요일 MBC 로또 생방송" in Label Small (12px/500) white. Border-radius: 100px. Padding: 6px 16px. Centered.
4. **Headline** — Display Small (36px/800), `#1A1A1A`, centered:
   > "하루 만보,\n1000만원 당첨 기회"
   Line-height: 1.2. Text shadow: none.
5. **Sub-headline** — Body Medium (16px/400), `#444444`, centered, max-width: 320px:
   > "걸을수록 복권이 쌓여요. 매주 추첨, 진짜 현금 지급."
6. **Primary CTA button** — Full-width (max 360px), height 56px, bg: `#1A1A1A`, text: "지금 사전신청하기" in Label Large (16px/600) `#FFDD13`. Border-radius: 16px. Shadow: `0 4px 16px rgba(0,0,0,0.25)`. Centered. Margin-top: xl(32px).
7. **Secondary micro-copy** — Label Small (12px/500), `#767676`, centered, margin-top: sm(8px):
   > "무료 · 앱 출시 알림만 받아요"

### Social Proof Strip (bottom card overlap)
White card, border-radius: 24px 24px 0 0, padding: lg(24px) xl(32px).
Three stats in a row, dividers between:
- "**12,847명**이 사전신청" | "**1,000만원** 주간 상금" | "**매주 월요일** 추첨"
Each: number in Headline Small (20px/600) `#1A1A1A`, label in Label Small (12px/500) `#767676`.

### Animation
- Pig asset: gentle float loop — `translateY(-8px)` over 3s ease-in-out, infinite alternate
- CTA button: pulse glow on idle — box-shadow pulse from base to `0 4px 24px rgba(255,221,19,0.5)`
- Hero entrance: elements stagger fade-up (0ms, 150ms, 300ms, 450ms delays)

---

## Section 2: Pre-Signup Progress

### Layout
White background (`#FFFFFF`). Padding: xxl(48px) lg(24px).
Max-width: 480px, centered.

### Content
1. **Section label** — Label Medium (14px/500), `#FE6A86`, centered, uppercase letter-spacing 0.08em:
   "사전신청 현황"
2. **Headline** — Headline Medium (24px/600), `#1A1A1A`, centered, margin-top: sm(8px):
   > "출시 전 미리 신청하면\n추가 복권 10장 증정"
3. **Progress bar component**
   - Outer track: full-width, height 16px, bg: `#F5F5F5`, border-radius: 100px
   - Fill: gradient `#FFDD13` → `#FE6A86`, border-radius: 100px, width: animated to current %
   - Milestone marker at 50%: white circle (20px) with gold border on track
   - Milestone marker at 100%: `pig-hi.png` thumbnail (28px) sitting on top of the bar end
4. **Counter display** — centered below bar, margin-top: md(16px):
   - Current count: Display Medium (44px/700), `#1A1A1A`
   - Slash + goal: Headline Small (20px/600), `#BDBDBF` — e.g. "12,847 / 50,000명"
5. **Milestone reward chips** — horizontal scroll row, gap: sm(8px), margin-top: lg(24px):
   Each chip: pill badge, bg: `#FFF176`, border: 1.5px solid `#FFDD13`, border-radius: 100px, padding: 8px 16px
   - "🎟 1만명 달성 → 복권 5장"
   - "🎉 3만명 달성 → 복권 10장" (highlighted: bg `#FFDD13`)
   - "🏆 5만명 달성 → 복권 20장"
   Label Medium (14px/500), `#444444`
6. **CTA** — same style as Hero primary button, text: "나도 신청하기 →"

### Animation
- Progress bar fill: animate width on scroll-enter, ease-out 1.5s
- Counter: count-up number animation on enter

---

## Section 3: Service Intro (How It Works)

### Layout
Background: `#E5E5E5` (page bg). Padding: xxl(48px) lg(24px).
Max-width: 480px centered.

### Content
1. **Section label** — same style as Section 2, text: "서비스 소개"
2. **Headline** — Headline Large (32px/700), `#1A1A1A`, centered:
   > "걷기만 해도\n복권이 생겨요"
3. **Step cards** — vertical stack, gap: md(16px), margin-top: xl(32px):

Each step card: white card, border-radius: 20px, padding: lg(24px), shadow: `0 2px 12px rgba(0,0,0,0.06)`

**Card 1 — 걷기**
- Left: step number pill "01", bg: `#FFDD13`, Label Large (16px/600) `#1A1A1A`, 40×40px circle
- Right: `pig-walk.png`, 80px, right-aligned, bottom-anchored within card
- Title: Title Medium (18px/700) `#1A1A1A`: "하루 만보 걸으면"
- Body: Body Small (14px/400) `#767676`: "걸음수에 따라 복권 티켓이 자동 적립돼요. 만보 달성 시 최대 3장."
- Bottom tag: "📍 만보 = 복권 3장", pill bg `#F5F5F5`

**Card 2 — 광고**
- Same structure, step "02", pig: `pig-cinema.png`
- Title: "광고 보고 추가 획득"
- Body: "하루 최대 5회 광고 시청으로 복권 추가 적립."
- Tag: "📺 광고 1회 = 복권 1장"

**Card 3 — 초대**
- Step "03", pig: `pig-invite.png`
- Title: "친구 초대하면 보너스"
- Body: "친구가 앱을 설치하면 양쪽 모두 복권 10장 지급."
- Tag: "👥 친구 1명 = 복권 10장"

**Card 4 — 추첨**
- Step "04", pig: `pig-default.png`
- Title: "매주 월요일 생방송 추첨"
- Body: "MBC 로또 6/45 생방송에 연동. 투명하고 공정한 추첨."
- Tag: "📺 MBC 로또 6/45 연동", pill bg: `#FFDCE0`, text: `#FE6A86`

---

## Section 4: Mission List

### Layout
White background. Padding: xxl(48px) lg(24px). Max-width: 480px centered.

### Content
1. **Section label** — "미션 & 보상"
2. **Headline** — Headline Medium (24px/600), `#1A1A1A`:
   > "이렇게 복권을 모아요"
3. **Mission table** — white card, border-radius: 20px, overflow hidden, shadow: `0 2px 12px rgba(0,0,0,0.06)`

Each row: padding md(16px) lg(24px), border-bottom: 1px solid `#F5F5F5`

| Icon | Mission | Reward | Frequency |
|------|---------|--------|-----------|
| 🚶 | 만보 달성 | 복권 3장 | 매일 |
| 📺 | 광고 시청 | 복권 1장 | 하루 5회 |
| 👥 | 친구 초대 | 복권 10장 | 무제한 |
| 🔔 | 출석 체크 | 복권 1장 | 매일 |

Row layout: icon (32px), mission name in Body Medium (16px/400) `#1A1A1A`, reward in Label Large (16px/600) `#FE6A86` (right-aligned), frequency in Label Small (12px/500) `#BDBDBF` below reward.

4. **Total potential** — below table, centered text:
   Body Small (14px/400) `#767676`: "하루 최대"
   Headline Medium (24px/600) `#FFDD13` on dark chip (bg `#1A1A1A`, border-radius 12px, padding 12px 24px):
   "복권 20장 획득 가능"

---

## Section 5: Prize Table

### Layout
Background: radial gradient from `#1A1A1A` center to `#2A2A2A` edge (dark premium feel).
Padding: xxl(48px) lg(24px). Max-width: 480px centered.

### Content
1. **Section label** — Label Medium (14px/500), `#FFDD13`, centered, letter-spacing: 0.08em:
   "당첨 구조"
2. **Headline** — Display Small (36px/800), `white`, centered:
   > "매주 1,000만원\n실제로 드려요"
3. **Sub** — Body Medium (16px/400), `#BDBDBF`, centered:
   "복권 1장 = 추첨 1회 참가. 복권이 많을수록 당첨 확률 UP."

4. **Prize cards** — vertical stack, gap: sm(8px), margin-top: xl(32px):

**1st Prize card** — gold gradient card (bg: linear `#FFDD13` → `#FEE255`, 145deg), border-radius: 20px, padding: lg(24px)
- Badge: "🏆 1등", pill bg white/20%, Label Medium white
- Amount: Display Medium (44px/700) `#1A1A1A`: "10,000,000원"
- Sub: Body Small `#444444`: "매주 1명, 현금 지급"
- Pig: `pig-money.png`, 96px, right side, bottom-anchored
- Subtle shimmer animation: moving highlight overlay, 2s loop

**2nd Prize card** — white card with silver-toned left border (4px solid `#BDBDBF`)
- Badge: "🥈 2등", Headline Small `#444444`
- Amount: Headline Large (32px/700) `#1A1A1A`: "500,000원"
- Sub: "매주 3명"

**3rd Prize card** — white card, left border `#FD969A`
- "🥉 3등", "100,000원", "매주 10명"

**Participation** — `#F5F5F5` card
- "참여상", "편의점 상품권 5,000원", "매주 50명"

5. **Trust badge strip** — horizontal row, gap: md(16px), margin-top: xl(32px), centered:
   White pill badges (bg: white/10%, border: 1px solid white/20%):
   - "MBC 로또 6/45 연동"
   - "공정위 심사 완료"
   - "개인정보 보호"
   Label Small (12px/500) white

---

## Section 6: Footer

### Layout
Background: `#1A1A1A`. Padding: xxl(48px) lg(24px) xl(32px).

### Content (top to bottom)
1. **Final CTA block** — centered, margin-bottom: xxl(48px):
   - `pig-welcom.png`, 120px, centered
   - Headline Medium (24px/600) white, margin-top: md(16px):
     > "지금 사전신청하고\n첫 복권 10장 받으세요"
   - Primary CTA button — full-width (max 360px), bg: `#FFDD13`, text: "무료로 사전신청" in Label Large (16px/600) `#1A1A1A`. Border-radius: 16px. Height: 56px.
   - Label Small (12px/500) `#767676`, margin-top: sm(8px): "앱 출시 시 카카오톡으로 알림 발송"

2. **Divider** — 1px `#333333`

3. **Links row** — centered, gap: lg(24px), margin-top: lg(24px):
   Label Small (12px/500) `#767676`: "개인정보처리방침" | "이용약관" | "고객센터"

4. **Company info** — centered, Body Small (14px/400) `#767676`, margin-top: sm(8px):
   "(주)럭키피기 | 사업자등록번호: 000-00-00000 | 통신판매업신고: 제0000-서울-0000호"

5. **Copyright** — Label Small (12px/500) `#444444`, centered, margin-top: sm(8px):
   "© 2025 Lucky Piggy. All rights reserved."

---

## Global Styles

### Scroll Behavior
- Smooth scroll: `scroll-behavior: smooth`
- Section entrance: `IntersectionObserver` — fade + translateY(20px→0) over 0.5s ease-out per section

### Sticky Header (appears after hero scroll)
Height: 56px. Background: white/95% blur backdrop. Shadow: `0 1px 8px rgba(0,0,0,0.08)`.
Left: `pig-logo.png` (24px) + "당첨돼지" Title Large.
Right: CTA pill button — bg: `#FFDD13`, text: "사전신청" Label Medium (14px/500) `#1A1A1A`. Height: 36px, border-radius: 100px, padding: 0 16px.

### Mobile-First Breakpoints
- Base: 375px (mobile)
- md: 768px — max-width 680px, larger type scale (+10%)
- lg: 1024px — two-column layout for Step Cards in Section 3

### Shadow System
- card-sm: `0 2px 12px rgba(0,0,0,0.06)`
- card-md: `0 4px 24px rgba(0,0,0,0.10)`
- card-lg: `0 8px 40px rgba(0,0,0,0.15)`
- gold-glow: `0 4px 24px rgba(255,221,19,0.40)`
