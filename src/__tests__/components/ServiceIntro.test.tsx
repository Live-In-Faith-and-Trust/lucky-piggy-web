import { render, screen } from '@testing-library/react';
import ServiceIntro from '@/components/ServiceIntro';

describe('ServiceIntro', () => {
  it('섹션 타이틀을 렌더한다', () => {
    render(<ServiceIntro />);
    expect(screen.getByText(/응모권이 생겨요/)).toBeInTheDocument();
  });

  it('주간 리워드 안내를 렌더한다', () => {
    render(<ServiceIntro />);
    expect(screen.getByText(/주 1회 결과 발표/)).toBeInTheDocument();
    expect(screen.getByText(/주간 리워드 프로모션/)).toBeInTheDocument();
  });
});
