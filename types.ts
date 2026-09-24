
export interface AppDetail {
  id: string;
  name: string;
  appStoreUrl?: string;
  iconPath: string;
  screenshotPaths?: string[];
  dataCollection: string;
  usage: string;
  thirdParties: string;
  multiplayerPrivacy?: string;
  description: string;
}

export interface LegalDocumentSection {
  title: string;
  content?: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface LegalDocument {
  title: string;
  summary: string;
  version: string;
  lastUpdated: string;
  introParagraphs?: string[];
  sections: LegalDocumentSection[];
  acknowledgment: string;
}
