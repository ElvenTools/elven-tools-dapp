import {
  Box,
  Stack,
  Spinner,
  Card,
  CardBody,
  Text,
  SimpleGrid,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useAccount } from '../hooks/auth/useAccount';
import { useApiCall } from '../hooks/interaction/useApiCall';
import { NFT } from '../types/nfts';
import { SCQueryType } from '../hooks/interaction/useScQuery';
import { useElvenScQuery } from '../hooks/interaction/elvenScHooks/useElvenScQuery';
import { NftImageHelper } from './NftImageHelper';
import { networkConfig, chainType } from '../config/network';

const SIZE_PER_PAGE = 10000;

export const ProfileNFTsList = () => {
  const { address } = useAccount();

  const { data: collectionTicker, isLoading: collectionTickerLoading } =
    useElvenScQuery<number>({
      funcName: 'getNftTokenId',
      type: SCQueryType.STRING,
    });

  const { data: nfts, isLoading: nftsDataPending } = useApiCall<NFT[]>({
    url: `/accounts/${address}/nfts?collections=${collectionTicker}&size=${SIZE_PER_PAGE}`,
    autoInit: Boolean(address) && Boolean(collectionTicker),
  });

  if (nftsDataPending || collectionTickerLoading) {
    return (
      <Stack
        flex={1}
        direction="row"
        alignItems="center"
        justifyContent="center"
        mt={8}
      >
        <Spinner size="lg" />
      </Stack>
    );
  }

  if (!nfts || nfts.length === 0) {
    return (
      <Box mt={12} textAlign="center">
        <Text>No NFTs minted yet!</Text>
        <Link href="/mxghosts">
          <Text textDecoration="underline">Mint some!</Text>
        </Link>
      </Box>
    );
  }

  return (
    <>
      <SimpleGrid
        my={{ base: '8', md: '12' }}
        columns={{ base: 1, sm: 2, md: 3, xl: 5 }}
        gap={{ base: 1, sm: 2, md: 3, xl: 5 }}
      >
        {nfts?.map((nft) => (
          <Card
            w="100%"
            key={nft.identifier}
            backgroundColor="ghostVerse.color1.lighter"
            borderColor="ghostVerse.color1.darker"
            borderWidth={1}
            borderRadius="0"
            backdropFilter="blur(3px)"
          >
            <CardBody p={{ base: 1, sm: 2, md: 3 }}>
              <Stack position="relative">
                <NftImageHelper
                  thumbnail={nft.media?.[0].thumbnailUrl}
                  elrondIPFSGatewayUrl={nft.url}
                  href={`${networkConfig[chainType].explorerAddress}/nfts/${nft.identifier}`}
                />
              </Stack>
              <Box
                fontWeight={800}
                mt={5}
                color="elvenTools.white"
                textAlign="center"
              >
                <a
                  href={`${networkConfig[chainType].explorerAddress}/nfts/${nft.identifier}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {nft.name}
                </a>
              </Box>
              <Box
                textAlign="center"
                color="ghostVerse.grey.base"
                fontSize={{ base: 10, md: 14 }}
              >
                <a
                  href={`${networkConfig[chainType].explorerAddress}/nfts/${nft.identifier}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {nft.identifier}
                </a>
              </Box>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </>
  );
};
