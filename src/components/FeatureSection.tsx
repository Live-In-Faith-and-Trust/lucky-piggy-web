interface FeatureSectionProps {
  headline: string;
  index: number;
}

const BG_COLORS = ['#FAFAFA', '#FFF176', '#FFDCE0'];
const IMG_COLORS = ['#E8E8E8', '#FEE255', '#FFBFC8'];

export default function FeatureSection({ headline, index }: FeatureSectionProps) {
  const bg = BG_COLORS[index % BG_COLORS.length];
  const imgBg = IMG_COLORS[index % IMG_COLORS.length];

  return (
    <section className="entrance px-6 py-16" style={{ background: bg }}>
      <div className="md:max-w-5xl md:mx-auto">
        <div className="flex items-start gap-4 md:gap-16">
          {/* Left: headline */}
          <div className="flex-[1.1]">
            <p
              style={{
                fontWeight: 800,
                color: '#1A1A1A',
                lineHeight: 1.3,
                wordBreak: 'keep-all',
                whiteSpace: 'pre-line',
                fontSize: 'clamp(22px, 2.8vw, 40px)',
              }}
            >
              {headline}
            </p>
          </div>

          {/* Right: image placeholder */}
          <div className="flex-1">
            <div
              className="rounded-2xl flex items-center justify-center"
              style={{ aspectRatio: '3/4', background: imgBg }}
            >
              <span style={{ color: '#1A1A1A', opacity: 0.3, fontSize: 14 }}>이미지</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
