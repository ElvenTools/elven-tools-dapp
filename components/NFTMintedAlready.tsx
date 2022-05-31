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
      <Text fontSize={{ base: 'md', sm: 'xl' }} fontWeight="bold">
        You have minted:{' '}
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
          {data}
        </Text>
      )}

      <Text fontSize={{ base: 'md', sm: 'xl' }} fontWeight="bold" ml={3}>
        in total
      </Text>
    </Box>
  );
};
