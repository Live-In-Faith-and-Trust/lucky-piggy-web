import { render, screen } from '@testing-library/react';
import PrizeTable from '@/components/PrizeTable';

describe('PrizeTable', () => {
  it('섹션 타이틀을 렌더한다', () => {
    render(<PrizeTable />);
    expect(screen.getByText(/당첨되면 이렇게 드려요/)).toBeInTheDocument();
  });

  it('1등 당첨금을 렌더한다', () => {
    render(<PrizeTable />);
    expect(screen.getByText(/10,000,000원/)).toBeInTheDocument();
  });

  it('5등 항목을 렌더한다', () => {
    render(<PrizeTable />);
    expect(screen.getByText(/5등/)).toBeInTheDocument();
  });

  it('법적 주석이 있다', () => {
    render(<PrizeTable />);
    expect(screen.getByText(/제세공과금/)).toBeInTheDocument();
  });
});
