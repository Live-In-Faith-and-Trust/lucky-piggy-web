export type LegalListItem = {
  text: string;
  children?: LegalListItem[];
};

export type LegalBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'list'; ordered: boolean; items: LegalListItem[] }
  | { type: 'table'; headers: string[]; rows: string[][] };

export type LegalSection = {
  heading: string;
  blocks: LegalBlock[];
};

export type LegalDocument = {
  /** Version identifier (also used as the URL `?v=` value). Use the effective date in YYYY-MM-DD form. */
  version: string;
  /** Display label shown in the version select. */
  label: string;
  /** Effective date in YYYY.MM.DD form for inline display. */
  effectiveDate: string;
  intro?: LegalBlock[];
  sections: LegalSection[];
  outro?: LegalBlock[];
};

export type LegalDocumentSet = {
  title: string;
  /** Sorted newest-first. The first entry is treated as the latest version. */
  versions: LegalDocument[];
};
