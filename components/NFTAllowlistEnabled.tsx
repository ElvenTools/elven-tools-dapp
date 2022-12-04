import { Box, Spinner, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { SCQueryType } from '../hooks/interaction/useScQuery';
import { useElvenScQuery } from '../hooks/interaction/elvenScHooks/useElvenScQuery';

interface NFTAllowlistEnabledProps {
  data?: number;
  dataLoading?: boolean;
}

export const NFTAllowlistEnabled: FC<NFTAllowlistEnabledProps> = ({
  data,
  dataLoading,
}) => {
  const { data: allowlistState } = useElvenScQuery<boolean>({
    funcName: 'isAllowlistEnabled',
    type: SCQueryType.BOOLEAN,
  });

  return (
    <>
      {allowlistState && (
        <Box
          display="flex"
          alignItems="center"
          mt={2}
          mb={2}
          justifyContent={{ base: 'center', md: 'flex-start' }}
        >
          <Box>
            <Text
              as="span"
              fontSize={{ base: 'md', sm: 'lg' }}
              fontWeight="bold"
            >
              Allowlist is enabled. You are{' '}
            </Text>
            {dataLoading ? (
              <Spinner ml={3} color="ghostVerse.color1.darker" />
            ) : data !== 0 ? (
              <Text
                color="ghostVerse.color1.darker"
                as="span"
                fontWeight="bold"
                fontSize={{ base: 'md', sm: 'lg' }}
              >
                on
              </Text>
            ) : (
              <Text
                color="elvenTools.color3.base"
                as="span"
                fontWeight="bold"
                fontSize={{ base: 'md', sm: 'lg' }}
              >
                not on
              </Text>
            )}{' '}
            <Text
              as="span"
              fontSize={{ base: 'md', sm: 'lg' }}
              fontWeight="bold"
            >
              the list!
            </Text>
          </Box>
        </Box>
      )}
    </>
  );
};
