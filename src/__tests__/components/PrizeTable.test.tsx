import { render, screen } from '@testing-library/react';
import PrizeTable from '@/components/PrizeTable';

describe('PrizeTable', () => {
  it('섹션 타이틀을 렌더한다', () => {
    render(<PrizeTable />);
    expect(screen.getByText(/리워드 안내/)).toBeInTheDocument();
  });

  it('메인 리워드를 렌더한다', () => {
    render(<PrizeTable />);
    expect(screen.getByText(/메인 리워드/)).toBeInTheDocument();
    expect(screen.getByText(/주간 리워드/)).toBeInTheDocument();
  });

  it('보너스 항목을 렌더한다', () => {
    render(<PrizeTable />);
    expect(screen.getByText('🎁 보너스')).toBeInTheDocument();
    expect(screen.getByText(/추가 응모권 10장/)).toBeInTheDocument();
  });

  it('운영 신뢰 배지를 렌더한다', () => {
    render(<PrizeTable />);
    expect(screen.getByText(/운영 기준 안내/)).toBeInTheDocument();
  });
});
