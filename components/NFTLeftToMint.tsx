import { Box, Spinner, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { useElvenScQuery } from '../hooks/interaction/elvenScHooks/useElvenScQuery';
import { SCQueryType } from '../hooks/interaction/useScQuery';

interface NFTLeftToMintProps {
  data?: string | number;
  dropData?: string | number;
  dataLoading?: boolean;
}

export const NFTLeftToMint: FC<NFTLeftToMintProps> = ({
  data,
  dropData,
  dataLoading,
}) => {
  const { data: dropState } = useElvenScQuery({
    funcName: 'isDropActive',
    type: SCQueryType.INT,
  });

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent={{ base: 'center', md: 'flex-start' }}
    >
      <Text fontSize={{ base: 'md', sm: 'xl' }} fontWeight="bold">
        {Number(dropState) === 1 ? 'Current drop' : 'Total'} NFTs left to mint:{' '}
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
          {Number(dropState) === 1 ? dropData : data}
        </Text>
      )}
    </Box>
  );
};
