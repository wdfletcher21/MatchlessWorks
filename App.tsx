import React from 'react';
import { APPS, SUPPORT_EMAIL_LINK } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <header className="bg-slate-900 text-white py-12 px-4 text-center md:py-14">
        <div className="max-w-4xl mx-auto">
          <img
            src="/images/apps/MatchlessWorksMountainLogo.png"
            alt="MatchlessWorks mountain logo"
            className="mx-auto mb-5 h-40 w-auto md:h-52"
          />
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
            Support & Privacy
          </h1>
          <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto">
            Documentation, data practices, and privacy commitments for our entire suite of apps.
          </p>
        </div>
      </header>

      <nav className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-slate-200 z-40">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-center space-x-6 md:space-x-10 text-sm font-medium text-slate-600 overflow-x-auto whitespace-nowrap">
          <a href="#apps" className="hover:text-blue-600 transition-colors">Apps</a>
          <a href="/privacy.html" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
          <a href="/terms.html" className="hover:text-blue-600 transition-colors">Terms of Use</a>
          <a href="/data-deletion.html" className="hover:text-blue-600 transition-colors">Data Deletion</a>
          <a href={SUPPORT_EMAIL_LINK} target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">Contact Support</a>
        </div>
      </nav>

      <main className="flex-1 max-w-5xl mx-auto px-4 py-12 space-y-16">
        <section id="apps" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-3xl font-bold text-slate-900">Our Apps</h2>
            <div className="h-px bg-slate-200 flex-1"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {APPS.map((app) => (
              <a
                key={app.id}
                href={`/app.html?app=${app.id}`}
                className="group block bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <div className="flex flex-col items-start gap-4">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200">
                    <div className="absolute inset-0 flex items-center justify-center bg-blue-50 text-blue-600 text-lg font-bold">
                      {app.name.charAt(0)}
                    </div>
                    <img
                      src={app.iconPath}
                      alt={`${app.name} icon`}
                      className="relative z-10 h-full w-full object-cover"
                      onError={(event) => {
                        event.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-slate-900 leading-tight">{app.name}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{app.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-slate-50 border-t border-slate-200 py-12 px-4 mt-20">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="space-y-2">
            <p className="font-bold text-slate-900 tracking-tight text-lg">MatchlessWorks</p>
            <p className="text-slate-500 text-sm italic">Building tools that respect your mind and your privacy.</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-slate-400 text-sm">© 2026 MatchlessWorks · All Rights Reserved</p>
            <div className="flex justify-center md:justify-end space-x-4 text-xs font-semibold uppercase text-slate-400">
              <a href="/privacy.html" className="hover:text-blue-600 transition-colors">Privacy</a>
              <a href="/terms.html" className="hover:text-blue-600 transition-colors">Terms</a>
              <a href="/data-deletion.html" className="hover:text-blue-600 transition-colors">Deletion</a>
              <a href={SUPPORT_EMAIL_LINK} target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">Email</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;