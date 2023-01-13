/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Text, useBreakpointValue } from '@chakra-ui/react';
import { useCallback, useEffect } from 'react';
import { Address } from '@elrondnetwork/erdjs';
import { SCQueryType } from '../hooks/interaction/useScQuery';
import { useElvenScQuery } from '../hooks/interaction/elvenScHooks/useElvenScQuery';
import { MintForm } from './MintForm';
import { Authenticated } from './core/Authenticated';
import { useAccount } from '../hooks/auth/useAccount';
import { LoginModalButton } from './core/LoginModalButton';
import { NFTLeftToMint } from './NFTLeftToMint';
import { NFTAllowlistEnabled } from './NFTAllowlistEnabled';
import { NFTMintedAlready } from './NFTMintedAlready';
import { NFTLeftToMintPerAddress } from './NFTLeftToMintPerAddress';
import { motion } from 'framer-motion';

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

// TODO: Prepare separate components for the segments here
// TODO: use Valtio for global smart contract config state + dispatchers to be able to trigger changes from each component

export const MintHero = () => {
  const { address } = useAccount();

  const { data: mintingPaused } = useElvenScQuery<boolean>({
    funcName: 'isMintingPaused',
    type: SCQueryType.BOOLEAN,
  });

  const { data: dropActive, fetch: refreshDropState } =
    useElvenScQuery<boolean>({
      funcName: 'isDropActive',
      type: SCQueryType.BOOLEAN,
      autoInit: !mintingPaused,
    });

  const {
    data: allowlistEnabled,
    fetch: refreshAllowlistState,
    isLoading: allowlistStateLoading,
  } = useElvenScQuery<boolean>({
    funcName: 'isAllowlistEnabled',
    type: SCQueryType.BOOLEAN,
    autoInit: Boolean(address && !mintingPaused),
  });

  const {
    data: tokensLimitPerAddressTotal,
    fetch: refreshTokensLimitPerAddressTotal,
    isLoading: isLoadingTokensLimitPerAddressTotal,
  } = useElvenScQuery<number>({
    funcName: 'getTokensLimitPerAddressTotal',
    type: SCQueryType.NUMBER,
    autoInit: Boolean(address && !mintingPaused),
  });

  const {
    data: tokensLimitPerAddressPerDrop,
    fetch: refreshTokensLimitPerAddressPerDrop,
    isLoading: tokensLimitPerAddressPerDropLoading,
  } = useElvenScQuery<number>({
    funcName: 'getTokensLimitPerAddressPerDrop',
    type: SCQueryType.NUMBER,
    autoInit: Boolean(address && dropActive),
  });

  const {
    data: totalTokensLeft,
    fetch: refreshTotalTokensLeft,
    isLoading: totalIsLoading,
  } = useElvenScQuery<number>({
    type: SCQueryType.NUMBER,
    funcName: 'getTotalTokensLeft',
  });

  const {
    data: dropData,
    fetch: refreshDropData,
    isLoading: dropIsLoading,
  } = useElvenScQuery<number>({
    type: SCQueryType.NUMBER,
    funcName: 'getDropTokensLeft',
    autoInit: dropActive,
  });

  const {
    data: mintedData,
    fetch: refreshMintedData,
    isLoading: mintedDataLoading,
  } = useElvenScQuery<number>({
    type: SCQueryType.NUMBER,
    funcName: 'getMintedPerAddressTotal',
    args: address ? [Address.fromBech32(address)?.hex()] : [],
    autoInit: Boolean(address && !mintingPaused),
  });

  const { data: mintedPerDropData, fetch: refreshMintedPerDropData } =
    useElvenScQuery<number>({
      type: SCQueryType.NUMBER,
      funcName: 'getMintedPerAddressPerDrop',
      args: address ? [Address.fromBech32(address)?.hex()] : [],
      autoInit: Boolean(address && dropActive),
    });

  const {
    data: allowlistCheckData,
    fetch: refreshAllowlistCheckData,
    isLoading: allowlistCheckLoading,
  } = useElvenScQuery<number>({
    type: SCQueryType.NUMBER,
    funcName: 'getAllowlistAddressCheck',
    args: address ? [Address.fromBech32(address)?.hex()] : [],
    autoInit: Boolean(address && allowlistEnabled),
  });

  useEffect(() => {
    if (!mintingPaused) {
      refreshTotalTokensLeft();
    }
  }, [mintingPaused]);

  useEffect(() => {
    if (address) {
      refreshMintedData();
      refreshDropState();
      refreshAllowlistState();
      refreshTokensLimitPerAddressTotal();
    }
  }, [address]);

  useEffect(() => {
    if (dropActive) {
      refreshDropData();
      refreshMintedPerDropData();
      refreshTokensLimitPerAddressPerDrop();
    }
  }, [dropActive]);

  useEffect(() => {
    if (!allowlistStateLoading && allowlistEnabled) {
      refreshAllowlistCheckData();
    }
  }, [allowlistEnabled]);

  const handleRefreshData = useCallback(() => {
    refreshTotalTokensLeft();
    refreshMintedData();
    refreshMintedPerDropData();
    refreshDropData();
  }, [
    refreshTotalTokensLeft,
    refreshMintedData,
    refreshMintedPerDropData,
    refreshDropData,
  ]);

  const getLeftToMintForUser = useCallback(() => {
    let leftPerDrop = 0;
    let leftInTotal = 0;

    if (allowlistEnabled && allowlistCheckData === 0) {
      return 0;
    }

    if (
      !Number.isNaN(mintedPerDropData) &&
      !Number.isNaN(tokensLimitPerAddressPerDrop)
    ) {
      leftPerDrop = tokensLimitPerAddressPerDrop - mintedPerDropData;
    }
    if (
      !Number.isNaN(mintedData) &&
      !Number.isNaN(tokensLimitPerAddressTotal)
    ) {
      leftInTotal = tokensLimitPerAddressTotal - mintedData;
    }
    if (!dropActive || leftPerDrop > leftInTotal) {
      return leftInTotal;
    }
    return leftPerDrop;
  }, [
    allowlistEnabled,
    allowlistCheckData,
    mintedPerDropData,
    tokensLimitPerAddressPerDrop,
    mintedData,
    tokensLimitPerAddressTotal,
    dropActive,
  ]);

  const isContentCentered = useBreakpointValue({ base: true, md: false });

  const tokensLeftPerUser = getLeftToMintForUser();

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial="initial"
      animate="animate"
      variants={fadeInUp}
    >
      <Box width="100%">
        <Text
          as="h1"
          fontSize={{ base: '2xl' }}
          textAlign={{ base: 'left' }}
          fontWeight="black"
          lineHeight="shorter"
          mb={5}
        >
          Collect MxGhosts and join the clan.
        </Text>
        <Text as="h2" fontSize="md" fontWeight="thin">
          The GhostVerse is an otherworldly universe within the MultiversX
          blockchain.
          <br />
          <br />
          The 8658 inhabitants of the GhostVerse are known as the MxGhosts, they
          are the guardians of the MultiversX, tasked with haunting and keeping
          the peace. They have the right to vote in the GhostVerse DAO and can
          shape the future of the universe through their decisions.
          <br />
          <br />
          Some MxGhosts join the GhostClan, a powerful organization that
          controls the haunting of the MultiversX. They are paid every month in
          EGLD for their services, providing them with a passive income.
          <br />
          <br />
          Collecting and owning a Mr Ghost NFT is not just a way to own a piece
          of digital art, it&apos;s also a way to become a part of this
          fantastic world!
        </Text>
        {!mintingPaused ? (
          <Box mt={6}>
            <NFTLeftToMint
              data={totalTokensLeft || 0}
              dropData={dropData || 0}
              dataLoading={dropActive ? dropIsLoading : totalIsLoading}
            />
            <Box>
              <Authenticated
                fallback={
                  <Box
                    mt={6}
                    display="flex"
                    justifyContent={isContentCentered ? 'center' : 'flex-start'}
                  >
                    <LoginModalButton />
                  </Box>
                }
                spinnerCentered={isContentCentered}
              >
                <NFTAllowlistEnabled
                  data={allowlistCheckData}
                  dataLoading={allowlistCheckLoading}
                />
                <NFTMintedAlready
                  data={mintedData}
                  dataLoading={mintedDataLoading}
                />
                {!isLoadingTokensLimitPerAddressTotal &&
                !tokensLimitPerAddressPerDropLoading &&
                !Number.isNaN(tokensLeftPerUser) ? (
                  <>
                    <NFTLeftToMintPerAddress
                      leftToMintForUser={tokensLeftPerUser}
                    />
                    <MintForm
                      cb={handleRefreshData}
                      leftToMintForUser={tokensLeftPerUser}
                    />
                  </>
                ) : null}
              </Authenticated>
            </Box>
          </Box>
        ) : (
          <Box>
            <Text
              fontSize="xl"
              fontWeight="bold"
              mt={10}
              textAlign={{ base: 'center', md: 'left' }}
            >
              Minting was not started yet or is paused at the moment.
            </Text>
            <Text
              fontSize="xl"
              fontWeight="bold"
              textAlign={{ base: 'center', md: 'left' }}
            >
              Please be back soon!
            </Text>
          </Box>
        )}
      </Box>
    </motion.div>
  );
};
