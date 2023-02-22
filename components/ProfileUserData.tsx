import { Box, Avatar, Stack, Icon, Tooltip } from '@chakra-ui/react';
import { BiLink } from 'react-icons/bi';
import { avatarIdUrl } from '../config/dappCustoms';
import { shortenHash } from '../utils/shortenHash';
import { Account } from '../types/account';
import { useApiCall, useAccount, useConfig } from '@useelven/core';

export const ProfileUserData = () => {
  const { address } = useAccount();
  const { explorerAddress } = useConfig();

  const { data: accountData, isLoading: accountDataPending } =
    useApiCall<Account>({ url: `/accounts/${address}` });

  return (
    <Stack direction="row" justifyContent="center">
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={0}
      >
        <Avatar mt={8} size="2xl" src={avatarIdUrl(address)} />
        <Box>
          <Box mt={4} fontWeight={900} fontSize={32} display="inline-block">
            {accountData?.username ? (
              <Box>@{accountData?.username}</Box>
            ) : (
              <Tooltip
                bg="elvenTools.dark.darker"
                fontWeight="light"
                placement="top"
                py={3}
                px={5}
                hasArrow
                arrowSize={12}
                borderRadius={10}
                label={
                  'Check Buildo Begins tool on how to get one! (github.com/xdevguild/buildo-begins)'
                }
              >
                <Box>
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
              alignItems="center"
              as="a"
              href={`${explorerAddress}/address/${address}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Tooltip
                bg="elvenTools.dark.darker"
                fontWeight="light"
                placement="top"
                py={3}
                px={5}
                hasArrow
                arrowSize={12}
                borderRadius={10}
                label={address}
              >
                <Box fontWeight={700} fontSize={22}>
                  {shortenHash(address, 8)}
                </Box>
              </Tooltip>
              <Icon as={BiLink} w={6} h={6} />
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
};
