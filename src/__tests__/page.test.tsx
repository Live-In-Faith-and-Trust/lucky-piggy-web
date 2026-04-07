import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home 페이지', () => {
  it('Hero 섹션이 있다', () => {
    render(<Home />);
    expect(screen.getByText(/1,000만 원/)).toBeInTheDocument();
  });

  it('미션 섹션이 있다', () => {
    render(<Home />);
    expect(screen.getByText(/응모권 받는 방법/)).toBeInTheDocument();
  });

  it('당첨금 섹션이 있다', () => {
    render(<Home />);
    expect(screen.getByText(/당첨되면 이렇게/)).toBeInTheDocument();
  });

  it('사전신청 섹션이 있다', () => {
    render(<Home />);
    expect(screen.getByText(/5,000명이 모이면/)).toBeInTheDocument();
  });
});
