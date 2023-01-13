import { Avatar, Text } from '@chakra-ui/react';
import { Tooltip } from '@chakra-ui/react';
import { avatarIdUrl } from '../config/network';
import { useAccount } from '../hooks/auth/useAccount';

export const UserAvatar = () => {
  const { address } = useAccount();

  if (!address) return null;

  return (
    <Text
      as="a"
      href="/profile"
      borderColor="black"
      borderRadius="100%"
      borderWidth={1}
      _hover={{ borderColor: 'ghostVerse.color1.darker' }}
    >
      <Tooltip
        bg="ghostVerse.green.base"
        fontWeight="light"
        placement="top"
        py={3}
        px={5}
        mb={3}
        hasArrow
        arrowSize={12}
        borderRadius={0}
        label="Go to profile page"
      >
        <Avatar size="md" src={avatarIdUrl(address)} />
      </Tooltip>
    </Text>
  );
};
