
import { AppDetail, LegalDocument } from './types';

export const SUPPORT_EMAIL = 'matchlessworks.com@gmail.com';
export const getSupportEmailLink = (subject?: string) => {
  const params = new URLSearchParams({
    view: 'cm',
    fs: '1',
    to: SUPPORT_EMAIL,
  });

  if (subject) {
    params.set('su', subject);
  }

  return `https://mail.google.com/mail/?${params.toString()}`;
};

export const SUPPORT_EMAIL_LINK = getSupportEmailLink('MatchlessWorks Support Request');

export const APPS: AppDetail[] = [
  {
    id: 'stickembowfishingpro',
    name: 'Stickem Bowfishing Pro',
    appStoreUrl: 'https://apps.apple.com/us/app/stickem-bowfishing-pro/id6773210663',
    iconPath: '/images/apps/Stickem.png',
    screenshotPaths: [
      '/images/apps/Stickem1.png',
      '/images/apps/Stickem 3.png',
      '/images/apps/stickembowfishing 2.png',
      '/images/apps/Stickem9.png',
      '/images/apps/Stickem5.png',
      '/images/apps/Stickem7.png',
      '/images/apps/Stickem8.png',
      '/images/apps/Stickem4.png',
      '/images/apps/Stickem6.png',
    ],
    dataCollection: `STICKem Bowfishing does not require users to provide a legal name, email address, telephone number, physical address, or social-media account. The app may collect or process the following information:

  - A randomly generated player identifier and an anonymous authentication identifier.
  - A user-selected Hunter Tag. Users should not include their real name or other personal information in their Hunter Tag.
  - Gameplay information, including scores, catches, shots, accuracy, game progress, virtual currency, equipment, and leaderboard results.
  - Head-to-head match information, including room codes, participant identifiers, Hunter Tags, readiness and connection status, scores, match results, and timestamps.
  - Safety information submitted through the reporting and blocking features, including the accounts involved and the selected report reason.
  - In-app purchase information, including products purchased, entitlement status, transaction status, and purchase-restoration information.
  - Technical information that may be processed automatically when the app communicates with our service providers, such as IP address, device type, operating system, application version, network status, request timestamps, and service diagnostic information.

  Some game progress, preferences, upgrades, and local score history are stored directly on the user’s device. Information used for leaderboards, multiplayer matches, reports, blocks, purchases, and online services may be processed or stored remotely.

  STICKem Bowfishing does not intentionally collect precise location, contacts, photographs, camera recordings, microphone recordings, health information, or financial-account credentials. Payment-card information is processed by Apple and is not provided directly to us.

  We do not sell personal information. We do not use collected information for cross-app advertising or tracking.`,
    usage: `We use the information described above to:

  - Create and maintain an anonymous player session.
  - Save game progress and preferences.
  - Operate local and global leaderboards.
  - Create, join, synchronize, and complete private head-to-head matches.
  - Display Hunter Tags, scores, and match results to other participants.
  - Detect lost connections, restore multiplayer sessions, and finalize interrupted matches.
  - Fulfill, verify, and restore in-app purchases.
  - Generate fish lore and other game content.
  - Respond to support requests.
  - Review reports, enforce community and safety rules, prevent blocked players from joining one another’s matches, investigate abuse, and protect users and the service.
  - Diagnose technical problems, maintain security, prevent fraud, and improve reliability.

  Hunter Tags and leaderboard results may be visible to other users. During a head-to-head match, each participant can see the other participant’s Hunter Tag, connection status, live score, and final result.

  We retain information only for as long as reasonably necessary to provide the applicable feature, maintain security, resolve disputes, satisfy legal obligations, and enforce our rules. Safety reports and blocking relationships may be retained longer than ordinary gameplay records when reasonably necessary to investigate abuse or prevent repeated unwanted interactions.

  Users may contact us at matchlessworks.com@gmail.com with privacy questions or requests concerning their information. Because the app uses anonymous identifiers, we may need information such as a Hunter Tag, match code, purchase record, or device-generated identifier to locate the relevant records.`,
    thirdParties: `We use service providers to operate specific portions of STICKem Bowfishing:

  - Supabase provides anonymous authentication, database storage, server functions, leaderboards, multiplayer synchronization, and safety records. Supabase generally processes application end-user data as customer data on our behalf. https://supabase.com/privacy
  - RevenueCat manages in-app purchase products, purchase history, entitlement status, and purchase restoration. RevenueCat may process an anonymous App User ID, transaction information, device and operating-system information, IP address, inferred IP-based location, and service timestamps. RevenueCat states that its SDK collects purchase history and can generate an anonymous identifier when an app does not supply its own identity. https://www.revenuecat.com/privacy-policy https://www.revenuecat.com/docs/platform-resources/apple-platform-resources/apple-app-privacy
  - Apple provides App Store distribution, StoreKit payment processing, purchase authorization, transaction records, restoration, and fraud prevention. Apple processes payment and Apple Account information under its own privacy policy. We do not receive the user’s complete payment-card information. https://www.apple.com/legal/privacy/
  - Google Gemini API generates fish lore. The app currently sends game-related prompts, such as a fish type, rather than Hunter Tags, multiplayer records, or contact information. Google may process prompts, generated responses, technical usage information, and security-monitoring information under the applicable Gemini API terms. Google’s treatment of prompts may differ depending on whether the API is used as a paid or unpaid service. https://ai.google.dev/gemini-api/terms https://ai.google.dev/gemini-api/docs/zdr

  These providers may process information in countries other than the user’s country and apply their own security, retention, and legal-compliance practices. We share information with each provider only as reasonably necessary to operate the relevant feature.`,
    description: 'Experience the adrenaline of this bowfishing game—take aim, release, and land the biggest catches in Stickem Bowfishing Pro.'
  },
  {
    id: 'gentlesteps',
    name: 'Gentle Steps',
    iconPath: '/images/apps/gentlesteps.png',
    screenshotPaths: [
      '/images/apps/Gentlesteps 1.png',
      '/images/apps/Gentlesteps 2.png',
      '/images/apps/Gentlesteps 3.png',
      '/images/apps/Gentlesteps 4.png',
      '/images/apps/Gentlesteps 5.png',
      '/images/apps/Gentlesteps 6.png',
      '/images/apps/Gentlesteps 7.png',
    ],
    dataCollection: 'No personal data collected.',
    usage: 'Progress remains on the device.',
    thirdParties: 'None.',
    description: 'Parenting is a journey of thousands of little moments. Gentle Steps helps you make each one count—with trusted guidance, practical tools, and encouragement for every stage of early childhood.'
  },
  {
    id: 'legacyman',
    name: 'Legacy Man',
    iconPath: '/images/apps/LegacyManLogo.png?v=20260812-legacy-1',
    screenshotPaths: [],
    dataCollection: 'No personal data collected.',
    usage: 'App content is available without requiring an account.',
    thirdParties: 'None.',
    description: 'A character-building app focused on faith, purpose, and practical guidance for men pursuing a stronger legacy.'
  },
  {
    id: 'simplysaid',
    name: 'Simply Said',
    iconPath: '/images/apps/SimplySaidLogo.png',
    screenshotPaths: [],
    dataCollection: 'No personal data collected.',
    usage: 'App works without accounts or cloud syncing.',
    thirdParties: 'None.',
    description: 'A clean communication app built to help you express ideas clearly, simply, and with confidence.'
  },
  {
    id: 'calmnow',
    name: 'CalmNow',
    iconPath: '/images/apps/calmnow.png',
    screenshotPaths: [],
    dataCollection: 'No personal data is collected.',
    usage: 'App operates entirely on-device.',
    thirdParties: 'None.',
    description: 'A mindfulness and meditation app designed for instant relief.'
  },
  {
    id: 'betterthanbetter',
    name: 'Better Than Better',
    iconPath: '/images/apps/betterthanbetter.png',
    screenshotPaths: [],
    dataCollection: 'No personal information is collected.',
    usage: 'Self-help content accessed without accounts.',
    thirdParties: 'None.',
    description: 'Your companion for continuous self-improvement and growth.'
  },
  {
    id: 'wisdomroot',
    name: 'Wisdom Root',
    iconPath: '/images/apps/wisdomroot.png',
    screenshotPaths: [],
    dataCollection: 'No personal or sensitive data collected.',
    usage: 'Educational and reflection content only.',
    thirdParties: 'None.',
    description: 'Deep dives into historical and philosophical wisdom.'
  },
  {
    id: 'fixit',
    name: 'Fix It',
    iconPath: '/images/apps/fixit.png',
    screenshotPaths: [],
    dataCollection: 'No personal data collected.',
    usage: 'App functions without user accounts.',
    thirdParties: 'None.',
    description: 'Practical solutions and checklists for everyday tasks.'
  },
  {
    id: 'temporun',
    name: 'Tempo Run',
    iconPath: '/images/apps/TempoRunLogo.png',
    screenshotPaths: [],
    dataCollection: 'No personal data collected.',
    usage: 'App runs without tracking or accounts.',
    thirdParties: 'None.',
    description: 'Rhythm-based running companion for optimal pacing.'
  },
  {
    id: 'wordwell',
    name: 'WordWell',
    iconPath: '/images/apps/WordWell.png',
    screenshotPaths: [],
    dataCollection: 'No personal data collected.',
    usage: 'App works without accounts or cloud sync.',
    thirdParties: 'None.',
    description: 'A biblical twist on the classic word guessing game. Guess the 5-letter word from the Bible.'
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

export const LEGAL_PRIVACY_POLICY: LegalDocument = {
  title: 'Official Privacy Policy',
  summary: 'This page contains the full legal privacy policy governing MatchlessWorks applications and related support experiences.',
  version: "2026.1.1",
  version: "2026.2.0",
  lastUpdated: "September 24, 2026",
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
  ],
  acknowledgment: 'By using MatchlessWorks applications, you acknowledge that you have read and understood this Privacy Policy.'
};

export const LEGAL_TERMS_OF_USE: LegalDocument = {
  title: 'Terms of Use',
  summary: 'Welcome to MatchlessWorks. These Terms of Use govern your access to and use of MatchlessWorks applications, websites, services, content, and products.',
  version: '2026.1.1',
  lastUpdated: 'July 3, 2026',
  introParagraphs: [
    'Welcome to MatchlessWorks. These Terms of Use ("Terms") govern your access to and use of applications, websites, services, content, and products provided by MatchlessWorks ("Company," "we," "our," or "us"), including but not limited to Gentle Steps, Better Than Better, Tempo Run, Teach Me the Bible, Wisdom Root, Fix It, and any other current or future applications developed by MatchlessWorks (collectively, the "Services").',
    'By downloading, accessing, or using any of our Services, you agree to be bound by these Terms. If you do not agree to these Terms, do not use our Services.'
  ],
  sections: [
    {
      title: '1. Eligibility',
      paragraphs: [
        'You must be at least 13 years old to use our Services unless otherwise permitted by applicable law and under the supervision of a parent or legal guardian.',
        'By using the Services, you represent and warrant that you have the legal capacity to enter into this agreement.'
      ]
    },
    {
      title: '2. License to Use the Services',
      paragraphs: [
        'Subject to these Terms, MatchlessWorks grants you a limited, non-exclusive, non-transferable, revocable license to access and use the Services for personal, non-commercial purposes.',
        'You may not:'
      ],
      bullets: [
        'Copy, modify, distribute, sell, or lease any part of the Services.',
        'Reverse engineer, decompile, or attempt to extract source code.',
        'Use the Services for unlawful purposes.',
        'Interfere with the security or operation of the Services.'
      ]
    },
    {
      title: '3. User Accounts',
      paragraphs: [
        'Some Services may require account registration.',
        'You agree to:'
      ],
      bullets: [
        'Provide accurate and complete information.',
        'Maintain the confidentiality of your login credentials.',
        'Notify us immediately of unauthorized access to your account.'
      ]
    },
    {
      title: '4. Subscriptions and Payments',
      paragraphs: [
        'Certain features may be offered through paid subscriptions.',
        'If you purchase a subscription through the Apple App Store:'
      ],
      bullets: [
        'Payment will be charged to your Apple ID account at confirmation of purchase.',
        'Subscriptions automatically renew unless canceled at least 24 hours before the end of the current billing period.',
        'Your account will be charged for renewal within 24 hours before the end of the current billing period.',
        'You may manage or cancel subscriptions through your Apple Account Settings.'
      ]
    },
    {
      title: '5. Intellectual Property',
      paragraphs: [
        'All content, software, graphics, logos, text, audio, video, designs, and other materials available through the Services are owned by MatchlessWorks or its licensors and are protected by copyright, trademark, and other intellectual property laws.',
        'Nothing in these Terms transfers ownership rights to users.'
      ]
    },
    {
      title: '6. User Content',
      paragraphs: [
        'Where applicable, users may submit comments, reviews, messages, or other content.',
        'By submitting content, you grant MatchlessWorks a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, publish, and display such content solely for operating and improving the Services.',
        'You represent that:'
      ],
      bullets: [
        'You own or have rights to submit the content.',
        'The content does not violate any law or third-party rights.',
        'The content is not harmful, offensive, fraudulent, or misleading.'
      ]
    },
    {
      title: '7. Educational and Informational Purposes',
      paragraphs: [
        'Many MatchlessWorks Services provide educational, informational, motivational, wellness, parenting, fitness, spiritual, or self-improvement content.',
        'All information is provided for general informational purposes only.',
        'Users should independently evaluate information and seek qualified professional advice when appropriate.'
      ]
    },
    {
      title: '8. Parenting Content Disclaimer',
      paragraphs: [
        'Applications such as Gentle Steps may provide parenting tips, developmental guidance, educational materials, and informational resources.',
        'Such information:'
      ],
      bullets: [
        'Is provided for educational purposes only.',
        'Does not constitute medical, psychological, legal, or professional advice.',
        'Should not replace consultation with qualified healthcare providers or other professionals.'
      ]
    },
    {
      title: '9. Health and Fitness Disclaimer',
      paragraphs: [
        'Applications such as Tempo Run and wellness-related Services may provide exercise recommendations, fitness guidance, motivational content, or wellness information.',
        'You acknowledge that:'
      ],
      bullets: [
        'Physical activity involves inherent risks.',
        'You should consult a physician before beginning any exercise program.',
        'Participation in fitness activities is at your own risk.'
      ]
    },
    {
      title: '10. Mental Wellness Disclaimer',
      paragraphs: [
        'Applications may include content relating to emotional well-being, personal growth, stress management, or mental wellness.',
        'The Services:'
      ],
      bullets: [
        'Are not medical devices.',
        'Are not intended to diagnose, treat, cure, or prevent any disease or mental health condition.',
        'Do not replace professional medical, psychiatric, psychological, or counseling services.'
      ]
    },
    {
      title: '11. Faith-Based Content Disclaimer',
      paragraphs: [
        'Applications such as Teach Me the Bible may contain biblical teachings, devotionals, commentary, educational materials, and faith-based content.',
        'Such content is intended for educational and spiritual purposes only and reflects interpretations that may vary among individuals, churches, and denominations.',
        'Users are encouraged to conduct their own study and seek guidance from trusted spiritual leaders as desired.'
      ]
    },
    {
      title: '12. Privacy',
      paragraphs: [
        'Your use of the Services is also governed by our Privacy Policy, which is incorporated into these Terms by reference.'
      ]
    },
    {
      title: '13. Third-Party Services',
      paragraphs: [
        'The Services may contain links to third-party websites, products, or services.',
        'We do not control or endorse third-party content and are not responsible for their practices, policies, or content.',
        'Use of third-party services is at your own risk.'
      ]
    },
    {
      title: '14. Disclaimer of Warranties',
      paragraphs: [
        'THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE."',
        'TO THE MAXIMUM EXTENT PERMITTED BY LAW, MATCHLESSWORKS DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND ACCURACY.',
        'WE DO NOT GUARANTEE THAT THE SERVICES WILL BE ERROR-FREE, SECURE, OR UNINTERRUPTED.'
      ]
    },
    {
      title: '15. Limitation of Liability',
      paragraphs: [
        'TO THE MAXIMUM EXTENT PERMITTED BY LAW, MATCHLESSWORKS AND ITS OWNERS, EMPLOYEES, CONTRACTORS, AFFILIATES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES ARISING FROM OR RELATED TO YOUR USE OF THE SERVICES.',
        'OUR TOTAL LIABILITY FOR ANY CLAIM SHALL NOT EXCEED THE AMOUNT YOU PAID TO USE THE APPLICABLE SERVICE DURING THE TWELVE MONTHS PRECEDING THE CLAIM.'
      ]
    },
    {
      title: '16. Indemnification',
      paragraphs: [
        'You agree to defend, indemnify, and hold harmless MatchlessWorks and its affiliates from claims, liabilities, damages, losses, and expenses arising from:'
      ],
      bullets: [
        'Your use of the Services.',
        'Your violation of these Terms.',
        'Your violation of any law or third-party rights.'
      ]
    },
    {
      title: '17. Suspension and Termination',
      paragraphs: [
        'We may suspend or terminate access to the Services at any time if we reasonably believe a user has violated these Terms or engaged in conduct that could harm the Services, other users, or MatchlessWorks.'
      ]
    },
    {
      title: '18. Changes to the Terms',
      paragraphs: [
        'We may update these Terms from time to time.',
        'Updated Terms become effective upon posting. Continued use of the Services after changes are posted constitutes acceptance of the revised Terms.'
      ]
    },
    {
      title: '19. Governing Law',
      paragraphs: [
        'These Terms shall be governed by and construed in accordance with the laws of the State of South Carolina, without regard to conflict of law principles.',
        'Any legal action arising from these Terms shall be brought in the courts located within South Carolina, and you consent to the jurisdiction of those courts.'
      ]
    },
    {
      title: '20. Contact Information',
      paragraphs: [
        'MatchlessWorks',
        'Website: MatchlessWorks.com',
        'Email: matchlessworks.com@gmail.com',
        'If you have questions regarding these Terms, please contact us using the information above.'
      ]
    },
    {
      title: '21. Apple App Store Additional Terms',
      paragraphs: [
        'If you access the Services through Apple\'s App Store, you acknowledge that:'
      ],
      bullets: [
        'These Terms are between you and MatchlessWorks, not Apple.',
        'Apple is not responsible for the Services or their content.',
        'Apple has no obligation to provide maintenance or support services.',
        'Apple is a third-party beneficiary of these Terms and may enforce them against you.',
        'Your use of the Services must comply with applicable App Store Terms and Conditions.'
      ]
    }
  ],
  acknowledgment: 'By using the Services, you acknowledge that you have read, understood, and agree to these Terms of Use.'
};

export const LEGAL_DATA_DELETION_POLICY: LegalDocument = {
  title: 'Data Deletion Policy',
  summary: 'This page explains how MatchlessWorks handles deletion requests and what steps users can take to remove any locally stored app data.',
  version: '2026.1.0',
  lastUpdated: 'July 1, 2026',
  sections: [
    {
      title: '1. Server-Side Data',
      content: 'MatchlessWorks does not maintain cloud accounts or server-side databases containing personal user data for the apps listed on this site. As a result, there is generally no account record or hosted personal profile for us to delete.'
    },
    {
      title: '2. Local Device Data',
      content: 'Any progress, preferences, or content created while using our apps is stored locally on your device. You remain in control of that information because it is not transferred to MatchlessWorks-operated servers.'
    },
    {
      title: '3. How to Delete Local Data',
      content: 'To remove locally stored app data, uninstall the relevant application from your device. On most operating systems, uninstalling the app removes its sandboxed storage and associated local files.'
    },
    {
      title: '4. Special Requests',
      content: 'If you believe a MatchlessWorks product has handled data in a way that is inconsistent with this policy, contact matchlessworks.com@gmail.com with the app name, device platform, and a description of the issue so we can investigate.'
    },
    {
      title: '5. Policy Updates',
      content: 'We may revise this Data Deletion Policy when product behavior or legal requirements change. The latest version will always be published on this page.'
    }
  ],
  acknowledgment: 'By using MatchlessWorks applications, you acknowledge that you understand how local data removal works under this Data Deletion Policy.'
};
