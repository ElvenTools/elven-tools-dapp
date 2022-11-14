// This configuration file keeps all UI constants and settings
// Specific to the minter dapp use case, these aren't important when you want to build something custom
// Added in one place for convenience

// Your Dapp hostname example: https://www.mydapp.com it should come from env vars
export const dappHostname = process.env.NEXT_PUBLIC_DAPP_HOST;

// HTML metata and og tags, default values for MetaHead.tsx component
export const defaultMetaTags = {
  title: 'winnft Connect',
  description:
    'Open source Dapp template for the Elven Tools and Elrond blockchain. The actual working example is connected to the Elven Tools smart contract deployed on the Elrond blockchain devnet!',
  image: `${dappHostname}/og-image.png`,
};

// FAQ section data
export const faq = [
  {
    question: 'What is TigerDime $TDM ?',
    answer:
      'We are introducing the TigerDime token ($TDM) as a currency that will enhance the capabilities of our platform.The currency will bring many advantages to its holder.Acces to exclusive contents or rewards are just a few of the goods you can purchase with $TDM',
  },
  {
    question: 'Tokenomics for $TDM',
    points: [
      'Total&Max Supply: 1,000,000,000', 
      'Sale/Presale: 300,000,000 ',
      'Rewards: 200,000,000 ',
      'Dex Liquidity/Future Listings: 180,000,000 ',
      'Marketing/Growth: 100,000,000 ',
      'Metabonding: 100,000,000 ',
      'Team: 120,000,000'
    ]
  },
  {
    question:
      'Whitepaper',
    answer:
      'Read our more detailed Tokenomics and WhitePaper here',
    link: 'https://www.google.com/'
  },
  {
    question: 'Presale Phases',
    answer:
      'The Elven Tools is an open-source toolset including the CLI tool, Smart Contract for handling the NFT collections, and this dapp template. You can, of course, use each tool separately. But the CLI helps with smart contract deployments and the setup process. You can also interact with the smart contract using the CLI or even use it as a buyer.',
  },
];

// Roadmap section data
export const roadmap = [
  {
    title: 'Q2 2022',
    points: [
      ' ✔️erdjs 10 integration and refactoring',
      'UI automated tests',
      'Ledger auth implementation',
      'Better UI and more useful hooks',
    ],
  },
  {
    title: 'Q3 2022',
    points: [
      'More usefull UI components',
      'More helpful docs and videos',
      'More functionality for logged in user',
      'Blog feature implementation',
    ],
  },
  {
    title: 'Q4 2022',
    points: [
      'Backend cache (Redis?)',
      'Image optimization (Cloudinary?)',
      '...sky is the limit!',
    ],
  },
];

export const team = [
  {
    name: 'John Doe',
    bio: 'Web designer and artist',
    imageUrl: '/john.svg',
    socialMediaLinks: [
      'https://www.twitter.com',
      'https://www.behance.net',
      'https://www.dribbble.com',
    ],
  },
  {
    name: 'Mark Doe',
    bio: 'Smart Contract programmer',
    imageUrl: '/mark.svg',
    socialMediaLinks: ['https://www.twitter.com', 'https://www.github.com'],
  },
  {
    name: 'Jack Doe',
    bio: 'Community relations and marketing',
    imageUrl: '/jack.svg',
    socialMediaLinks: [
      'https://www.twitter.com',
      'https://www.discord.com',
      'https://www.telegram.me',
      'https://www.medium.com',
    ],
  },
];

export const nftcollection = [
  {
    title: 'first collection',
    description: 'To be able to mint you have to be logged in to be able to mint. Remember that it will mint only on the devent. If you want to do that, you need to connect using one of the methods and the devnet address with some xEGLD funds.',
    image: '/img.gif'
  },
  {
    title: 'second collection',
    description: '2 collections of our platform',
    image: '/img.gif'
  },
];