import React from 'react';
import { SUPPORT_EMAIL, getSupportEmailLink } from '../constants';
import { LegalDocument } from '../types';

const EMAIL_REGEX = new RegExp(`(${SUPPORT_EMAIL.replace('.', '\\.').replace('@', '\\@')})`, 'g');

const renderTextWithEmailLinks = (text: string, supportEmailLink: string) => {
  const parts = text.split(EMAIL_REGEX);

  return parts.map((part, idx) => {
    if (part === SUPPORT_EMAIL) {
      return (
        <a
          key={`${part}-${idx}`}
          href={supportEmailLink}
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-blue-600 hover:text-blue-700 transition-colors"
        >
          {part}
        </a>
      );
    }

    return <React.Fragment key={`${part}-${idx}`}>{part}</React.Fragment>;
  });
};

type LegalDocumentPageProps = {
  document: LegalDocument;
  backHref?: string;
  backLabel?: string;
};

const LegalDocumentPage: React.FC<LegalDocumentPageProps> = ({
  document,
  backHref = '/',
  backLabel = 'Back to Support Home',
}) => {
  const supportEmailLink = getSupportEmailLink(`${document.title} Support Request`);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="bg-slate-900 text-white px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <a
              href={backHref}
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
              {backLabel}
            </a>
            <a
              href={supportEmailLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 hover:border-slate-500 hover:text-white transition-colors"
            >
              Contact Support
            </a>
          </div>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">MatchlessWorks</p>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight leading-tight">{document.title}</h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl leading-relaxed">
            Version {document.version} • Last updated {document.lastUpdated}
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-6 py-6 md:px-10 md:py-8 border-b border-slate-100 bg-slate-50">
            <p className="text-sm text-slate-500 leading-relaxed">
              {renderTextWithEmailLinks(document.summary, supportEmailLink)}
            </p>
          </div>

          <div className="px-6 py-8 md:px-10 md:py-10 space-y-10">
            {document.introParagraphs && document.introParagraphs.length > 0 && (
              <section className="space-y-4">
                {document.introParagraphs.map((paragraph, idx) => (
                  <p key={idx} className="text-slate-600 leading-relaxed text-[15px]">
                    {renderTextWithEmailLinks(paragraph, supportEmailLink)}
                  </p>
                ))}
              </section>
            )}

            {document.sections.map((section, idx) => (
              <section key={idx} className="space-y-4">
                <h2 className="text-xl font-bold text-slate-900 mb-3">{section.title}</h2>
                {section.content && (
                  <p className="text-slate-600 leading-relaxed text-[15px]">{renderTextWithEmailLinks(section.content, supportEmailLink)}</p>
                )}
                {section.paragraphs?.map((paragraph, paragraphIdx) => (
                  <p key={paragraphIdx} className="text-slate-600 leading-relaxed text-[15px]">
                    {renderTextWithEmailLinks(paragraph, supportEmailLink)}
                  </p>
                ))}
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="list-disc space-y-2 pl-5 text-slate-600 text-[15px] leading-relaxed">
                    {section.bullets.map((bullet, bulletIdx) => (
                      <li key={bulletIdx}>{renderTextWithEmailLinks(bullet, supportEmailLink)}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <div className="pt-8 border-t border-slate-100">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 text-center">
                <p className="text-sm text-slate-500 font-medium">
                  {renderTextWithEmailLinks(document.acknowledgment, supportEmailLink)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LegalDocumentPage;