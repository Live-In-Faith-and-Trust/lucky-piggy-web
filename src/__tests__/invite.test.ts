import {
  ANDROID_PACKAGE_NAME,
  buildPlayStoreReferrerUrl,
  isAndroid,
  isIos,
  sanitizeCode,
} from '@/lib/invite';

describe('sanitizeCode', () => {
  it('알파벳/숫자만 통과', () => {
    expect(sanitizeCode('ABC123')).toBe('ABC123');
  });

  it('특수문자 제거', () => {
    expect(sanitizeCode('AB-12_!')).toBe('AB12');
  });

  it('XSS 시도 차단', () => {
    expect(sanitizeCode('<script>')).toBe('script');
  });

  it('32글자 초과 시 자름', () => {
    expect(sanitizeCode('A'.repeat(50))).toBe('A'.repeat(32));
  });

  it('빈 문자열 → 빈 문자열', () => {
    expect(sanitizeCode('')).toBe('');
  });
});

describe('buildPlayStoreReferrerUrl', () => {
  it('정상 코드로 Play Store URL 생성', () => {
    const url = buildPlayStoreReferrerUrl('ABC123');
    expect(url).toBe(
      `https://play.google.com/store/apps/details?id=${ANDROID_PACKAGE_NAME}&referrer=referral_code%3DABC123`,
    );
  });

  it('referrer 파라미터는 URL-encoded', () => {
    const url = buildPlayStoreReferrerUrl('CODE');
    expect(url).toContain('referrer=referral_code%3DCODE');
  });

  it('sanitize 적용됨', () => {
    const url = buildPlayStoreReferrerUrl('AB-12!');
    expect(url).toContain('referrer=referral_code%3DAB12');
  });
});

describe('isAndroid', () => {
  it('Android UA → true', () => {
    expect(
      isAndroid(
        'Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36',
      ),
    ).toBe(true);
  });

  it('iPhone UA → false', () => {
    expect(
      isAndroid('Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X)'),
    ).toBe(false);
  });

  it('Desktop Chrome → false', () => {
    expect(
      isAndroid(
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
      ),
    ).toBe(false);
  });

  it('빈 UA → false', () => {
    expect(isAndroid('')).toBe(false);
  });
});

describe('isIos', () => {
  it('iPhone UA → true', () => {
    expect(
      isIos('Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X)'),
    ).toBe(true);
  });

  it('iPad UA → true', () => {
    expect(isIos('Mozilla/5.0 (iPad; CPU OS 16_0 like Mac OS X)')).toBe(true);
  });

  it('Android UA → false', () => {
    expect(isIos('Mozilla/5.0 (Linux; Android 13)')).toBe(false);
  });
});
