import { render, screen } from '@testing-library/react';
import Footer from '@/components/Footer';

describe('Footer', () => {
  it('저작권 텍스트를 렌더한다', () => {
    render(<Footer />);
    expect(screen.getByText(/© 2026 당첨돼지/)).toBeInTheDocument();
  });

  it('개인정보처리방침 링크가 있다', () => {
    render(<Footer />);
    const link = screen.getByRole('link', { name: /개인정보처리방침/ });
    expect(link).toHaveAttribute('href', '/privacy');
  });

  it('이용약관 링크가 있다', () => {
    render(<Footer />);
    const link = screen.getByRole('link', { name: /이용약관/ });
    expect(link).toHaveAttribute('href', '/terms');
  });

  it('MBC와 무관하다는 법적 고지가 있다', () => {
    render(<Footer />);
    expect(screen.getByText(/MBC.*관계없는/)).toBeInTheDocument();
  });
});
