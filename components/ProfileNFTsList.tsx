import { Box, Stack, Spinner } from '@chakra-ui/react';
import { useAccount } from '../hooks/auth/useAccount';
import { useApiCall } from '../hooks/interaction/useApiCall';
import { NFT } from '../types/nfts';

export const ProfileNFTsList = () => {
  const { address } = useAccount();

  const { data: nfts, isLoading: nftsDataPending } = useApiCall<NFT[]>({
    url: `/accounts/${address}/nfts/?collections=FACES-dd0aec`,
    autoInit: Boolean(address),
  });

  if (nftsDataPending) {
    return (
      <Stack
        flex={1}
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Spinner size="lg" />
      </Stack>
    );
  }

  return (
    <Box>
      {nfts?.map((nft) => (
        <Box key={nft.identifier}>{nft.identifier}</Box>
      ))}
    </Box>
  );
};
