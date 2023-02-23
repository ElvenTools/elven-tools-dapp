import { Avatar } from '@chakra-ui/react';
import { Tooltip } from '@chakra-ui/react';
import Link from 'next/link';
import { avatarIdUrl } from '../config/dappCustoms';
import { useAccount } from '@useelven/core';

export const UserAvatar = () => {
  const { address } = useAccount();

  if (!address) return null;

  return (
    <Link href="/profile">
      <Tooltip
        bg="elvenTools.dark.darker"
        fontWeight="light"
        placement="top"
        py={3}
        px={5}
        mb={3}
        hasArrow
        arrowSize={12}
        borderRadius={10}
        label="Go to profile page"
      >
        <Avatar size="md" src={avatarIdUrl(address)} />
      </Tooltip>
    </Link>
  );
};
