import { useRouter } from 'next/router';
import { useCallback, FC } from 'react';
import { ActionButtonXL } from './ActionButtonXL';
import { Image } from '@chakra-ui/react';

interface MainMenuButtonsProps {
  enabled: string[];
}

export const MainMenuButtons: FC<MainMenuButtonsProps> = ({ enabled }) => {
  const router = useRouter();

  const handleMintClick = useCallback(() => {
    router.push('/mxghosts');
  }, [router]);
  const handlePlayAndEarnClick = useCallback(() => {
    router.push('/play-and-earn');
  }, [router]);
  const handleClanClick = useCallback(() => {
    router.push('/clan');
  }, [router]);
  const handleDaoClick = useCallback(() => {
    router.push('/dao');
  }, [router]);
  const handleRoadmapClick = useCallback(() => {
    router.push('/roadmap');
  }, [router]);
  const handleTeamClick = useCallback(() => {
    router.push('/team');
  }, [router]);
  const handleFaqClick = useCallback(() => {
    router.push('/faq');
  }, [router]);
  const handleGreenGardenClick = useCallback(() => {
    router.push('https://green.gd/');
  }, [router]);
  const handleLightpaperClick = useCallback(() => {
    router.push('https://docs.ghostverse.org/');
  }, [router]);
  const handleWalletClick = useCallback(() => {
    router.push('/wallet');
  }, [router]);
  const handleGokaiWalletClick = useCallback(() => {
    router.push('https://explorer.multiversx.com/accounts/erd1xuf43l9v4d3lxhfg9ehzh244592gf2an7hmuw9h84gma7j8fdsws60rrqn');
  }, [router]);
  const handleGhostverseWalletClick = useCallback(() => {
    router.push('https://explorer.multiversx.com/accounts/erd1wwww2pa5hkxt6sn7ghf6uzglak2npe67q5k6tzjxu2s9ah25sxys77w0zc');
  }, [router]);
  const handleVoteClick = useCallback(() => {
    router.push('https://peerme.io/peerings/ghostverse-dao');
  }, [router]);
  const handleTwitterClick = useCallback(() => {
    router.push('https://twitter.com/GhostVerseOrg');
  }, [router]);
  const handleDiscordClick = useCallback(() => {
    router.push('https://discord.gg/tXSeJfVVnH');
  }, [router]);
  const handleEgldCommunityClick = useCallback(() => {
    router.push('https://egld.community/projects/ghostverse');
  }, [router]);
  const handleKavariiClick = useCallback(() => {
    router.push('https://kavarii.com/c/ghostverse');
  }, [router]);
  const handleBuildersClick = useCallback(() => {
    router.push(
      'https://elrondbuilders.com/projects/view/f09113bb-f129-48dc-8bbd-920159b6ab84'
    );
  }, [router]);
  const handleGithubClick = useCallback(() => {
    router.push('https://github.com/GhostVerseOrg');
  }, [router]);

  return (
    <>
      {enabled.includes('mint') && (
        <ActionButtonXL onClick={handleMintClick}>
          <Image
            boxSize={{ base: '100px', md: '140px' }}
            objectFit="contain"
            my={4}
            src="/media/ghostverse-collect-trade-mr-ghost-mxghosts-nft-dao-multiversx-blockchain.webp"
            alt="GhostVerse collect and trade Mr Ghost MxGhosts NFT DAO MultiversX"
          />
          Collect & Trade
        </ActionButtonXL>
      )}
      {enabled.includes('playandearn') && (
        <ActionButtonXL onClick={handlePlayAndEarnClick}>
          <Image
            boxSize={{ base: '100px', md: '140px' }}
            objectFit="contain"
            my={4}
            src="/media/ghostverse-play-earn-mr-ghost-mxghosts-nft-dao-multiversx-blockchain.webp"
            alt="GhostVerse play and earn Mr Ghost MxGhosts NFT DAO MultiversX"
          />
          Play & Earn
        </ActionButtonXL>
      )}
      {enabled.includes('dao') && (
        <ActionButtonXL onClick={handleDaoClick}>
          <Image
            boxSize={{ base: '100px', md: '140px' }}
            objectFit="contain"
            my={4}
            src="/media/ghostverse-dao-mr-ghost-mxghosts-nft-dao-multiversx-blockchain.webp"
            alt="GhostVerse DAO Mr Ghost MxGhosts NFT DAO MultiversX"
          />
          Dao
        </ActionButtonXL>
      )}
      {enabled.includes('vote') && (
        <ActionButtonXL onClick={handleVoteClick}>
          <Image
            boxSize={{ base: '100px', md: '140px' }}
            objectFit="contain"
            my={4}
            src="/media/ghostverse-vote-mr-ghost-mxghosts-nft-dao-multiversx-blockchain.webp"
            alt="GhostVerse Lightpaper Mr Ghost MxGhosts NFT DAO MultiversX"
          />
          Governance
        </ActionButtonXL>
      )}
      {enabled.includes('wallet') && (
        <ActionButtonXL onClick={handleWalletClick}>
          <Image
            boxSize={{ base: '100px', md: '140px' }}
            objectFit="contain"
            my={4}
            src="/media/ghostverse-wallet-mr-ghost-mxghosts-nft-dao-multiversx-blockchain.webp"
            alt="GhostVerse Lightpaper Mr Ghost MxGhosts NFT DAO MultiversX"
          />
          Wallet
        </ActionButtonXL>
      )}
      {enabled.includes('gokaiwallet') && (
        <ActionButtonXL onClick={handleGokaiWalletClick}>
          <Image
            boxSize={{ base: '100px', md: '140px' }}
            objectFit="contain"
            my={4}
            src="/media/ghostverse-wallet-mr-ghost-mxghosts-nft-dao-multiversx-blockchain.webp"
            alt="GhostVerse Lightpaper Mr Ghost MxGhosts NFT DAO MultiversX"
          />
          Gokai Labs
        </ActionButtonXL>
      )}
      {enabled.includes('ghostversewallet') && (
        <ActionButtonXL onClick={handleGhostverseWalletClick}>
          <Image
            boxSize={{ base: '100px', md: '140px' }}
            objectFit="contain"
            my={4}
            src="/media/ghostverse-wallet-mr-ghost-mxghosts-nft-dao-multiversx-blockchain.webp"
            alt="GhostVerse Lightpaper Mr Ghost MxGhosts NFT DAO MultiversX"
          />
          GhostVerse
        </ActionButtonXL>
      )}
      {enabled.includes('github') && (
        <ActionButtonXL onClick={handleGithubClick}>
          <Image
            boxSize={{ base: '100px', md: '140px' }}
            objectFit="contain"
            my={4}
            src="/media/ghostverse-github-mr-ghost-mxghosts-nft-dao-multiversx-blockchain.webp"
            alt="GhostVerse Github Mr Ghost MxGhosts NFT DAO MultiversX"
          />
          Github
        </ActionButtonXL>
      )}
      {enabled.includes('lightpaper') && (
        <ActionButtonXL onClick={handleLightpaperClick}>
          <Image
            boxSize={{ base: '100px', md: '140px' }}
            objectFit="contain"
            my={4}
            src="/media/ghostverse-lightpaper-mr-ghost-mxghosts-nft-dao-multiversx-blockchain.webp"
            alt="GhostVerse Lightpaper Mr Ghost MxGhosts NFT DAO MultiversX"
          />
          Lightpaper
        </ActionButtonXL>
      )}
      {enabled.includes('roadmap') && (
        <ActionButtonXL onClick={handleRoadmapClick}>
          <Image
            boxSize={{ base: '100px', md: '140px' }}
            objectFit="contain"
            my={4}
            src="/media/ghostverse-roadmap-mr-ghost-mxghosts-nft-dao-multiversx-blockchain.webp"
            alt="GhostVerse roadmap Mr Ghost MxGhosts NFT DAO MultiversX"
          />
          Roadmap
        </ActionButtonXL>
      )}
      {enabled.includes('team') && (
        <ActionButtonXL onClick={handleTeamClick}>
          <Image
            boxSize={{ base: '100px', md: '140px' }}
            objectFit="contain"
            my={4}
            src="/media/ghostverse-team-mr-ghost-mxghosts-nft-dao-multiversx-blockchain.webp"
            alt="GhostVerse team Mr Ghost MxGhosts NFT DAO MultiversX"
          />
          Team
        </ActionButtonXL>
      )}
      {enabled.includes('clan') && (
        <ActionButtonXL onClick={handleClanClick}>
          <Image
            boxSize={{ base: '100px', md: '140px' }}
            objectFit="contain"
            my={4}
            src="/media/ghostverse-clan-mr-ghost-mxghosts-nft-dao-multiversx-blockchain.webp"
            alt="GhostVerse collect and trade Mr Ghost MxGhosts NFT DAO MultiversX"
          />
          Clan
        </ActionButtonXL>
      )}
      {enabled.includes('faq') && (
        <ActionButtonXL onClick={handleFaqClick}>
          <Image
            boxSize={{ base: '100px', md: '140px' }}
            objectFit="contain"
            my={4}
            src="/media/ghostverse-faq-mr-ghost-mxghosts-nft-dao-multiversx-blockchain.webp"
            alt="GhostVerse FAQ Mr Ghost MxGhosts NFT DAO MultiversX"
          />
          Faq
        </ActionButtonXL>
      )}
      {enabled.includes('greengarden') && (
        <ActionButtonXL onClick={handleGreenGardenClick}>
          <Image
            boxSize={{ base: '100px', md: '140px' }}
            objectFit="contain"
            my={4}
            src="/media/ghostverse-greengarden-cannabis-shop-mr-ghost-mxghosts-nft-dao-multiversx-blockchain.png"
            alt="GhostVerse GreenGarden Cannabis Shop Mr Ghost MxGhosts NFT DAO MultiversX"
          />
          GreenGarden
        </ActionButtonXL>
      )}
      {enabled.includes('egldcommunity') && (
        <ActionButtonXL onClick={handleEgldCommunityClick}>
          <Image
            boxSize={{ base: '100px', md: '140px' }}
            objectFit="contain"
            my={4}
            src="/media/ghostverse-egld-community-mr-ghost-mxghosts-nft-dao-multiversx-blockchain.webp"
            alt="GhostVerse EGLD community Mr Ghost MxGhosts NFT DAO MultiversX"
          />
          EGLD Community
        </ActionButtonXL>
      )}
      {enabled.includes('twitter') && (
        <ActionButtonXL onClick={handleTwitterClick}>
          <Image
            boxSize={{ base: '100px', md: '140px' }}
            objectFit="contain"
            my={4}
            src="/media/ghostverse-twitter-mr-ghost-mxghosts-nft-dao-multiversx-blockchain.webp"
            alt="GhostVerse Twitter Mr Ghost MxGhosts NFT DAO MultiversX"
          />
          Twitter
        </ActionButtonXL>
      )}
      {enabled.includes('discord') && (
        <ActionButtonXL onClick={handleDiscordClick}>
          <Image
            boxSize={{ base: '100px', md: '140px' }}
            objectFit="contain"
            my={4}
            src="/media/ghostverse-discord-mr-ghost-mxghosts-nft-dao-multiversx-blockchain.webp"
            alt="GhostVerse Discord Mr Ghost MxGhosts NFT DAO MultiversX"
          />
          Discord
        </ActionButtonXL>
      )}
      {enabled.includes('builders') && (
        <ActionButtonXL onClick={handleBuildersClick}>
          <Image
            boxSize={{ base: '100px', md: '140px' }}
            objectFit="contain"
            my={4}
            src="/media/ghostverse-elrond-builders-mr-ghost-mxghosts-nft-dao-multiversx-blockchain.webp"
            alt="GhostVerse MultiversX Builders Mr Ghost MxGhosts NFT DAO MultiversX"
          />
          Builders
        </ActionButtonXL>
      )}

      {enabled.includes('kavarii') && (
        <ActionButtonXL onClick={handleKavariiClick}>
          <Image
            boxSize={{ base: '100px', md: '140px' }}
            objectFit="contain"
            my={4}
            src="/media/ghostverse-kavarii-mr-ghost-mxghosts-nft-dao-multiversx-blockchain.webp"
            alt="GhostVerse MultiversX Builders Mr Ghost MxGhosts NFT DAO MultiversX"
          />
          Kavarii
        </ActionButtonXL>
      )}
    </>
  );
};
