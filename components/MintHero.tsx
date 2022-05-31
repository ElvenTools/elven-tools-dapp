import { Box, Text, useBreakpointValue } from '@chakra-ui/react';
import { useCallback } from 'react';
import { Address } from '@elrondnetwork/erdjs';
import { useScQuery, SCQueryType } from '../hooks/interaction/useScQuery';
import { MintForm } from './MintForm';
import { Authenticated } from './Authenticated';
import { useAccount } from '../hooks/auth/useAccount';
import { LoginModalButton } from './LoginModalButton';
import {
  isDropActive,
  smartContractAddress,
  tokensLimitPerAddressTotal,
  tokensLimitPerAddressPerDrop,
  isAllowlistEnabled,
  isMintingStarted,
} from '../config/nftSmartContract';
import { networkConfig, chainType } from '../config/network';
import { NFTLeftToMint } from './NFTLeftToMint';
import { NFTAllowlistEnabled } from './NFTAllowlistEnabled';
import { NFTMintedAlready } from './NFTMintedAlready';
import { NFTLeftToMintPerAddress } from './NFTLeftToMintPerAddress';

// TODO: Prepare sc query hooks for all cases
// TODO: Prepare separate components for the segments here
// TODO: refactor it a bit

export const MintHero = () => {
  const { address } = useAccount();
  const {
    data,
    fetch: refreshData,
    isLoading: totalIsLoading,
  } = useScQuery({
    type: SCQueryType.INT,
    payload: {
      scAddress: smartContractAddress,
      funcName: 'getTotalTokensLeft',
      args: [],
    },
  });

  const {
    data: dropData,
    fetch: refreshDropData,
    isLoading: dropIsLoading,
  } = useScQuery({
    type: SCQueryType.INT,
    payload: {
      scAddress: smartContractAddress,
      funcName: 'getDropTokensLeft',
      args: [],
    },
    autoInit: isDropActive,
  });

  const {
    data: mintedData,
    fetch: refreshMintedData,
    isLoading: mintedDataLoading,
  } = useScQuery({
    type: SCQueryType.INT,
    payload: {
      scAddress: smartContractAddress,
      funcName: 'getMintedPerAddressTotal',
      args: address ? [Address.fromBech32(address)?.hex()] : [],
    },
    autoInit: Boolean(address),
  });

  const { data: mintedPerDropData, fetch: refreshMintedPerDropData } =
    useScQuery({
      type: SCQueryType.INT,
      payload: {
        scAddress: smartContractAddress,
        funcName: 'getMintedPerAddressPerDrop',
        args: address ? [Address.fromBech32(address)?.hex()] : [],
      },
      autoInit: Boolean(address && isDropActive),
    });

  const { data: allowlistCheckData, isLoading: allowlistCheckLoading } =
    useScQuery({
      type: SCQueryType.INT,
      payload: {
        scAddress: smartContractAddress,
        funcName: 'getAllowlistAddressCheck',
        args: address ? [Address.fromBech32(address)?.hex()] : [],
      },
      autoInit: Boolean(address && isAllowlistEnabled),
    });

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

    if (isAllowlistEnabled && Number(allowlistCheckData) === 0) {
      return 0;
    }

    if (mintedPerDropData) {
      leftPerDrop = tokensLimitPerAddressPerDrop - Number(mintedPerDropData);
    }
    if (mintedData) {
      leftInTotal = tokensLimitPerAddressTotal - Number(mintedData);
    }
    if (!isDropActive || leftPerDrop > leftInTotal) {
      return leftInTotal;
    }
    return leftPerDrop;
  }, [allowlistCheckData, mintedData, mintedPerDropData]);

  const isContentCentered = useBreakpointValue({ base: true, md: false });

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
      {isMintingStarted ? (
        <Box mt={6}>
          <NFTLeftToMint
            data={data}
            dropData={dropData}
            dataLoading={isDropActive ? dropIsLoading : totalIsLoading}
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
              <NFTLeftToMintPerAddress
                leftToMintForUser={getLeftToMintForUser()}
              />
              <MintForm
                cb={handleRefreshData}
                leftToMintForUser={getLeftToMintForUser()}
              />
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
          <Text fontSize="2xl" fontWeight="bold" mt={10}>
            Minting was not started yet.
          </Text>
          <Text fontSize="2xl" fontWeight="bold">
            Please be back soon!
          </Text>
        </Box>
      )}
    </Box>
  );
};
