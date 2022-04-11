import { Box, Text } from '@chakra-ui/react';
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

// TODO: Prepare sc query hooks for all cases
// TODO: Prepare separate components for the segments here
// TODO: refactor it a bit

export const MintHero = () => {
  const { address } = useAccount();
  const { data, mutate: refreshData } = useScQuery({
    type: SCQueryType.INT,
    payload: {
      scAddress: smartContractAddress,
      funcName: 'getTotalTokensLeft',
      args: [],
    },
  });

  const { data: dropData, mutate: refreshDropData } = useScQuery({
    type: SCQueryType.INT,
    payload: {
      scAddress: smartContractAddress,
      funcName: 'getDropTokensLeft',
      args: [],
    },
  });

  const { data: mintedData, mutate: refreshMintedData } = useScQuery({
    type: SCQueryType.INT,
    payload: {
      scAddress: smartContractAddress,
      funcName: 'getMintedPerAddressTotal',
      args: address ? [Address.fromBech32(address)?.hex()] : [],
    },
    autoInit: Boolean(address),
  });

  const { data: mintedPerDropData, mutate: refreshMintedPerDropData } =
    useScQuery({
      type: SCQueryType.INT,
      payload: {
        scAddress: smartContractAddress,
        funcName: 'getMintedPerAddressPerDrop',
        args: address ? [Address.fromBech32(address)?.hex()] : [],
      },
      autoInit: Boolean(address),
    });

  const { data: allowlistCheckData } = useScQuery({
    type: SCQueryType.INT,
    payload: {
      scAddress: smartContractAddress,
      funcName: 'getAllowlistAddressCheck',
      args: address ? [Address.fromBech32(address)?.hex()] : [],
    },
    autoInit: Boolean(address),
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

    if (isAllowlistEnabled && Number(allowlistCheckData?.data?.data) === 0) {
      return 0;
    }

    if (mintedPerDropData?.data?.data) {
      leftPerDrop =
        tokensLimitPerAddressPerDrop - Number(mintedPerDropData.data.data);
    }
    if (mintedData?.data?.data) {
      leftInTotal = tokensLimitPerAddressTotal - Number(mintedData.data.data);
    }
    if (!isDropActive || leftPerDrop > leftInTotal) {
      return leftInTotal;
    }
    return leftPerDrop;
  }, [
    allowlistCheckData?.data?.data,
    mintedData?.data.data,
    mintedPerDropData?.data.data,
  ]);

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
          <Box
            display="flex"
            alignItems="center"
            justifyContent={{ base: 'center', md: 'flex-start' }}
          >
            <Text fontSize={{ base: 'md', sm: 'xl' }} fontWeight="bold">
              {isDropActive ? 'Current drop' : 'Total'} NFTs left to mint:{' '}
            </Text>
            <Text
              color="elvenTools.color2.base"
              fontSize="3xl"
              fontWeight="black"
              ml={3}
            >
              {isDropActive ? dropData?.data.data : data?.data?.data}
            </Text>
          </Box>
          <Box>
            <Authenticated
              fallback={
                <Box mt={6}>
                  <LoginModalButton />
                </Box>
              }
            >
              {isAllowlistEnabled && (
                <Box
                  display="flex"
                  alignItems="center"
                  mt={2}
                  mb={2}
                  justifyContent={{ base: 'center', md: 'flex-start' }}
                >
                  <Text fontSize={{ base: 'md', sm: 'xl' }} fontWeight="bold">
                    Allowlist is enabled. You are{' '}
                    {Number(allowlistCheckData?.data?.data) !== 0 ? (
                      <Text color="elvenTools.color2.base" as="span">
                        on
                      </Text>
                    ) : (
                      <Text color="elvenTools.color3.base" as="span">
                        not on
                      </Text>
                    )}{' '}
                    the list!
                  </Text>
                </Box>
              )}
              <Box
                display="flex"
                alignItems="center"
                justifyContent={{ base: 'center', md: 'flex-start' }}
              >
                <Text fontSize={{ base: 'md', sm: 'xl' }} fontWeight="bold">
                  You have minted:{' '}
                </Text>
                <Text
                  color="elvenTools.color2.base"
                  fontSize="3xl"
                  fontWeight="black"
                  ml={3}
                >
                  {mintedData?.data?.data}
                </Text>
                <Text
                  fontSize={{ base: 'md', sm: 'xl' }}
                  fontWeight="bold"
                  ml={3}
                >
                  in total
                </Text>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                mb={6}
                justifyContent={{ base: 'center', md: 'flex-start' }}
              >
                <Text fontSize={{ base: 'md', sm: 'xl' }} fontWeight="bold">
                  You can mint:
                </Text>
                <Text
                  color="elvenTools.color2.base"
                  fontSize="3xl"
                  fontWeight="black"
                  ml={3}
                >
                  {getLeftToMintForUser()}
                </Text>
                <Text
                  fontSize={{ base: 'md', sm: 'xl' }}
                  fontWeight="bold"
                  ml={3}
                >
                  NFTs
                </Text>
              </Box>
              <MintForm
                cb={handleRefreshData}
                leftToMintForUser={getLeftToMintForUser()}
              />
              {mintedData?.data?.data && mintedData.data.data > 0 && (
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
