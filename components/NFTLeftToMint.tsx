import { Box, Spinner, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { useElvenScQuery } from '../hooks/interaction/elvenScHooks/useElvenScQuery';
import { SCQueryType } from '../hooks/interaction/useScQuery';

interface NFTLeftToMintProps {
  data?: number;
  dropData?: number;
  dataLoading?: boolean;
}

export const NFTLeftToMint: FC<NFTLeftToMintProps> = ({
  data,
  dropData,
  dataLoading,
}) => {
  const { data: dropActive } = useElvenScQuery<boolean>({
    funcName: 'isDropActive',
    type: SCQueryType.BOOLEAN,
  });

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent={{ base: 'center', md: 'flex-start' }}
    >
      <Text fontSize={{ base: 'md', sm: 'lg' }} fontWeight="bold">
        {dropActive ? 'Current drop' : 'Total'} NFTs left to mint:{' '}
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
          {dropActive ? dropData : data}
        </Text>
      )}
    </Box>
  );
};
