import React from 'react';
import ReactDOM from 'react-dom/client';
import LegalDocumentPage from './components/LegalDocumentPage';
import { LEGAL_TERMS_OF_USE } from './constants';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Could not find root element to mount to');
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <LegalDocumentPage document={LEGAL_TERMS_OF_USE} backHref="/" />
  </React.StrictMode>
);