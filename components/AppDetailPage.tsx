import React from 'react';
import AppIcon from './AppIcon';
import { APPS, getSupportEmailLink } from '../constants';

const getShortDescription = (description: string) => {
  const [firstSentence] = description.split(/(?<=[.!?])\s+/);
  return firstSentence ?? description;
};

const SCREENSHOT_PLACEHOLDERS = [1, 2, 3];

const AppDetailPage: React.FC = () => {
  const params = new URLSearchParams(window.location.search);
  const appId = params.get('app');
  const app = APPS.find((item) => item.id === appId) ?? null;

  if (!app) {
    return (
      <div className="min-h-screen bg-slate-50 px-4 py-16 text-slate-900">
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
          <h1 className="text-3xl font-bold text-slate-900">App Not Found</h1>
          <p className="mt-4 leading-relaxed text-slate-600">
            The app you requested could not be found. Return to the support home page to choose a valid app.
          </p>
          <a
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-slate-800"
          >
            Back to Support Home
          </a>
        </div>
      </div>
    );
  }

  const supportEmailLink = getSupportEmailLink(`${app.name} Support Request`);
  const screenshots = app.screenshotPaths && app.screenshotPaths.length > 0
    ? app.screenshotPaths.map((path, idx) => ({ path, label: `Screenshot ${idx + 1}` }))
    : SCREENSHOT_PLACEHOLDERS.map((shotNumber) => ({ path: null, label: `Screenshot ${shotNumber}` }));

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white px-4 py-8 md:py-10">
        <div className="mx-auto max-w-5xl">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            Back to Support Home
          </a>

          <div className="mt-8 space-y-6">
            <div className="flex flex-row items-center justify-between gap-4">
              <AppIcon
                name={app.name}
                iconPath={app.iconPath}
                sizeClassName="h-28 w-28 rounded-xl shadow-lg"
                preferDarkBackdrop={app.id === 'legacyman'}
                imageClassName={app.id === 'legacyman' ? undefined : 'h-full w-full object-cover'}
              />

              <div className="flex w-40 shrink-0 flex-col gap-2">
                {app.appStoreUrl ? (
                  <a
                    href={app.appStoreUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-3 py-2 text-xs font-bold text-white transition-colors hover:bg-blue-700"
                  >
                    View in App Store
                  </a>
                ) : (
                  <div
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-3 py-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-500"
                  >
                    Coming Soon
                  </div>
                )}
                <a
                  href={supportEmailLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-3 py-2 text-xs font-bold text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-900"
                >
                  Contact App Support
                </a>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">MatchlessWorks</p>
              <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl">{app.name}</h1>
              <p className="mt-3 max-w-2xl text-lg leading-relaxed text-slate-600">{getShortDescription(app.description)}</p>
              <p className="mt-3 text-sm font-medium text-slate-400">Privacy-focused experience • No account required</p>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl space-y-10 px-4 py-12 md:py-16">
        <section className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 px-8 py-10 text-white md:px-10 md:py-12">
            <div>
              <div className="flex items-center gap-3">
                <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-blue-200">Screenshots</h3>
                <div className="h-px flex-1 bg-white/20"></div>
              </div>
              <div className="mt-2 flex gap-2 text-xs text-slate-300">
                <span>Swipe or scroll through previews</span>
              </div>
              <div className="-mx-2 mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-2 pb-2">
                {screenshots.map((screenshot) => (
                  <div
                    key={screenshot.label}
                    className="min-w-[240px] max-w-[240px] snap-start rounded-[28px] border border-white/10 bg-white/5 p-4 shadow-lg backdrop-blur-sm sm:min-w-[260px] sm:max-w-[260px]"
                  >
                    {screenshot.path ? (
                      <img
                        src={screenshot.path}
                        alt={`${app.name} ${screenshot.label}`}
                        className="mx-auto aspect-[9/19] w-full rounded-[24px] border border-white/10 object-cover"
                      />
                    ) : (
                      <div className="mx-auto flex aspect-[9/19] w-full items-center justify-center rounded-[24px] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 px-6 text-center">
                        <div>
                          <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-100/80">{screenshot.label}</p>
                          <p className="mt-3 text-base font-semibold text-white">{app.name}</p>
                          <p className="mt-2 text-sm leading-relaxed text-slate-300">Placeholder for an app screen preview.</p>
                        </div>
                      </div>
                    )}
                    <p className="mt-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-blue-100/80">
                      {screenshot.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400">Developer</p>
            <p className="mt-2 text-lg font-bold text-slate-900">MatchlessWorks</p>
            <p className="mt-1 text-sm text-slate-500">Independent app creator</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400">Privacy</p>
            <p className="mt-2 text-lg font-bold text-slate-900">{app.dataCollection}</p>
            <p className="mt-1 text-sm text-slate-500">Minimal data footprint</p>
          </div>
        </section>

        <section id="provisions" className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">Details</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-900">App-Specific Provisions</h2>
            </div>
            <p className="text-sm text-slate-500">The privacy and usage details specific to {app.name}.</p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Data Collection</span>
              <p className="mt-3 font-semibold leading-relaxed text-slate-900">{app.dataCollection}</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Usage Context</span>
              <p className="mt-3 font-semibold leading-relaxed text-slate-900">{app.usage}</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Third Parties</span>
              <p className="mt-3 font-semibold leading-relaxed text-slate-900">{app.thirdParties}</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AppDetailPage;
