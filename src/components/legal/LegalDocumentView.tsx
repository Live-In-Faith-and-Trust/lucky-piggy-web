'use client';

import { useEffect, useMemo, useState } from 'react';
import type { LegalBlock, LegalDocument, LegalDocumentSet, LegalListItem } from '@/lib/legal/types';

type Props = {
  document: LegalDocumentSet;
  /** Optional initial version (e.g. from `?v=` query string). Falls back to the latest. */
  initialVersion?: string;
};

export default function LegalDocumentView({ document, initialVersion }: Props) {
  const versions = document.versions;
  const latest = versions[0];

  const initial = useMemo(() => {
    if (initialVersion) {
      const found = versions.find((v) => v.version === initialVersion);
      if (found) return found.version;
    }
    return latest.version;
  }, [initialVersion, versions, latest]);

  const [selected, setSelected] = useState(initial);

  const current = versions.find((v) => v.version === selected) ?? latest;
  const isLatest = current.version === latest.version;

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const url = new URL(window.location.href);
    if (isLatest) {
      url.searchParams.delete('v');
    } else {
      url.searchParams.set('v', current.version);
    }
    window.history.replaceState(null, '', url.toString());
  }, [current.version, isLatest]);

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-[color:var(--color-n900)] mb-4">
          {document.title}
        </h1>
        <div className="flex flex-wrap items-center gap-3">
          <label
            htmlFor="legal-version"
            className="text-sm font-medium text-[color:var(--color-n700)]"
          >
            버전
          </label>
          <select
            id="legal-version"
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            className="h-10 rounded-lg border border-[color:var(--color-n200)] bg-white px-3 text-sm text-[color:var(--color-n800)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-ring)]"
          >
            {versions.map((v) => (
              <option key={v.version} value={v.version}>
                {v.label}
              </option>
            ))}
          </select>
          <span className="text-xs text-[color:var(--color-n500)]">
            시행일 {current.effectiveDate}
          </span>
        </div>
      </header>

      <article className="space-y-6 text-[15px] leading-7 text-[color:var(--color-n800)]">
        {current.intro?.map((block, i) => (
          <BlockView key={`intro-${i}`} block={block} />
        ))}
        {current.sections.map((section) => (
          <section key={section.heading} className="space-y-3">
            <h2 className="text-lg font-bold text-[color:var(--color-n900)] mt-6">
              {section.heading}
            </h2>
            {section.blocks.map((block, i) => (
              <BlockView key={i} block={block} />
            ))}
          </section>
        ))}
        {current.outro?.map((block, i) => (
          <div key={`outro-${i}`} className="pt-6 border-t border-[color:var(--color-n200)]">
            <BlockView block={block} />
          </div>
        ))}
      </article>
    </main>
  );
}

function BlockView({ block }: { block: LegalBlock }) {
  if (block.type === 'paragraph') {
    return <p className="whitespace-pre-line">{block.text}</p>;
  }
  if (block.type === 'list') {
    return <ListView items={block.items} ordered={block.ordered} />;
  }
  return <TableView headers={block.headers} rows={block.rows} />;
}

function ListView({ items, ordered }: { items: LegalListItem[]; ordered: boolean }) {
  const Tag = ordered ? 'ol' : 'ul';
  const listClass = ordered
    ? 'list-decimal pl-6 space-y-2 marker:text-[color:var(--color-n500)]'
    : 'list-disc pl-6 space-y-2 marker:text-[color:var(--color-n500)]';
  return (
    <Tag className={listClass}>
      {items.map((item, i) => (
        <li key={i}>
          <span className="whitespace-pre-line">{item.text}</span>
          {item.children && item.children.length > 0 && (
            <ListView items={item.children} ordered={ordered} />
          )}
        </li>
      ))}
    </Tag>
  );
}

function TableView({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto -mx-6 px-6">
      <table className="min-w-full text-[13px] border border-[color:var(--color-n200)] border-collapse">
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th
                key={i}
                className="border border-[color:var(--color-n200)] bg-[color:var(--color-n50)] px-3 py-2 text-left font-semibold text-[color:var(--color-n800)] whitespace-nowrap"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri}>
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className="border border-[color:var(--color-n200)] px-3 py-2 align-top text-[color:var(--color-n700)]"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
