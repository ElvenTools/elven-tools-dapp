import { Box, Text, Image } from '@chakra-ui/react';
import { FC } from 'react';
import { SocialIcon } from 'react-social-icons';

interface TeamMemberProps {
  name: string;
  imageUrl: string;
  socialMediaLinks?: string[];
  bio?: string;
}

export const TeamMember: FC<TeamMemberProps> = ({
  name,
  imageUrl,
  socialMediaLinks,
  bio,
}) => {
  return (
    <Box
      borderColor="ghostLand.color2.base"
      borderWidth={1}
      bgColor="ghostLand.dark.lighter"
      backdropFilter="blur(3px)"
      py={2}
      px={6}
      position="relative"
    >
      <Box display="flex" alignItems="center" justifyContent="center">
        <Image
          src={imageUrl}
          alt={name}
          boxSize={{ base: '90px', md: '140px' }}
          objectFit="contain"
        />
      </Box>
      <Text textAlign="center" fontWeight="bold" fontSize="xl">
        {name}
      </Text>
      {bio && <Text textAlign="center">{bio}</Text>}
      {socialMediaLinks && (
        <Box
          display="flex"
          mt={5}
          alignItems="center"
          justifyContent="center"
          gap={2}
          position="absolute"
          top={0}
          right={5}
        >
          {socialMediaLinks.map((link, index) => (
            <SocialIcon
              key={index}
              url={link}
              bgColor="#fff"
              style={{ width: 30, height: 30 }}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};
