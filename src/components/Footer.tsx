export default function Footer() {
  return (
    <footer style={{ background: '#FAFAFA', padding: '48px 32px 32px' }}>
      <div className="max-w-5xl mx-auto">
        <span style={{ fontSize: 20, fontWeight: 800, color: '#1A1A1A', letterSpacing: '-0.02em' }}>
          withly
        </span>

        {/* Divider */}
        <div style={{ height: 1, background: '#E0E0E0', margin: '40px 0 20px' }} />

        {/* Bottom row: copyright left, legal links right */}
        <div className="flex justify-between items-center flex-wrap gap-3">
          <p style={{ fontSize: 13, color: '#767676' }}>
            © 2026 withly. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/privacy" style={{ fontSize: 13, color: '#767676', textDecoration: 'none' }}>개인정보처리방침</a>
            <a href="/terms"   style={{ fontSize: 13, color: '#767676', textDecoration: 'none' }}>이용약관</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
