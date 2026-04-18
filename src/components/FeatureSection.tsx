import Image from 'next/image';

type Layout = 'default' | 'reversed';

interface FeatureSectionProps {
  headline: string;
  index: number;
  layout?: Layout;
  mobileImgRight?: boolean;
}

const BG_COLORS = ['#FAFAFA', '#FFF176', '#FFDCE0'];
const IMAGES = [
  '/images/pig/feature-walk.png',
  '/images/pig/feature-draw.png',
  '/images/pig/feature-cash.png',
];
const ANIM_CLASSES = ['animate-walk', '', 'animate-coin-drop'];

const SECTION_MIN_HEIGHT = 520;

const headlineStyle: React.CSSProperties = {
  fontWeight: 800,
  color: '#1A1A1A',
  lineHeight: 1.3,
  wordBreak: 'keep-all',
  whiteSpace: 'pre-line',
  fontSize: 'clamp(22px, 2.8vw, 40px)',
};

export default function FeatureSection({
  headline,
  index,
  layout = 'default',
  mobileImgRight = false,
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
      <div className="max-w-5xl mx-auto">
        {/* 모바일: flex-col (텍스트→이미지) / 데스크톱: flex-row (layout에 따라) */}
        <div className="entrance flex flex-col md:flex-row md:items-center gap-8 md:gap-16">

          {/* 텍스트: 모바일 항상 위(order-1), 데스크톱 layout에 따라 */}
          <div className={`order-1 ${textOrder} md:flex-[1.1]`}>
            <p style={headlineStyle}>{headline}</p>
          </div>

          {/* 이미지: 모바일 항상 아래(order-2), 데스크톱 layout에 따라 */}
          <div className={`order-2 ${imgOrder} md:flex-1 flex ${mobileImgJustify} md:justify-center`}>
            <Image
              src={imgSrc}
              alt={headline}
              width={432}
              height={540}
              className={`h-auto img-hover ${animClass} w-[72%] md:w-full`}
              style={{ objectFit: 'contain' }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
