import Image from 'next/image';

type Layout = 'default' | 'reversed';

interface FeatureSectionProps {
  headline: string;
  index: number;
  layout?: Layout;
  highlightNumber?: string;
  mobileImgRight?: boolean;
  mobileImgClass?: string;
  imgFadeBottom?: boolean;
  fadeImgClass?: string;
  imgWidthPct?: number;
}

const BG_COLORS = ['#FAFAFA', '#FFF176', '#FFDCE0'];
const IMAGES = [
  '/images/pig/main-2-4.png',
  '/images/pig/weekly-notice.png',
  '/images/pig/reward-entry-ticket.png',
];
const ANIM_CLASSES = ['', '', ''];

const SECTION_MIN_HEIGHT = 520;
const CONTENT_MAX_WIDTH = 1180;

const headlineStyle: React.CSSProperties = {
  fontWeight: 800,
  color: '#1A1A1A',
  lineHeight: 1.3,
  wordBreak: 'keep-all',
  whiteSpace: 'pre-line',
  fontSize: 'clamp(24px, 2.8vw, 42px)',
};

function renderHeadline(headline: string, highlightNumber?: string) {
  if (!highlightNumber) {
    return headline;
  }

  const [before, after] = headline.split(highlightNumber);

  return (
    <>
      {before}
      <span style={{ color: '#FE6A86' }}>{highlightNumber}</span>
      {after}
    </>
  );
}

export default function FeatureSection({
  headline,
  index,
  layout = 'default',
  highlightNumber,
  mobileImgRight = false,
  mobileImgClass = 'w-[72%]',
  imgFadeBottom = false,
  fadeImgClass = 'w-[68%] md:w-[85%]',
  imgWidthPct,
}: FeatureSectionProps) {
  const bg = BG_COLORS[index % BG_COLORS.length];
  const imgSrc = IMAGES[index % IMAGES.length];
  const animClass = ANIM_CLASSES[index % ANIM_CLASSES.length];

  // 데스크톱: default=텍스트좌·이미지우 / reversed=이미지좌·텍스트우
  const textOrder = layout === 'default' ? 'md:order-1' : 'md:order-2';
  const imgOrder  = layout === 'default' ? 'md:order-2' : 'md:order-1';
  const mobileImgJustify = mobileImgRight ? 'justify-end' : 'justify-center';

  return (
    <section
      className="px-6 py-12 md:py-16"
      style={{ background: bg, minHeight: SECTION_MIN_HEIGHT }}
    >
      <div
        className="mx-auto"
        style={{
          maxWidth: CONTENT_MAX_WIDTH,
          paddingInline: 'clamp(16px, 4vw, 64px)',
        }}
      >
        {/* 모바일: flex-col (텍스트→이미지) / 데스크톱: flex-row (layout에 따라) */}
        <div className="entrance flex flex-col md:flex-row md:items-center gap-8 md:gap-16">

          {/* 텍스트: 모바일 항상 위(order-1), 데스크톱 layout에 따라 */}
          <div className={`order-1 ${textOrder} md:flex-[1.1]`}>
            <p style={headlineStyle}>{renderHeadline(headline, highlightNumber)}</p>
          </div>

          {/* 이미지: 모바일 항상 아래(order-2), 데스크톱 layout에 따라 */}
          <div className={`order-2 ${imgOrder} md:flex-1 flex ${mobileImgJustify} md:justify-center`}>
            {imgFadeBottom ? (
              <div className={`relative ${fadeImgClass}`}>
                <Image
                  src={imgSrc}
                  alt={headline}
                  width={432}
                  height={540}
                  className={`w-full h-auto ${animClass}`}
                  style={{ objectFit: 'contain' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '24%',
                    background: `linear-gradient(to bottom, transparent, ${bg})`,
                    pointerEvents: 'none',
                  }}
                />
              </div>
            ) : imgWidthPct ? (
              <div style={{ width: `${imgWidthPct}%` }}>
                <Image
                  src={imgSrc}
                  alt={headline}
                  width={432}
                  height={540}
                  className={`w-full h-auto ${animClass}`}
                  style={{ objectFit: 'contain' }}
                />
              </div>
            ) : (
              <Image
                src={imgSrc}
                alt={headline}
                width={432}
                height={540}
                className={`${mobileImgClass} h-auto ${animClass}`}
                style={{ objectFit: 'contain' }}
              />
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
