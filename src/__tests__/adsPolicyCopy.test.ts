import fs from 'node:fs';
import path from 'node:path';

const appFacingFiles = [
  'src/lib/constants.ts',
  'src/app/layout.tsx',
  'src/app/page.tsx',
  'src/components/Hero.tsx',
  'src/components/FinalCTA.tsx',
  'src/components/PrizeTable.tsx',
  'src/components/ServiceIntro.tsx',
];

const riskyTerms = [
  '복권',
  '로또',
  '앱테크',
  '실제 로또',
  '당첨금',
  '1000만원',
  '1,000만원',
  '10,000,000원',
  '현금',
  '출금',
  '당첨 확률',
  '대박',
  '잭팟',
  '배당',
  '베팅',
  '카지노',
  '도박',
];

describe('Google Ads appeal copy', () => {
  it('랜딩과 메타 소스에 도박 또는 복권으로 오해될 수 있는 표현이 없다', () => {
    const violations = appFacingFiles.flatMap((file) => {
      const absolutePath = path.join(process.cwd(), file);
      const content = fs.readFileSync(absolutePath, 'utf8');

      return riskyTerms
        .filter((term) => content.includes(term))
        .map((term) => `${file}: ${term}`);
    });

    expect(violations).toEqual([]);
  });
});
