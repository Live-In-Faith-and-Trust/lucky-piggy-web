import { render, screen } from '@testing-library/react';
import Hero from '@/components/Hero';

describe('Hero', () => {
  it('메인 헤드라인을 렌더한다', () => {
    render(<Hero />);
    expect(screen.getByText(/1,000만 원/)).toBeInTheDocument();
  });

  it('CTA 버튼이 플레이스토어 링크를 포함한다', () => {
    render(<Hero />);
    const link = screen.getByRole('link', { name: /구글 플레이/i });
    expect(link).toHaveAttribute('href', expect.stringContaining('play.google.com'));
  });

  it('소셜 프루프 텍스트를 렌더한다', () => {
    render(<Hero />);
    expect(screen.getByText(/사전 신청/)).toBeInTheDocument();
  });
});
