import { render, screen } from '@testing-library/react';
import MissionList from '@/components/MissionList';

describe('MissionList', () => {
  it('섹션 타이틀을 렌더한다', () => {
    render(<MissionList />);
    expect(screen.getByText(/응모권 받는 방법/)).toBeInTheDocument();
  });

  it('3가지 미션을 렌더한다', () => {
    render(<MissionList />);
    expect(screen.getByText(/매일 걷기/)).toBeInTheDocument();
    expect(screen.getByText(/광고 보기/)).toBeInTheDocument();
    expect(screen.getByText(/친구 초대/)).toBeInTheDocument();
  });
});
