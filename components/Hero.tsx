import { Box, Text } from '@chakra-ui/react';
import { CollectionInfoBox } from './CollectionInfoBox';
import { shortenHash } from '../utils/shortenHash';
import { useElvenScQuery } from '../hooks/useElvenScQuery';
import { SCQueryType, useConfig } from '@useelven/core';

const smartContractAddress = process.env.NEXT_PUBLIC_NFT_SMART_CONTRACT;

export const Hero = () => {
  const { explorerAddress, chainType } = useConfig();
  const { data: collectionSize, isLoading: collectionSizeLoading } =
    useElvenScQuery<number>({
      funcName: 'getTotalSupply',
      type: SCQueryType.NUMBER,
    });

  const { data: totalTokensLeft, isLoading: totalTokensLeftIsLoading } =
    useElvenScQuery<number>({
      type: SCQueryType.NUMBER,
      funcName: 'getTotalTokensLeft',
    });

  const { data: collectionTicker, isLoading: collectionTickerLoading } =
    useElvenScQuery<number>({
      funcName: 'getNftTokenId',
      type: SCQueryType.STRING,
    });

  const minted =
    collectionSize && totalTokensLeft ? collectionSize - totalTokensLeft : 0;

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
        Open source Dapp template for the{' '}
        <Text
          as="a"
          color="elvenTools.color3.base"
          href="https://www.elven.tools"
          target="_blank"
          rel="noopener noreferrer"
        >
          Elven Tools
        </Text>{' '}
        and{' '}
        <Text
          as="a"
          color="elvenTools.color2.base"
          href="https://multiversx.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          MultiversX
        </Text>{' '}
        blockchain.
      </Text>
      <Text
        as="h2"
        fontSize="lg"
        fontWeight="thin"
        textAlign={{ base: 'center', md: 'left' }}
      >
        The actual working example is connected to the Elven Tools smart
        contract deployed on the MultiversX blockchain{' '}
        <Text as="span" fontWeight="medium">
          {chainType}
        </Text>
        ! You can play with it. I will redeploy it from time to time to keep the
        minting active. You can also use the template on the mainnet with a
        couple of config changes. Check the Elven Tools website for docs.
      </Text>
      <Box
        display="flex"
        justifyContent={{ base: 'center', md: 'flex-start' }}
        mt={10}
        gap={3}
        sx={{
          '@media screen and (max-width: 650px)': {
            flexDirection: 'column',
          },
        }}
      >
        <CollectionInfoBox
          content={collectionTicker || '-'}
          label="Collection ticker. Click for details."
          isLoading={collectionTickerLoading}
          href={`${explorerAddress}/collections/${collectionTicker}`}
        />
        <CollectionInfoBox
          content={
            smartContractAddress
              ? shortenHash(smartContractAddress || '', 12)
              : 'No minter smart contract provided!'
          }
          label={`Minter smart contract. Click for details.`}
          href={
            smartContractAddress
              ? `${explorerAddress}/accounts/${smartContractAddress}`
              : undefined
          }
        />
        <CollectionInfoBox
          content={`${minted} / ${collectionSize || 0}`}
          isLoading={collectionSizeLoading || totalTokensLeftIsLoading}
          label="Minted per collection supply"
        />
      </Box>
    </Box>
  );
};
