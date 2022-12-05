import { Box, Avatar, Stack, Icon, Tooltip, Spinner } from '@chakra-ui/react';
import { BiLink } from 'react-icons/bi';
import { avatarIdUrl, networkConfig, chainType } from '../config/network';
import { shortenHash } from '../utils/shortenHash';
import { Account } from '../types/account';
import { useApiCall } from '../hooks/interaction/useApiCall';
import { useAccount } from '../hooks/auth/useAccount';
import { NFT } from '../types/nfts';
import { SCQueryType } from '../hooks/interaction/useScQuery';
import { useElvenScQuery } from '../hooks/interaction/elvenScHooks/useElvenScQuery';

const SIZE_PER_PAGE = 10000;

export const ProfileUserData = () => {
  const { address } = useAccount();

  const { data: accountData, isLoading: accountDataPending } =
    useApiCall<Account>({ url: `/accounts/${address}` });

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

  return (
    <Stack
      direction="row"
      borderColor="ghostVerse.color2.base"
      borderWidth={1}
      p={4}
      backdropFilter="blur(3px)"
    >
      <Stack
        direction="row"
        justifyContent={{ base: 'center', md: 'left' }}
        spacing={0}
      >
        <Avatar
          width={{ base: '80px', md: '120px' }}
          height="auto"
          mr={4}
          src={avatarIdUrl(address)}
        />
        <Box>
          <Box>
            <Box fontWeight={900} fontSize={32} display="inline-block">
              {accountData?.username ? (
                <Box fontSize={{ base: 14, md: 16, xl: 20 }}>
                  {accountData?.username}
                </Box>
              ) : (
                <Tooltip
                  bg="ghostVerse.green.base"
                  fontWeight="light"
                  placement="top"
                  py={3}
                  px={5}
                  hasArrow
                  arrowSize={12}
                  borderRadius={0}
                  label={
                    'Check Buildo Begins tool on how to get one! (github.com/xdevguild/buildo-begins)'
                  }
                >
                  <Box fontSize={{ base: 16, xl: 20 }}>
                    <a
                      href="https://github.com/xdevguild/buildo-begins#general-operations"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {accountDataPending ? '' : 'No herotag!'}
                    </a>
                  </Box>
                </Tooltip>
              )}
            </Box>
          </Box>
          <Box>
            <Box display="inline-block">
              <Stack
                direction="row"
                as="a"
                href={`${networkConfig[chainType].explorerAddress}/address/${address}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Tooltip
                  bg="ghostVerse.green.base"
                  fontWeight="light"
                  placement="top"
                  py={3}
                  px={5}
                  hasArrow
                  arrowSize={12}
                  borderRadius={0}
                  label={address}
                >
                  <Box
                    fontWeight={700}
                    color="ghostVerse.grey.base"
                    fontSize={{ base: 12, md: 16 }}
                  >
                    {shortenHash(address, 8)}
                  </Box>
                </Tooltip>
                <Icon color="ghostVerse.grey.base" as={BiLink} w={6} h={6} />
              </Stack>
              <Tooltip
                bg="ghostVerse.green.base"
                fontWeight="light"
                placement="top"
                py={3}
                px={5}
                hasArrow
                arrowSize={12}
                borderRadius={0}
                label={
                  `Estimated monthly passive income ` +
                  nfts.length * 0.0016 +
                  ` EGLDs`
                }
              >
                <Box fontWeight={700} fontSize={{ base: 16 }}>
                  {nfts.length} MxGhosts
                </Box>
              </Tooltip>
            </Box>
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
};
