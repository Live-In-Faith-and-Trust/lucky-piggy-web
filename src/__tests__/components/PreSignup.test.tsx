import { render, screen } from '@testing-library/react';
import PreSignup from '@/components/PreSignup';

describe('PreSignup', () => {
  it('목표 인원을 렌더한다', () => {
    render(<PreSignup />);
    expect(screen.getByRole('heading', { name: /5,000명/ })).toBeInTheDocument();
  });

  it('현재 참여자 수를 렌더한다', () => {
    render(<PreSignup />);
    expect(screen.getByText('현재 1,234명이 기다리고 있어요')).toBeInTheDocument();
  });

  it('CTA 버튼이 플레이스토어 링크를 포함한다', () => {
    render(<PreSignup />);
    const link = screen.getByRole('link', { name: /지금 바로 다운로드/ });
    expect(link).toHaveAttribute('href', expect.stringContaining('play.google.com'));
  });

  it('프로그레스 바가 렌더된다', () => {
    render(<PreSignup />);
    const bar = screen.getByRole('progressbar');
    expect(bar).toBeInTheDocument();
  });
});
