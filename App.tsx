
import React, { useState, useEffect } from 'react';
import { APPS, LEGAL_PRIVACY_POLICY } from './constants';
import { AppDetail } from './types';

const App: React.FC = () => {
  const [isPolicyModalOpen, setIsPolicyModalOpen] = useState(false);
  const [isDeletionModalOpen, setIsDeletionModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedApp, setSelectedApp] = useState<AppDetail | null>(null);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isPolicyModalOpen || isDeletionModalOpen || isContactModalOpen || selectedApp) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isPolicyModalOpen, isDeletionModalOpen, isContactModalOpen, selectedApp]);

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Header */}
      <header className="bg-slate-900 text-white pt-4 pb-5 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <img src="/MatchlessWorksMountainLogo.png" alt="MatchlessWorks Logo" className="mx-auto mb-5 h-40" />
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 leading-tight">
            Support & Privacy
          </h1>
          <p className="text-sm text-slate-400 font-light max-w-2xl mx-auto">
            Documentation, data practices, and privacy commitments for our entire suite of apps.
          </p>
        </div>
      </header>

      {/* Sticky Navigation */}
      <nav className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-slate-200 z-40">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-center space-x-6 md:space-x-10 text-sm font-medium text-slate-600 overflow-x-auto whitespace-nowrap">
          <button 
            onClick={() => setIsPolicyModalOpen(true)}
            className="hover:text-blue-600 transition-colors cursor-pointer outline-none"
          >
            Privacy Policy
          </button>
          <button 
            onClick={() => setIsDeletionModalOpen(true)}
            className="hover:text-blue-600 transition-colors cursor-pointer outline-none"
          >
            Data Deletion
          </button>
          <button 
            onClick={() => setIsContactModalOpen(true)}
            className="hover:text-blue-600 transition-colors cursor-pointer outline-none"
          >
            Contact Support
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 max-w-5xl mx-auto px-4 pt-6 pb-12 space-y-8">
        
        {/* Apps Section */}
        <section id="apps" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-3xl font-bold text-slate-900">Our Apps</h2>
            <div className="h-px bg-slate-200 flex-1"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {APPS.map((app) => (
              <div 
                key={app.id} 
                className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-4">{app.name}</h3>
                
                <div className="flex justify-center mb-4">
                  <button 
                    onClick={() => setSelectedApp(app)}
                    className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center group-hover:bg-blue-50 transition-colors hover:scale-105 transform duration-200 cursor-pointer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 group-hover:text-blue-600 transition-colors">
                      <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path>
                      <path d="M10 2c1 .5 2 2 2 5"></path>
                    </svg>
                  </button>
                </div>
                
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                  {app.description}
                </p>
                
                <div className="flex flex-col space-y-2">
                  <a 
                    href={`#${app.id}`} 
                    className="text-blue-600 text-sm font-semibold hover:underline flex items-center justify-center gap-1"
                  >
                    Privacy Details 
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </a>
                  <a 
                    href="mailto:support@matchlessworks.com" 
                    className="text-slate-400 text-xs hover:text-slate-600 transition-colors text-center"
                  >
                    Contact App Support
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Summary Privacy Policy */}
        <section id="privacy-summary" className="scroll-mt-24">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">General Privacy Stance</h2>
            <div className="prose prose-slate max-w-none">
              <p className="text-sm text-slate-400 font-medium mb-6 uppercase tracking-wider">
                Our approach to your data
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                At MatchlessWorks, we believe that privacy is a fundamental human right. Our apps are engineered from the ground up to operate with minimal data footprint. We prioritize on-device processing and user anonymity.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-bold text-slate-900">Our Core Principles</h4>
                  <ul className="space-y-2 text-slate-600 list-disc list-inside">
                    <li>No unnecessary data collection.</li>
                    <li>No background tracking or profiling.</li>
                    <li>No third-party data broker integration.</li>
                    <li>Transparency in all practices.</li>
                  </ul>
                  <button 
                    onClick={() => setIsPolicyModalOpen(true)}
                    className="mt-4 text-blue-600 font-bold hover:text-blue-700 transition-colors inline-flex items-center gap-2"
                  >
                    Read Full Legal Policy
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                  </button>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-2 italic">A note on data ownership</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Because we don't store your data on our servers, you are the sole owner and guardian of your information. Everything you do in our apps stays on your device.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-12 px-4 mt-20">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="space-y-2">
            <p className="font-bold text-slate-900 tracking-tight text-lg">MatchlessWorks</p>
            <p className="text-slate-500 text-sm italic">Building tools that respect your mind and your privacy.</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-slate-400 text-sm">© 2026 MatchlessWorks · All Rights Reserved</p>
            <div className="flex justify-center md:justify-end space-x-4 text-xs font-semibold uppercase text-slate-400">
              <button 
                onClick={() => setIsPolicyModalOpen(true)}
                className="hover:text-blue-600 transition-colors cursor-pointer outline-none"
              >
                Privacy
              </button>
              <a href="#" className="hover:text-blue-600 transition-colors">Terms</a>
              <a href="mailto:support@matchlessworks.com" className="hover:text-blue-600 transition-colors">Email</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {isPolicyModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8 md:p-8">
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300"
            onClick={() => setIsPolicyModalOpen(false)}
          ></div>
          <div className="relative bg-blue-600 w-full max-w-3xl max-h-full overflow-hidden rounded-3xl shadow-2xl flex flex-col animate-in zoom-in-95 slide-in-from-bottom-5 duration-300 text-white">
            {/* Modal Header */}
            <div className="p-6 border-b border-white/20 flex justify-between items-center shrink-0">
              <div>
                <h2 className="text-xl font-bold text-white">Official Privacy Policy</h2>
                <p className="text-xs text-white/80 font-medium">Version {LEGAL_PRIVACY_POLICY.version} • {LEGAL_PRIVACY_POLICY.lastUpdated}</p>
              </div>
              <button 
                onClick={() => setIsPolicyModalOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full text-white/80 hover:text-white transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="overflow-y-auto p-8 md:p-12 space-y-10">
              {LEGAL_PRIVACY_POLICY.sections.map((section, idx) => (
                <section key={idx}>
                  <h3 className="text-lg font-bold text-white mb-3">{section.title}</h3>
                  <p className="text-white/90 leading-relaxed text-[15px]">{section.content}</p>
                </section>
              ))}
              
              <div className="pt-8 border-t border-white/20">
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20 text-center">
                  <p className="text-sm text-white/80 font-medium">
                    By using MatchlessWorks applications, you acknowledge that you have read and understood this Privacy Policy.
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-blue-700 border-t border-white/20 flex justify-end shrink-0">
              <button 
                onClick={() => setIsPolicyModalOpen(false)}
                className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-lg"
              >
                Close Policy
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Data Deletion Modal */}
      {isDeletionModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8 md:p-8">
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300"
            onClick={() => setIsDeletionModalOpen(false)}
          ></div>
          <div className="relative bg-blue-600 w-full max-w-3xl max-h-full overflow-hidden rounded-3xl shadow-2xl flex flex-col animate-in zoom-in-95 slide-in-from-bottom-5 duration-300 text-white">
            {/* Modal Header */}
            <div className="p-6 border-b border-white/20 flex justify-between items-center shrink-0">
              <div>
                <h2 className="text-3xl font-bold">Data Deletion Policy</h2>
                <p className="text-sm opacity-80 font-medium">How to remove your data</p>
              </div>
              <button 
                onClick={() => setIsDeletionModalOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full text-white/80 hover:text-white transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="overflow-y-auto p-8 md:p-12 space-y-8">
              <p className="text-xl opacity-90 leading-relaxed font-light">
                Because our apps do not collect or store personal data on any server, no account deletion request or data removal process is required. 
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 flex-1">
                  <p className="text-sm font-medium">To remove all local data, simply uninstall the application from your device.</p>
                </div>
                <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 flex-1">
                  <p className="text-sm font-medium">If you have specific legal queries, please contact us at <a href="mailto:matchlessworks.com@gmail.com" className="text-white underline hover:text-blue-200 transition-colors">matchlessworks.com@gmail.com</a>.</p>
                </div>
              </div>
              
              <div className="pt-8 border-t border-white/20">
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20 text-center">
                  <p className="text-sm opacity-80 font-medium">
                    Your privacy and data control are our top priorities.
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-blue-700 border-t border-white/20 flex justify-end shrink-0">
              <button 
                onClick={() => setIsDeletionModalOpen(false)}
                className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contact Support Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8 md:p-8">
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300"
            onClick={() => setIsContactModalOpen(false)}
          ></div>
          <div className="relative bg-white w-full max-w-4xl max-h-full overflow-hidden rounded-3xl shadow-2xl flex flex-col animate-in zoom-in-95 slide-in-from-bottom-5 duration-300">
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-100 flex justify-between items-center shrink-0">
              <div>
                <h2 className="text-3xl font-bold text-slate-900">Contact Support</h2>
                <p className="text-sm text-slate-500 font-medium">MatchlessWorks</p>
              </div>
              <button 
                onClick={() => setIsContactModalOpen(false)}
                className="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="overflow-y-auto p-8 md:p-12 space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">We're here to help.</h3>
                <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                  If you're experiencing an issue with any MatchlessWorks app, have a question about your account, or need assistance, please reach out using the information below. Our support team is committed to providing timely and helpful responses.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">📧 Email Support</h4>
                </div>

                <p className="text-slate-600 mb-6">For general support inquiries:</p>

                <div className="bg-white rounded-xl p-4 border border-slate-200 mb-6">
                  <a href="mailto:matchlessworks.com@gmail.com" className="text-blue-600 hover:text-blue-700 font-semibold text-lg underline">
                    matchlessworks.com@gmail.com
                  </a>
                </div>

                <div className="space-y-4">
                  <p className="font-semibold text-slate-900">Please include:</p>
                  <ul className="space-y-2 text-slate-600 ml-4">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
                      The name of the app
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
                      Your device type (iPhone, Android, tablet, etc.)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
                      Your operating system version
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
                      A detailed description of the issue
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
                      Screenshots (if applicable)
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                <div className="flex items-center gap-3 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12,6 12,12 16,14"></polyline>
                  </svg>
                  <h4 className="font-bold text-blue-900">Response Time:</h4>
                </div>
                <p className="text-blue-800">
                  We typically respond within 24–48 business hours (Monday–Friday).
                </p>
              </div>

              <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
                <div className="flex items-center gap-3 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                    <line x1="12" y1="9" x2="12" y2="13"></line>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                  <h4 className="text-xl font-bold text-amber-900">Important Notice</h4>
                </div>
                <div className="space-y-3 text-amber-800">
                  <p className="font-medium">
                    MatchlessWorks apps are designed for educational, personal development, and informational purposes only.
                  </p>
                  <p>
                    We do not provide medical, mental health, legal, or emergency services.
                  </p>
                  <div className="bg-amber-100 rounded-lg p-4 border border-amber-200">
                    <p className="font-semibold text-amber-900 mb-1">Emergency Services:</p>
                    <p className="text-sm">
                      If you are experiencing a medical or mental health emergency, please call 911 (U.S.) or contact your local emergency services immediately.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-600">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <h4 className="text-xl font-bold text-slate-900">🏢 Company Information</h4>
                </div>
                <div className="space-y-2 text-slate-700">
                  <p className="font-semibold text-lg">MatchlessWorks</p>
                  <p>Fredericksburg, Virginia</p>
                  <p>United States</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100 text-center">
                <p className="text-blue-900 font-medium text-lg">
                  Thank you for using MatchlessWorks. We appreciate the opportunity to serve you and are committed to continually improving our products and support experience.
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-end shrink-0">
              <button 
                onClick={() => setIsContactModalOpen(false)}
                className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* App Detail Modal */}
      {selectedApp && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8 md:p-8">
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300"
            onClick={() => setSelectedApp(null)}
          ></div>
          <div className="relative bg-white w-full max-w-4xl max-h-full overflow-hidden rounded-3xl shadow-2xl flex flex-col animate-in zoom-in-95 slide-in-from-bottom-5 duration-300">
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-100 flex justify-between items-center shrink-0">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                    <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path>
                    <path d="M10 2c1 .5 2 2 2 5"></path>
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">{selectedApp.name}</h2>
                  <p className="text-sm text-slate-500">App Details & Privacy Information</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedApp(null)}
                className="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="overflow-y-auto p-8 md:p-12 space-y-8">
              <div className="text-center">
                <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                  {selectedApp.description}
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <circle cx="12" cy="16" r="1"></circle>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                  Privacy & Data Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Data Collection</span>
                    </div>
                    <p className="text-slate-700 font-medium pl-4">{selectedApp.dataCollection}</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Usage Context</span>
                    </div>
                    <p className="text-slate-700 font-medium pl-4">{selectedApp.usage}</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Third Parties</span>
                    </div>
                    <p className="text-slate-700 font-medium pl-4">{selectedApp.thirdParties}</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                <div className="flex items-center gap-3 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14,2 14,8 20,8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10,9 9,9 8,9"></polyline>
                  </svg>
                  <h4 className="font-bold text-blue-900">Data Ownership</h4>
                </div>
                <p className="text-blue-800">
                  All data created or processed by {selectedApp.name} is stored locally on your device's internal storage. We do not maintain any cloud databases or servers that hold user-generated content. Your data remains in your control at all times.
                </p>
              </div>

              <div className="bg-green-50 rounded-2xl p-6 border border-green-100 text-center">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                    <polyline points="20,6 9,17 4,12"></polyline>
                  </svg>
                  <h4 className="font-bold text-green-900">Privacy-First Design</h4>
                </div>
                <p className="text-green-800">
                  {selectedApp.name} is designed with privacy as a fundamental principle. No personal data is collected, stored, or transmitted by this application.
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-between items-center shrink-0">
              <a 
                href="mailto:matchlessworks.com@gmail.com" 
                className="text-blue-600 hover:text-blue-700 font-semibold underline flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                Contact Support
              </a>
              <button 
                onClick={() => setSelectedApp(null)}
                className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default App;
