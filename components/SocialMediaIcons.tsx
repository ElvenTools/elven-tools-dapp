import { SocialIcon } from 'react-social-icons';
import { Box } from '@chakra-ui/react';

export const SocialMediaIcons = () => {
  return (
    <Box display="flex" alignItems="center" gap={3}>
      <SocialIcon
        url="https://www.x.com/ElvenTools"
        title="x.com/ElvenTools"
        bgColor="#1d222a"
        style={{ width: 30, height: 30 }}
      />
      <SocialIcon
        url="https://www.github.com/ElvenTools"
        title="github.com/ElvenTools"
        bgColor="#1d222a"
        style={{ width: 30, height: 30 }}
      />
    </Box>
  );
};
