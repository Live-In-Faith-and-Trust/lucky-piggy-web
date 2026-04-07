import { render, screen } from '@testing-library/react';
import ServiceIntro from '@/components/ServiceIntro';

describe('ServiceIntro', () => {
  it('섹션 타이틀을 렌더한다', () => {
    render(<ServiceIntro />);
    expect(screen.getByText(/걷기만 해도 응모권이 생겨요/)).toBeInTheDocument();
  });

  it('MBC 로또 언급이 있다', () => {
    render(<ServiceIntro />);
    expect(screen.getByText(/MBC/)).toBeInTheDocument();
  });
});
