import { PLAY_STORE_URL, PRE_SIGNUP_COUNT, PRE_SIGNUP_GOAL } from '@/lib/constants';

describe('constants', () => {
  it('PLAY_STORE_URL은 문자열이다', () => {
    expect(typeof PLAY_STORE_URL).toBe('string');
  });

  it('PRE_SIGNUP_COUNT는 0 이상의 숫자다', () => {
    expect(PRE_SIGNUP_COUNT).toBeGreaterThanOrEqual(0);
  });

  it('PRE_SIGNUP_GOAL은 PRE_SIGNUP_COUNT보다 크다', () => {
    expect(PRE_SIGNUP_GOAL).toBeGreaterThan(PRE_SIGNUP_COUNT);
  });
});
