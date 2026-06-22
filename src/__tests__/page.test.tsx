import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home 페이지', () => {
  it('Hero 섹션이 있다', () => {
    render(<Home />);
    expect(screen.getByText(/무료 리워드 앱/)).toBeInTheDocument();
    expect(screen.getAllByText(/무료 응모권 받기/)[0]).toBeInTheDocument();
  });

  it('응모권 안내 섹션이 있다', () => {
    render(<Home />);
    expect(screen.getByText(/응모권을 드려요/)).toBeInTheDocument();
  });

  it('주간 결과 안내 섹션이 있다', () => {
    render(<Home />);
    expect(screen.getByText(/응모 결과를 발표해요/)).toBeInTheDocument();
  });

  it('리워드 안내 섹션이 있다', () => {
    render(<Home />);
    expect(screen.getByText(/리워드를 지급해요/)).toBeInTheDocument();
  });
});
