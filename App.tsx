import React from 'react';
import AppIcon from './components/AppIcon';
import { APPS, SUPPORT_EMAIL_LINK } from './constants';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-12rem] top-[-8rem] h-[28rem] w-[28rem] rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute right-[-10rem] top-[10rem] h-[24rem] w-[24rem] rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute bottom-[-8rem] left-1/2 h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-orange-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_30%),linear-gradient(180deg,rgba(15,23,42,0.96),rgba(2,6,23,1))]" />
      </div>

      <nav className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 md:px-6">
          <a href="/" className="flex items-center gap-3">
            <div className="h-10 w-10 overflow-hidden rounded-xl border border-white/10 bg-white/95 shadow-[0_8px_24px_rgba(15,23,42,0.22)]">
              <img
                src="/images/apps/MatchlessWorksMountainLogo.png"
                alt="MatchlessWorks mountain logo"
                className="h-full w-full scale-[1.48] object-contain"
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">MatchlessWorks</p>
              <p className="text-sm font-medium text-white/70">Support and Privacy</p>
            </div>
          </a>

          <div className="flex items-center gap-3 overflow-x-auto whitespace-nowrap text-sm font-medium text-white/70 md:gap-6">
            <a href="#apps" className="transition-colors hover:text-white">Apps</a>
            <a href="#resources" className="transition-colors hover:text-white">Resources</a>
            <a href="/privacy.html" className="transition-colors hover:text-white">Privacy</a>
            <a href="/terms.html" className="transition-colors hover:text-white">Terms</a>
            <a
              href={SUPPORT_EMAIL_LINK}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-white transition-colors hover:border-cyan-300/40 hover:bg-white/15"
            >
              Contact Support
            </a>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        <section className="px-4 pb-14 pt-12 md:px-6 md:pb-20 md:pt-16">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/80 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)]" />
                MatchlessWorks App Hub
              </div>
              <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-white md:text-7xl">
                Explore our apps.
                <span className="block bg-gradient-to-r from-white via-cyan-100 to-sky-300 bg-clip-text text-transparent">
                  Find support fast.
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
                Browse the MatchlessWorks app lineup, open app-specific support pages, review privacy details, and get to the right documentation without digging.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#apps"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-bold text-slate-950 transition-transform hover:-translate-y-0.5"
                >
                  Browse Our Apps
                </a>
                <a
                  href={SUPPORT_EMAIL_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/8 px-6 py-3 text-sm font-bold text-white backdrop-blur transition-colors hover:bg-white/12"
                >
                  Email Support
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/70">Apps</p>
                  <p className="mt-3 text-3xl font-semibold text-white">{APPS.length}</p>
                  <p className="mt-2 text-sm text-slate-300">Direct links to every active support page.</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/70">Privacy</p>
                  <p className="mt-3 text-3xl font-semibold text-white">Clear</p>
                  <p className="mt-2 text-sm text-slate-300">One place for privacy, terms, and deletion details.</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/70">Support</p>
                  <p className="mt-3 text-3xl font-semibold text-white">Fast</p>
                  <p className="mt-2 text-sm text-slate-300">Email help is available from every route on the page.</p>
                </div>
              </div>
            </div>

            <div className="mx-auto w-full max-w-xl rounded-[2rem] border border-white/10 bg-white/90 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur">
              <div className="rounded-[1.5rem] bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.18),transparent_45%),linear-gradient(180deg,#ffffff,#eef6fb)] p-6">
                <img
                  src="/images/apps/MatchlessWorksMountainLogo.png"
                  alt="MatchlessWorks mountain logo"
                  className="mx-auto h-56 w-auto object-contain md:h-72"
                />
              </div>
              <p className="mt-5 text-center text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
                Built to fit naturally into MatchlessWorks.com
              </p>
            </div>
          </div>
        </section>

        <section id="apps" className="scroll-mt-28 px-4 pb-10 md:px-6">
          <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/70">Primary</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl">Our Apps</h2>
              </div>
              <p className="max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
                Open any app to view support options, privacy information, screenshots, and the fastest path to help.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              {APPS.map((app) => (
                <a
                  key={app.id}
                  href={`/app.html?app=${app.id}`}
                  className="group block rounded-[1.75rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] p-6 shadow-[0_10px_35px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-300/30 hover:shadow-[0_18px_45px_rgba(8,145,178,0.18)] focus:outline-none focus:ring-2 focus:ring-cyan-300/60 focus:ring-offset-2 focus:ring-offset-slate-950"
                >
                  <div className="flex items-start gap-4">
                    <AppIcon
                      name={app.name}
                      iconPath={app.iconPath}
                      sizeClassName="h-16 w-16 rounded-md"
                      preferDarkBackdrop={app.id === 'legacyman'}
                      imageClassName={app.id === 'legacyman' ? undefined : 'h-full w-full object-cover'}
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-xl font-semibold leading-tight text-white">{app.name}</h3>
                        <span className="shrink-0 rounded-full border border-white/10 bg-white/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-100/80">
                          Support
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-slate-300">{app.description}</p>
                      <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition-colors group-hover:text-cyan-100">
                        Open App Page
                        <span aria-hidden="true">→</span>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="resources" className="px-4 py-10 md:px-6 md:py-14">
          <div className="mx-auto max-w-6xl">
            <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/70">Resources</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl">Support, privacy, and documentation</h2>
              </div>
              <p className="max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
                Secondary paths for legal details, direct contact, and reference material when you need something beyond a specific app page.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              <a
                href={SUPPORT_EMAIL_LINK}
                target="_blank"
                rel="noreferrer"
                className="group rounded-[1.75rem] border border-white/10 bg-white/6 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-cyan-300/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/15 text-xl text-cyan-200">?</div>
                <h3 className="mt-5 text-2xl font-semibold text-white">Support</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">Reach MatchlessWorks directly for troubleshooting, account questions, or help finding the right app resource.</p>
                <div className="mt-5 text-sm font-semibold text-cyan-200">Email Support →</div>
              </a>

              <a
                href="/privacy.html"
                className="group rounded-[1.75rem] border border-white/10 bg-white/6 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-cyan-300/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/15 text-xl text-cyan-200">◈</div>
                <h3 className="mt-5 text-2xl font-semibold text-white">Privacy</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">Review how MatchlessWorks handles data, what stays on-device, and how privacy commitments apply across the app suite.</p>
                <div className="mt-5 text-sm font-semibold text-cyan-200">Read Privacy Policy →</div>
              </a>

              <a
                href="/terms.html"
                className="group rounded-[1.75rem] border border-white/10 bg-white/6 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-cyan-300/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/15 text-xl text-cyan-200">▤</div>
                <h3 className="mt-5 text-2xl font-semibold text-white">Documentation</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">Open the current legal and reference materials, including terms of use and the documentation foundation for the growing MatchlessWorks suite.</p>
                <div className="mt-5 text-sm font-semibold text-cyan-200">View Documentation →</div>
              </a>
            </div>
          </div>
        </section>

        <section className="px-4 pb-16 pt-4 md:px-6 md:pb-24">
          <div className="mx-auto flex max-w-6xl flex-col gap-5 rounded-[2rem] border border-white/10 bg-[linear-gradient(110deg,rgba(14,165,233,0.18),rgba(249,115,22,0.12))] p-6 backdrop-blur md:flex-row md:items-center md:justify-between md:p-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/80">Direct Contact</p>
              <h3 className="mt-3 text-2xl font-semibold text-white md:text-3xl">Need help finding the right place?</h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-200 md:text-base">
                Email MatchlessWorks support and we&apos;ll point you to the right app page, privacy document, or answer directly.
              </p>
            </div>
            <a
              href={SUPPORT_EMAIL_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-bold text-slate-950 transition-transform hover:-translate-y-0.5"
            >
              Contact MatchlessWorks
            </a>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 px-4 py-10 text-slate-400 md:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold tracking-tight text-white">MatchlessWorks</p>
            <p className="mt-2 text-sm text-slate-400">Support resources, privacy details, and app-specific help in one place.</p>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-300">
            <a href="#apps" className="transition-colors hover:text-white">Apps</a>
            <a href="/privacy.html" className="transition-colors hover:text-white">Privacy</a>
            <a href="/terms.html" className="transition-colors hover:text-white">Terms</a>
            <a href="/data-deletion.html" className="transition-colors hover:text-white">Data Deletion</a>
            <a href={SUPPORT_EMAIL_LINK} target="_blank" rel="noreferrer" className="transition-colors hover:text-white">Email Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;