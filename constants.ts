
import { AppDetail } from './types';

export const APPS: AppDetail[] = [
  {
    id: 'gentlesteps',
    name: 'Gentle Steps',
    dataCollection: 'No personal data collected.',
    usage: 'Progress remains on the device.',
    thirdParties: 'None.',
    description: 'Get calm, practical parenting help for behavior, sleep, and first aid—all in one simple app.',
    image: '/GentleSteps.png'
  },
  {
    id: 'calmnow',
    name: 'CalmNow',
    dataCollection: 'No personal data is collected.',
    usage: 'App operates entirely on-device.',
    thirdParties: 'None.',
    description: 'A mindfulness and meditation app designed for instant relief.'
  },
  {
    id: 'betterthanbetter',
    name: 'Better Than Better',
    dataCollection: 'No personal information is collected.',
    usage: 'Self-help content accessed without accounts.',
    thirdParties: 'None.',
    description: 'Your companion for continuous self-improvement and growth.'
  },
  {
    id: 'wisdomroot',
    name: 'Wisdom Root',
    dataCollection: 'No personal or sensitive data collected.',
    usage: 'Educational and reflection content only.',
    thirdParties: 'None.',
    description: 'Deep dives into historical and philosophical wisdom.'
  },
  {
    id: 'fixit',
    name: 'Fix It',
    dataCollection: 'No personal data collected.',
    usage: 'App functions without user accounts.',
    thirdParties: 'None.',
    description: 'Practical solutions and checklists for everyday tasks.'
  },
  {
    id: 'temporun',
    name: 'Tempo Run',
    dataCollection: 'No personal data collected.',
    usage: 'App runs without tracking or accounts.',
    thirdParties: 'None.',
    description: 'Rhythm-based running companion for optimal pacing.'
  }
];

export const SYSTEM_INSTRUCTION = `
You are a helpful Support Assistant for MatchlessWorks. 
Your primary task is to answer questions about the privacy policies and data practices of MatchlessWorks apps.

MatchlessWorks Apps Info:
${APPS.map(app => `
App: ${app.name}
- Data Collection: ${app.dataCollection}
- Usage: ${app.usage}
- Third Parties: ${app.thirdParties}
- Description: ${app.description}
`).join('\n')}

General Privacy Policy:
- MatchlessWorks respects privacy. 
- Apps function without collecting personal data unless explicitly stated.
- No personal data is stored, so no data deletion requests are needed.

Contact Info: matchlessworks.com@gmail.com

Guidelines:
1. Be concise, professional, and friendly.
2. If a user asks about a specific app, refer to the data above.
3. Emphasize that no data is collected and everything happens on-device.
4. If asked about data deletion, explain that since no data is stored, no deletion is necessary.
`;

export const LEGAL_PRIVACY_POLICY = {
  version: "2026.1.1",
  lastUpdated: "January 24, 2026",
  sections: [
    {
      title: "1. Introduction",
      content: "This Privacy Policy describes how MatchlessWorks ('we', 'us', or 'our') handles information in relation to our mobile applications available on the Apple App Store. We take your privacy seriously and have designed our apps to function with a 'Privacy-First' architecture."
    },
    {
      title: "2. Information We Do Not Collect",
      content: "MatchlessWorks does not collect, store, or transmit any Personal Identifiable Information (PII). This includes, but is not limited to: names, email addresses, physical addresses, phone numbers, precise location data, or device identifiers (IDFA/IDFV). Our apps do not require user accounts to function."
    },
    {
      title: "3. Local Data Processing",
      content: "All data created or processed by our applications (such as meditation logs, habit progress, or runner statistics) is stored locally on your device's internal storage. We do not maintain any cloud databases or servers that hold user-generated content. Your data remains in your control at all times."
    },
    {
      title: "4. Third-Party Services",
      content: "Our applications do not integrate with third-party data brokers, analytics providers that track individual users, or advertising networks. We may use native OS-level frameworks (e.g., Apple HealthKit or CoreMotion) only where explicitly requested by the user to provide core app functionality; such data never leaves your device via our software."
    },
    {
      title: "5. Children's Privacy",
      content: "Because our applications do not collect any personal information from any users, they are safe for children and comply with the Children's Online Privacy Protection Act (COPPA). We do not knowingly target or track children."
    },
    {
      title: "6. Data Retention and Deletion",
      content: "Since no user data is stored on our servers, we have no data to delete upon request. To delete your local data, simply uninstall the application from your device. This will remove all associated sandboxed data stored by the OS."
    },
    {
      title: "7. Contact Information",
      content: "If you have questions about this Privacy Policy or our software practices, please contact our privacy officer at matchlessworks.com@gmail.com."
    }
  ]
};
