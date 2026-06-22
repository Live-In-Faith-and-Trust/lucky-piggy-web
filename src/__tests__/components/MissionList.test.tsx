import { render, screen } from '@testing-library/react';
import MissionList from '@/components/MissionList';

describe('MissionList', () => {
  it('섹션 타이틀을 렌더한다', () => {
    render(<MissionList />);
    expect(screen.getByText(/이렇게 응모권을 모아요/)).toBeInTheDocument();
  });

  it('주요 미션을 렌더한다', () => {
    render(<MissionList />);
    expect(screen.getByText(/만보 달성/)).toBeInTheDocument();
    expect(screen.getByText(/광고 시청/)).toBeInTheDocument();
    expect(screen.getByText(/친구 초대/)).toBeInTheDocument();
    expect(screen.getByText(/출석 체크/)).toBeInTheDocument();
  });
});
