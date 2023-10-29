// This configuration file keeps all UI constants and settings
// Specific to the minter dapp use case, these aren't important when you want to build something custom
// Added in one place for convenience

// Your Dapp hostname example: https://www.mydapp.com it should come from env vars
export const dappHostname = process.env.NEXT_PUBLIC_DAPP_HOST;

// HTML metata and og tags, default values for MetaHead.tsx component
export const defaultMetaTags = {
  title: 'Elven Tools NFT minter dapp demo - MultiversX blockchain',
  description:
    'Open source Dapp template for the Elven Tools and MultiversX blockchain. The actual working example is connected to the Elven Tools smart contract deployed on the MultiversX blockchain devnet!',
  image: `${dappHostname}/og-image.png`,
};

// FAQ section data
export const faq = [
  {
    question: 'What is an ESDT on MultiversX?',
    answer:
      'ESDT stands for MultiversX Standard Digital Token. Custom tokens at native speed and scalability, without ERC20. The MultiversX network natively supports the issuance of custom tokens, without the need for contracts such as ERC20, but addressing the same use-cases. And due to the native in-protocol support, transactions with custom tokens do not require the VM at all. In effect, this means that custom tokens are as fast and as scalable as the native EGLD token itself.',
  },
  {
    question: 'What is an NFT on MultiversX?',
    answer:
      'The MultiversX protocol introduces native NFT support by adding metadata and attributes on top of the already existing ESDT. This way, one can issue a semi-fungible token or a non-fungible token which is quite similar to an ESDT, but has a few more attributes, as well as an assignable URI. Once owning a quantity of a NFT/SFT, users will have their data store directly under their account, inside the trie.',
  },
  {
    question:
      'Why knowing the collection ticker and minter smart contract is essential?',
    answer:
      'It is crucial because these two prove that the NFTs come from a verified source. The NFT project should always show the collection ticker and minter smart contract to gain trust.',
  },
  {
    question: 'What is Elven Tools?',
    answer:
      'The Elven Tools is an open-source toolset including the CLI tool, Smart Contract for handling the NFT collections, and this dapp template. You can, of course, use each tool separately. But the CLI helps with smart contract deployments and the setup process. You can also interact with the smart contract using the CLI or even use it as a buyer.',
  },
];

// Roadmap section data
export const roadmap = [
  {
    title: 'Q1 2023',
    points: [
      'MultiversX rebranding and dependecies replacement',
      'Nextjs configuration improvements',
      'Better UI and more functionality',
    ],
  },
  {
    title: 'Q2 2023',
    points: [
      'More helpful docs and videos',
      'More functionality for logged in user',
      'Automated tests',
    ],
  },
  {
    title: 'Q3 2023',
    points: [
      'Blog feature implementation',
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
      'https://www.x.com',
      'https://www.behance.net',
      'https://www.dribbble.com',
    ],
  },
  {
    name: 'Mark Doe',
    bio: 'Smart Contract programmer',
    imageUrl: '/mark.svg',
    socialMediaLinks: ['https://www.x.com', 'https://www.github.com'],
  },
  {
    name: 'Jack Doe',
    bio: 'Community relations and marketing',
    imageUrl: '/jack.svg',
    socialMediaLinks: [
      'https://www.x.com',
      'https://www.discord.com',
      'https://www.telegram.me',
      'https://www.medium.com',
    ],
  },
];
