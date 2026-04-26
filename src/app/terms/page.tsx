import LegalDocumentView from '@/components/legal/LegalDocumentView';
import { terms } from '@/lib/legal/terms';

type SearchParams = Promise<{ v?: string | string[] }>;

export const metadata = {
  title: '이용약관 | 당첨돼지',
};

export default async function TermsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { v } = await searchParams;
  const initialVersion = Array.isArray(v) ? v[0] : v;
  return <LegalDocumentView document={terms} initialVersion={initialVersion} />;
}
