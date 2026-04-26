import LegalDocumentView from '@/components/legal/LegalDocumentView';
import { privacy } from '@/lib/legal/privacy';

type SearchParams = Promise<{ v?: string | string[] }>;

export const metadata = {
  title: '개인정보 처리방침 | 당첨돼지',
};

export default async function PrivacyPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { v } = await searchParams;
  const initialVersion = Array.isArray(v) ? v[0] : v;
  return <LegalDocumentView document={privacy} initialVersion={initialVersion} />;
}
