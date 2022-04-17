import { Box, Text, Spinner } from '@chakra-ui/react';
import { FC } from 'react';

interface NFTLeftToMintPerAddressProps {
  leftToMintForUser: number;
  dataLoading?: boolean;
}

export const NFTLeftToMintPerAddress: FC<NFTLeftToMintPerAddressProps> = ({
  leftToMintForUser,
  dataLoading,
}) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      mb={6}
      justifyContent={{ base: 'center', md: 'flex-start' }}
    >
      <Text fontSize={{ base: 'md', sm: 'xl' }} fontWeight="bold">
        You can mint:
      </Text>
      {dataLoading ? (
        <Spinner ml={3} color="elvenTools.color2.base" />
      ) : (
        <Text
          color="elvenTools.color2.base"
          fontSize="3xl"
          fontWeight="black"
          ml={3}
        >
          {leftToMintForUser}
        </Text>
      )}
      <Text fontSize={{ base: 'md', sm: 'xl' }} fontWeight="bold" ml={3}>
        NFTs
      </Text>
    </Box>
  );
};
