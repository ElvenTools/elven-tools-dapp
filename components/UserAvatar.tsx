import { Avatar, Text } from '@chakra-ui/react';
import { Tooltip } from '@chakra-ui/react';
import Link from 'next/link';
import { avatarIdUrl } from '../config/network';
import { useAccount } from '../hooks/auth/useAccount';

export const UserAvatar = () => {
  const { address } = useAccount();

  if (!address) return null;

  return (
    <Text
      as="a"
      href="/profile"
      _hover={{ borderColor: 'ghostLand.color1.darker' }}
      borderColor="black"
      borderRadius="100%"
      borderWidth={1}
    >
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
    </Text>
  );
};
