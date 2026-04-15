'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function StickyHeader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        maxWidth: '100%',
        height: 56,
        background: 'transparent',
        boxShadow: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        zIndex: 100,
        transition: 'opacity 0.3s ease',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <div className="flex items-center gap-2">
        <Image src="/images/app-icon.png" alt="당첨돼지" width={28} height={28} className="rounded-lg" />
        <span style={{ fontSize: 16, fontWeight: 700, color: '#1A1A1A' }}>당첨돼지</span>
      </div>
      <a
        href="#pre-signup"
        className="pill"
        style={{
          background: '#FFDD13',
          color: '#1A1A1A',
          fontSize: 14,
          fontWeight: 500,
          height: 36,
          padding: '0 16px',
        }}
      >
        사전신청
      </a>
    </header>
  );
}
