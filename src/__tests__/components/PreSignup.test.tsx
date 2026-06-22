import { render, screen } from '@testing-library/react';
import PreSignup from '@/components/PreSignup';

describe('PreSignup', () => {
  it('목표 인원을 렌더한다', () => {
    render(<PreSignup />);
    expect(screen.getByRole('heading', { name: /추가 응모권 10장 증정/ })).toBeInTheDocument();
  });

  it('알림 안내를 렌더한다', () => {
    render(<PreSignup />);
    expect(screen.getByText('앱 출시 시 카카오톡으로 알림을 보내드려요.')).toBeInTheDocument();
  });

  it('CTA 버튼을 렌더한다', () => {
    render(<PreSignup />);
    const link = screen.getByRole('link', { name: /무료로 사전신청하기/ });
    expect(link).toHaveAttribute('href', '#');
  });

  it('무료 안내를 렌더한다', () => {
    render(<PreSignup />);
    expect(screen.getByText(/스팸 없음/)).toBeInTheDocument();
  });
});
