import { Box, Text, useBreakpointValue } from '@chakra-ui/react';
import { useCallback, useEffect } from 'react';
import { Address } from '@elrondnetwork/erdjs';
import { SCQueryType } from '../hooks/interaction/useScQuery';
import { useElvenScQuery } from '../hooks/interaction/elvenScHooks/useElvenScQuery';
import { MintForm } from './MintForm';
import { Authenticated } from './core/Authenticated';
import { useAccount } from '../hooks/auth/useAccount';
import { LoginModalButton } from './core/LoginModalButton';
import { networkConfig, chainType } from '../config/network';
import { NFTLeftToMint } from './NFTLeftToMint';
import { NFTAllowlistEnabled } from './NFTAllowlistEnabled';
import { NFTMintedAlready } from './NFTMintedAlready';
import { NFTLeftToMintPerAddress } from './NFTLeftToMintPerAddress';

// TODO: Prepare separate components for the segments here
// TODO: rebuild the useElvenScQuery to be more responsive and with boolean output option
// TODO: use Valtio for global smart contract config state + dispatchers to be able to trigger changes from each component

export const MintHero = () => {
  const { address } = useAccount();

  const { data: mintingPausedState, isLoading: mintingPausedLoading } =
    useElvenScQuery({
      funcName: 'isMintingPaused',
      type: SCQueryType.INT,
    });

  const {
    data: dropState,
    fetch: refreshDropState,
    isLoading: dropStateLoading,
  } = useElvenScQuery({
    funcName: 'isDropActive',
    type: SCQueryType.INT,
    autoInit: !mintingPausedLoading && Number(mintingPausedState) !== 1,
  });

  const {
    data: allowlistState,
    fetch: refreshAllowlistState,
    isLoading: allowlistStateLoading,
  } = useElvenScQuery({
    funcName: 'isAllowlistEnabled',
    type: SCQueryType.INT,
    autoInit: !mintingPausedLoading && Number(mintingPausedState) !== 1,
  });

  const {
    data: tokensLimitPerAddressTotal,
    fetch: refreshTokensLimitPerAddressTotal,
    isLoading: isLoadingTokensLimitPerAddressTotal,
  } = useElvenScQuery({
    funcName: 'getTokensLimitPerAddressTotal',
    type: SCQueryType.INT,
    autoInit: !mintingPausedLoading && Number(mintingPausedState) !== 1,
  });

  const {
    data: tokensLimitPerAddressPerDrop,
    fetch: refreshTokensLimitPerAddressPerDrop,
    isLoading: tokensLimitPerAddressPerDropLoading,
  } = useElvenScQuery({
    funcName: 'getTokensLimitPerAddressPerDrop',
    type: SCQueryType.INT,
    autoInit: !dropStateLoading && Number(dropState) === 1,
  });

  const {
    data,
    fetch: refreshData,
    isLoading: totalIsLoading,
  } = useElvenScQuery({
    type: SCQueryType.INT,
    funcName: 'getTotalTokensLeft',
    autoInit: !mintingPausedLoading && Number(mintingPausedState) !== 1,
  });

  const {
    data: dropData,
    fetch: refreshDropData,
    isLoading: dropIsLoading,
  } = useElvenScQuery({
    type: SCQueryType.INT,
    funcName: 'getDropTokensLeft',
    autoInit: !dropStateLoading && Number(dropState) === 1,
  });

  const {
    data: mintedData,
    fetch: refreshMintedData,
    isLoading: mintedDataLoading,
  } = useElvenScQuery({
    type: SCQueryType.INT,
    funcName: 'getMintedPerAddressTotal',
    args: address ? [Address.fromBech32(address)?.hex()] : [],
    autoInit: Boolean(
      address && !mintingPausedLoading && Number(mintingPausedState) !== 1
    ),
  });

  const { data: mintedPerDropData, fetch: refreshMintedPerDropData } =
    useElvenScQuery({
      type: SCQueryType.INT,
      funcName: 'getMintedPerAddressPerDrop',
      args: address ? [Address.fromBech32(address)?.hex()] : [],
      autoInit: Boolean(
        address && !dropStateLoading && Number(dropState) === 1
      ),
    });

  const {
    data: allowlistCheckData,
    fetch: refreshAllowlistCheckData,
    isLoading: allowlistCheckLoading,
  } = useElvenScQuery({
    type: SCQueryType.INT,
    funcName: 'getAllowlistAddressCheck',
    args: address ? [Address.fromBech32(address)?.hex()] : [],
    autoInit: Boolean(
      address && !allowlistStateLoading && Number(allowlistState) === 1
    ),
  });

  useEffect(() => {
    if (!mintingPausedLoading && Number(mintingPausedState) !== 1) {
      refreshDropState();
      refreshAllowlistState();
      refreshTokensLimitPerAddressTotal();
      refreshMintedData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mintingPausedState]);

  useEffect(() => {
    if (!dropStateLoading && Number(dropState) === 1) {
      refreshDropData();
      refreshMintedPerDropData();
      refreshTokensLimitPerAddressPerDrop();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dropState]);

  useEffect(() => {
    if (!allowlistStateLoading && Number(allowlistState) === 1) {
      refreshAllowlistCheckData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allowlistState]);

  const handleRefreshData = useCallback(() => {
    refreshData();
    refreshMintedData();
    refreshMintedPerDropData();
    refreshDropData();
  }, [
    refreshData,
    refreshMintedData,
    refreshMintedPerDropData,
    refreshDropData,
  ]);

  const getLeftToMintForUser = useCallback(() => {
    let leftPerDrop = 0;
    let leftInTotal = 0;

    if (Number(allowlistState) === 1 && Number(allowlistCheckData) === 0) {
      return 0;
    }

    if (
      !Number.isNaN(mintedPerDropData) &&
      !Number.isNaN(tokensLimitPerAddressPerDrop)
    ) {
      leftPerDrop =
        Number(tokensLimitPerAddressPerDrop) - Number(mintedPerDropData);
    }
    if (
      !Number.isNaN(mintedData) &&
      !Number.isNaN(tokensLimitPerAddressTotal)
    ) {
      leftInTotal = Number(tokensLimitPerAddressTotal) - Number(mintedData);
    }
    if (Number(dropState) !== 1 || leftPerDrop > leftInTotal) {
      return leftInTotal;
    }
    return leftPerDrop;
  }, [
    allowlistCheckData,
    mintedData,
    mintedPerDropData,
    tokensLimitPerAddressTotal,
    dropState,
    tokensLimitPerAddressPerDrop,
    allowlistState,
  ]);

  const isContentCentered = useBreakpointValue({ base: true, md: false });

  const tokensLeftPerUser = getLeftToMintForUser();

  return (
    <Box width="100%">
      <Text
        as="h1"
        fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }}
        textAlign={{ base: 'center', md: 'left' }}
        fontWeight="black"
        lineHeight="shorter"
        mb={5}
      >
        ⚡ Mint some of them
      </Text>
      <Text
        as="h2"
        fontSize="lg"
        fontWeight="thin"
        textAlign={{ base: 'center', md: 'left' }}
      >
        To be able to mint you have to be logged in to be able to mint. Remember
        that it will mint only on the devent. If you want to do that, you need
        to connect using one of the methods and the devnet address with some
        xEGLD funds.
      </Text>
      {Number(mintingPausedState) !== 1 ? (
        <Box mt={6}>
          <NFTLeftToMint
            data={data}
            dropData={dropData}
            dataLoading={
              Number(dropState) === 1 ? dropIsLoading : totalIsLoading
            }
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
                !Number.isNaN(tokensLeftPerUser) && (
                  <>
                    <NFTLeftToMintPerAddress
                      leftToMintForUser={tokensLeftPerUser}
                    />
                    <MintForm
                      cb={handleRefreshData}
                      leftToMintForUser={tokensLeftPerUser}
                    />
                  </>
                )}
              {mintedData && mintedData > 0 && (
                <Box
                  display="flex"
                  alignItems="center"
                  mt={6}
                  justifyContent={{ base: 'center', md: 'flex-start' }}
                >
                  <Text
                    as="span"
                    fontSize={{ base: 'md', sm: 'xl' }}
                    fontWeight="bold"
                  >
                    Check your NFTs:
                  </Text>
                  <Text
                    as="a"
                    ml={3}
                    target="_blank"
                    color="elvenTools.color2.base"
                    fontSize="2xl"
                    fontWeight="black"
                    textDecoration="underline"
                    rel="noopener noreferrer nofollow"
                    href={`${networkConfig[chainType].explorerAddress}/accounts/${address}/nfts`}
                  >
                    here
                  </Text>
                </Box>
              )}
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
  );
};
