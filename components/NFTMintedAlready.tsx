import { Box, Spinner, Text } from '@chakra-ui/react';
import { FC } from 'react';

interface NFTMintedAlreadyProps {
  data?: string | number;
  dataLoading?: boolean;
}

export const NFTMintedAlready: FC<NFTMintedAlreadyProps> = ({
  data,
  dataLoading,
}) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent={{ base: 'center', md: 'flex-start' }}
    >
      <Text fontSize={{ base: 'md', sm: 'lg' }} fontWeight="bold">
        You have minted:{' '}
      </Text>

      {dataLoading ? (
        <Spinner ml={3} color="ghostVerse.color1.darker" />
      ) : (
        <Text
          color="ghostVerse.color1.darker"
          fontSize="3xl"
          fontWeight="black"
          ml={3}
        >
          {data}
        </Text>
      )}

      <Text fontSize={{ base: 'md', sm: 'lg' }} fontWeight="bold" ml={3}>
        in total
      </Text>
    </Box>
  );
};
