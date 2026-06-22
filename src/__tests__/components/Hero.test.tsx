import { render, screen } from '@testing-library/react';
import Hero from '@/components/Hero';

describe('Hero', () => {
  it('메인 헤드라인을 렌더한다', () => {
    render(<Hero />);
    expect(screen.getByText(/무료 리워드 앱/)).toBeInTheDocument();
    expect(screen.getByText(/응모권이 쌓여요/)).toBeInTheDocument();
  });

  it('CTA 버튼이 플레이스토어 링크를 포함한다', () => {
    render(<Hero />);
    const link = screen.getByRole('link', { name: /무료 응모권 받기/i });
    expect(link).toHaveAttribute('href', expect.stringContaining('play.google.com'));
  });

  it('서비스 성격 라벨을 렌더한다', () => {
    render(<Hero />);
    expect(screen.getByText(/무료 리워드 앱/)).toBeInTheDocument();
  });
});
