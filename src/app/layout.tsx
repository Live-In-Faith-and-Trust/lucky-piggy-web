import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { SITE_TITLE, SITE_DESCRIPTION } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.withly.co.kr'),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  icons: {
    icon: '/images/app-icon.png',
    apple: '/images/app-icon.png',
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    type: "website",
    locale: "ko_KR",
    url: 'https://www.withly.co.kr',
    siteName: '당첨돼지',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '당첨돼지 - 걷기만 해도 무료 복권 100장',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/images/og-image.jpg'],
  },
};

function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://www.withly.co.kr/#website',
        url: 'https://www.withly.co.kr',
        name: '당첨돼지',
        description: '매일 걷기만 해도 응모권이 쌓여요. 매주 실제 번호로 당첨금 1,000만원을 추첨합니다.',
        inLanguage: 'ko-KR',
      },
      {
        '@type': 'MobileApplication',
        '@id': 'https://www.withly.co.kr/#app',
        name: '당첨돼지',
        operatingSystem: 'Android',
        applicationCategory: 'LifestyleApplication',
        description: '걷기만 해도 응모권이 쌓이는 앱테크 앱. 매주 실제 로또 번호로 당첨금 1,000만원 추첨.',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'KRW',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        <JsonLd />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18100419276"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18100419276');
          `}
        </Script>
      </body>
    </html>
  );
}
