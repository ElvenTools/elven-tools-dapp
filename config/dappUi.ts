// This configuration file keeps all UI constants and settings
// Specific to the minter dapp use case, these aren't important when you want to build something custom
// Added in one place for convenience

// Your Dapp hostname example: https://www.mydapp.com it should come from env vars
export const dappHostname = process.env.NEXT_PUBLIC_DAPP_HOST;

// HTML metata and og tags, default values for MetaHead.tsx component
export const defaultMetaTags = {
  title: 'Community-driven collectible NFT DAO on MultiversX',
  description:
    "MultiversX collectible NFT DAO driven by the community. The community makes all decisions. The MxGhosts collection is an NFT for governance. Vote and contribute to the project's progress. Get a Mr Ghost and join the clan.",
  shortname: 'GhostVerse',
  image: `${dappHostname}/social.png`,
};

// FAQ section data
export const faq = [
  {
    question: 'What exactly are NFTs, and why should you invest in them?',
    answer:
      'NFTs are fascinating. NFT stands for Non-Fungible Token, and they are one-of-a-kind digital assets. Because an NFT can only have one owner at a time, purchasing an NFT grants you exclusive ownership of a digital asset. The rarity of an item heightens its allure. NFTs provide a one-of-a-kind opportunity to participate in a very promising market system with limitless potential.',
  },
  {
    question: 'What is Mr Ghost, and why do I need at least one?',
    answer:
      "Mr Ghost is a collectible, one-of-a-kind, original, and lovely NFT from the MxGhosts collection on MultiversX. Mr Ghost is the governance token of the GhostVerse DAO, and its total number is 8658! Mr Ghost makes you a shareholder of the GhostVerse and a key player in the organization's strategic decisions on Superciety. 1 ghost, 1 voice!",
  },
  {
    question: 'Why should we use the MultiversX network and the EGLD token?',
    answer:
      "MultiversX is a high-speed blockchain that aims to provide scalability, efficiency, and security. It can perform 15,000 transactions per second for a transaction fee of 0.001. The MultiversX blockchain's native token, EGLD, is used to reward validators and pay network fees. MultiversX is built for the new Internet economy and decentralized WEB3 applications.",
  },
  {
    question: 'Why should we start a node on the MultiversX network?',
    answer:
      "Launching a node and becoming a staking provider is the way. A node will always keep running, no matter what. In Asia, there is only 6 percent of MultiversX nodes in activity. We are the perfect organization to be a part of the security of the MultiversX network in Asia. We're currently 2350 EGLD short of this goal. 7290 NFTs are still to be minted. That means we'll need to hit a median mint price of 0.32 EGLD.",
  },
];

// Roadmap section data
export const roadmap = [
  {
    title: 'Done',
    points: [
      '✓ Create the most terrifying OG PFP DAO NFT collection in MultiversX history',
      '✓ Build an organic community populated by OGs',
      '✓ Collaborate with the largest builders',
      '✓ Launch Open Source dApp',
      '✓ Airdrop the community',
      '✓ Sold out Drop #1 & #2',
      '✓ Launch Monthly & Weekly Rewards',
      '✓ Airdrop Collector Vox01 NFT',
      '✓ Get On-chain voting system',
    ],
  },
  {
    title: 'In Progress',
    points: [
      '↻ Build a more amazing community',
      '↻ Make our long-term partnerships stronger',
      '↻ Airdrop Collector Vox02 NFT',
      '↻ Launch Passive Income v1',
      '↻ Launch Open Source dApp v2',
      '↻ Passive income dashboard',
      '↻ Collection rarity',
      '↻ Produce merch',
      '↻ Have fun',
    ],
  },
  {
    title: 'Planned',
    points: [
      'Build the most amazing community',
      'Set up the multi-sig wallet',
      'Decentralize more',
      'Sold out Drop #3 to #13',
      'Run a validator node',
      'Lifetime passive income',
      'Build more',
    ],
  },
];

export const team = [
  {
    name: 'Jeremy',
    bio: 'Founder',
    imageUrl:
      '/media/ghostverse-jeremy-mr-ghost-mxghosts-nft-dao-multiversx-blockchain.webp',
    socialMediaLinks: ['https://www.linkedin.com/in/jeremy-douchamps/'],
  },
  {
    name: 'Louis',
    bio: 'Artist',
    imageUrl:
      '/media/ghostverse-louis-mr-ghost-mxghosts-nft-dao-multiversx-blockchain.webp',
    socialMediaLinks: ['https://www.instagram.com/louislanne/'],
  },
  {
    name: 'Sergiu',
    bio: 'DevOps',
    imageUrl:
      '/media/ghostverse-sergiu-mr-ghost-mxghosts-nft-dao-multiversx-blockchain.webp',
    socialMediaLinks: [
      'https://www.linkedin.com/in/sergiupopa89/?originalSubdomain=ro',
    ],
  },
  {
    name: 'Damien',
    bio: 'Smart Contract Dev',
    imageUrl:
      '/media/ghostverse-damien-mr-ghost-mxghosts-nft-dao-multiversx-blockchain.webp',
    socialMediaLinks: ['https://github.com/damienen'],
  },
  {
    name: 'Nati',
    bio: 'Marketer',
    imageUrl:
      '/media/ghostverse-nati-mr-ghost-mxghosts-nft-dao-multiversx-blockchain.webp',
    socialMediaLinks: ['https://www.linkedin.com/in/nati-douchamps-1151a8144/'],
  },
  {
    name: 'Albert',
    bio: 'SEO Expert',
    imageUrl:
      '/media/ghostverse-albert-mr-ghost-mxghosts-nft-dao-multiversx-blockchain.webp',
    socialMediaLinks: ['https://www.linkedin.com/in/albertlanne/'],
  },
  {
    name: 'Kylian',
    bio: 'Community manager',
    imageUrl:
      '/media/ghostverse-kylian-mr-ghost-mxghosts-nft-dao-multiversx-blockchain.webp',
    socialMediaLinks: ['https://twitter.com/timkyl2203'],
  },
  {
    name: 'Thip',
    bio: '3D Artist',
    imageUrl:
      '/media/ghostverse-thip-mr-ghost-mxghosts-nft-dao-multiversx-blockchain.webp',
    socialMediaLinks: ['https://www.artstation.com/ninjathip'],
  },
];

export const earn = [
  {
    name: 'Passive Income',
    bio: 'Hold and earn. 100 percent of the EGLD staking revenue is redistributed to holders. Get more than 5 MxGhosts and earn EGLD automatically and for life.',
    imageUrl:
      '/media/ghostverse-passive-income-mr-ghost-mxghosts-nft-dao-multiversx-blockchain.webp',
  },
  {
    name: 'Weekly Rewards',
    bio: 'Every monday we organize weekly rewards on Twitter. A trait is picked and the winners share the prize pool!',
    imageUrl:
      '/media/ghostverse-weekly-rewards-mr-ghost-mxghosts-nft-dao-multiversx-blockchain.webp',
  },
  {
    name: 'Monthly Rewards',
    bio: 'Win a free NFT mint each month by using your Mr. Ghost NFT as your avatar in Maiar app. Entries are limited and already filled up.',
    imageUrl:
      '/media/ghostverse-monthly-rewards-mr-ghost-mxghosts-nft-dao-multiversx-blockchain.webp',
  },
];

export const secondary = [
  {
    name: 'Xoxno',
    imageUrl: '/media/logo-xoxno.webp',
    socialMediaLinks: ['https://xoxno.com/collection/MRG-1c3ba4'],
  },
  {
    name: 'FrameIt',
    imageUrl: '/media/logo-frameit.webp',
    socialMediaLinks: ['https://www.frameit.gg/marketplace/MRG-1c3ba4'],
  },
  {
    name: 'Deadrare',
    imageUrl: '/media/logo-deadrare.webp',
    socialMediaLinks: ['https://deadrare.io/collection/MRG-1c3ba4'],
  },
  {
    name: 'MultiversX NFT Swap',
    imageUrl: '/media/logo-multiversx-nft-swap.webp',
    socialMediaLinks: ['https://elrondnftswap.com/collection/MRG-1c3ba4'],
  },
];
