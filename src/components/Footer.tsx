import Image from 'next/image';

const links = [
  { label: '개인정보처리방침', href: '/privacy' },
  { label: '이용약관', href: '/terms' },
  { label: '고객센터', href: '#' },
];

export default function Footer() {
  return (
    <footer style={{ background: '#1A1A1A', padding: '48px 24px 32px' }}>
      <div className="max-w-2xl mx-auto">
        {/* Final CTA block */}
        <div className="text-center" style={{ marginBottom: 48 }}>
          <div className="flex justify-center">
            <Image src="/images/pig/pig-welcom.png" alt="환영하는 돼지" width={120} height={120} />
          </div>
          <h2 style={{ fontSize: 24, fontWeight: 600, color: '#FFFFFF', lineHeight: 1.4, marginTop: 16 }}>
            지금 사전신청하고<br />첫 복권 10장 받으세요
          </h2>
          <div className="flex justify-center mt-6">
            <a
              href="#pre-signup"
              className="btn-primary"
              style={{ width: '100%', maxWidth: 360 }}
            >
              무료로 사전신청
            </a>
          </div>
          <p style={{ fontSize: 12, fontWeight: 500, color: '#767676', marginTop: 8 }}>
            앱 출시 시 카카오톡으로 알림 발송
          </p>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: '#333333' }} />

        {/* Links */}
        <div className="flex justify-center gap-6 mt-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{ fontSize: 12, fontWeight: 500, color: '#767676', textDecoration: 'none' }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Company info */}
        <p className="text-center mt-2" style={{ fontSize: 14, fontWeight: 400, color: '#767676' }}>
          (주)럭키피기 | 사업자등록번호: 000-00-00000 | 통신판매업신고: 제0000-서울-0000호
        </p>

        {/* Copyright */}
        <p className="text-center mt-2" style={{ fontSize: 12, fontWeight: 500, color: '#444444' }}>
          © 2025 Lucky Piggy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
