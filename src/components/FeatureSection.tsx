interface FeatureSectionProps {
  headline: string;
  index: number;
}

export default function FeatureSection({ headline }: FeatureSectionProps) {
  return (
    <section className="entrance px-6 py-16">
      <div className="md:max-w-5xl md:mx-auto">
        <div
          className="flex items-start gap-4 md:gap-16"
        >
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
              style={{
                aspectRatio: '3/4',
                background: '#F5F5F5',
              }}
            >
              <span style={{ color: '#BDBDBF', fontSize: 14 }}>이미지</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
