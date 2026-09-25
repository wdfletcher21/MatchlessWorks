
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

  Ordinary duel and participant records are retained for 90 days. Safety reports and moderation decisions are retained for up to two years. User-created block relationships remain until the associated anonymous account is deleted, and temporary multiplayer bans are removed after expiration. Leaderboard and purchase records may be retained while needed to provide those features, restore purchases, prevent fraud, resolve disputes, comply with legal obligations, and enforce our rules.

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
- MatchlessWorks respects privacy and limits data handling to what each app's disclosed features require.
- Some apps operate entirely on-device, while others may use online services and store limited data remotely.
- Privacy and deletion answers must reflect the specific app information above; never claim that every MatchlessWorks app is entirely on-device or has no remotely stored data.

Contact Info: matchlessworks.com@gmail.com

Guidelines:
1. Be concise, professional, and friendly.
2. If a user asks about a specific app, refer to the data above.
3. Distinguish between locally stored data and information processed by online services.
4. For deletion questions, explain the app-specific options and direct users to matchlessworks.com@gmail.com when remotely stored information may be involved.
`;

export const LEGAL_PRIVACY_POLICY: LegalDocument = {
  title: 'Official Privacy Policy',
  summary: 'This page contains the full legal privacy policy governing MatchlessWorks applications and related support experiences.',
  version: '2026.3.1',
  lastUpdated: 'September 25, 2026',
  sections: [
    {
      title: "1. Introduction",
      content: "This Privacy Policy describes how MatchlessWorks ('we', 'us', or 'our') handles information in relation to our mobile applications available on the Apple App Store. We take your privacy seriously and have designed our apps to function with a 'Privacy-First' architecture."
    },
    {
      title: '2. Information We Collect',
      content: "The information handled by MatchlessWorks depends on the application, its features, and the choices a user makes. Some applications operate entirely on the user's device, while others may use online services. Depending on the app, information may include account or anonymous identifiers, user-selected display names, app activity and progress, user-generated content, multiplayer or shared-feature activity, support and safety communications, purchase and entitlement information, and technical service information such as device type, operating system, application version, network address, request time, and diagnostic details. Each application's page identifies the categories relevant to that app. We do not sell personal information and do not use personal information for cross-app advertising or tracking unless an app-specific notice expressly states otherwise and any legally required consent has been obtained."
    },
    {
      title: '3. Local and Online Data Processing',
      content: "An application may store preferences, progress, content, and other feature data locally on a user's device. Apps that provide online, shared, account-based, purchase, artificial-intelligence, support, or safety features may transmit and store the information reasonably necessary to provide and protect those features. The applicable app-specific privacy statement explains whether information remains on-device, is processed remotely, or both."
    },
    {
      title: "4. Third-Party Services",
      content: "MatchlessWorks applications may use third-party service providers when necessary for an application's disclosed features. These may include app-store and payment providers, hosting and database providers, authentication services, purchase-management services, artificial-intelligence services, analytics or diagnostics providers, and customer-support or safety tools. Providers process information under their own terms and privacy practices and may process information in countries other than the user's country. Each app-specific statement identifies the providers used by that app and their purposes. Payment-card details are generally processed by the applicable app store or payment provider and are not provided directly to MatchlessWorks."
    },
    {
      title: "5. Children's Privacy",
      content: "Our applications are not directed to children unless an app-specific listing expressly states otherwise. We do not knowingly collect personal information from children in a manner prohibited by applicable law. Online identifiers, display names, app activity, user-generated content, shared-feature records, and purchase information may constitute personal information under some laws even when a legal name or email address is not requested. Parents or guardians who believe a child has provided personal information may contact matchlessworks.com@gmail.com so that we can investigate and, where appropriate, delete or restrict the information."
    },
    {
      title: "6. Data Retention and Deletion",
      content: "We retain information only for as long as reasonably necessary to provide the relevant feature, maintain security, prevent fraud, resolve disputes, comply with legal obligations, and enforce our agreements. Retention periods vary by app and data category and are described in the applicable app-specific statement. Uninstalling an app generally removes its locally stored sandboxed data, although information stored in device backups or managed by the operating system may remain subject to those systems' settings. Users may request help with remotely stored information by contacting matchlessworks.com@gmail.com and providing the app name plus enough information to locate and verify the relevant record. We may be unable to associate a request with records that use only anonymous identifiers unless the requester can provide the applicable identifier or matching record details."
    },
    
    {
      title: "7. Contact Information",
      content: 'Privacy, safety, moderation, and deletion requests may be sent to matchlessworks.com@gmail.com.'
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
  summary: 'This page explains how MatchlessWorks handles deletion requests for local and remotely stored application data.',
  version: '2026.2.1',
  lastUpdated: 'September 25, 2026',
  sections: [
    {
      title: '1. Application-Specific Data',
      content: "Data practices differ among MatchlessWorks applications. Some apps store data only on the user's device, while others use online services for features such as accounts, synchronization, shared experiences, purchases, support, safety, or generated content. Review the relevant application's privacy statement to learn what it processes and where that information is stored."
    },
    {
      title: '2. Local Device Data',
      content: 'Preferences, progress, content, and other feature data may be stored locally on your device. Uninstalling the relevant application generally removes its sandboxed local storage and associated local files, although information in device backups or managed by the operating system may remain subject to those systems and settings.'
    },
    {
      title: '3. Remotely Stored Data and Retention',
      content: "Apps with online features may store limited information with MatchlessWorks or its service providers. We retain that information only for as long as reasonably necessary to provide the feature, maintain security, prevent fraud, resolve disputes, comply with legal obligations, and enforce our agreements. App-specific privacy statements describe applicable categories and retention periods."
    },
    {
      title: '4. Requesting Deletion of Remote Data',
      content: 'Contact matchlessworks.com@gmail.com with the app name and enough information to locate and verify the relevant record, such as an account address, display name, purchase record, transaction reference, or app-generated identifier. We may be unable to associate a request with records that use only anonymous identifiers unless the requester can provide the applicable identifier or matching record details. We may also retain limited information where required for security, fraud prevention, dispute resolution, or legal compliance.'
    },
    {
      title: '5. How to Delete Local Data',
      content: 'To remove locally stored app data, uninstall the relevant application from your device. On most operating systems, uninstalling the app removes its sandboxed storage and associated local files.'
    },
    {
      title: '6. Policy Updates',
      content: 'We may revise this Data Deletion Policy when product behavior or legal requirements change. The latest version will always be published on this page.'
    }
  ],
  acknowledgment: 'By using MatchlessWorks applications, you acknowledge that you understand how local data removal works under this Data Deletion Policy.'
};
