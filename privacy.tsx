import React from 'react';
import ReactDOM from 'react-dom/client';
import LegalDocumentPage from './components/LegalDocumentPage';
import { LEGAL_PRIVACY_POLICY } from './constants';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Could not find root element to mount to');
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <LegalDocumentPage document={LEGAL_PRIVACY_POLICY} backHref="/" />
  </React.StrictMode>
);