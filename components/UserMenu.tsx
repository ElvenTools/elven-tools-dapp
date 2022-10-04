import { Avatar } from '@chakra-ui/react';
import { useAccount } from '../hooks/auth/useAccount';
import { chainType, networkConfig } from '../config/network';

export const UserMenu = () => {
  const { address } = useAccount();

  if (!address) return null;

  return (
    <a
      href={`${networkConfig[chainType].explorerAddress}/address/${address}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Avatar
        size="md"
        src={`https://id.maiar.com/users/photos/profile/${address}`}
      />
    </a>
  );
};
