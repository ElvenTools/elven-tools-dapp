import { Box, Text, Image } from '@chakra-ui/react';
import { FC } from 'react';

interface EarnItemProps {
  name: string;
  imageUrl: string;
  bio?: string;
}

export const EarnItem: FC<EarnItemProps> = ({ name, imageUrl, bio }) => {
  return (
    <Text
      as="a"
      p={4}
      rel="noopener noreferrer nofollow"
      borderColor="ghostLand.color2.base"
      borderWidth={1}
      backdropFilter="blur(3px)"
    >
      <Box display="flex" alignItems="center" justifyContent="center">
        <Image src={imageUrl} alt={name} boxSize="140px" objectFit="contain" />
      </Box>
      <Text
        as="h2"
        color="ghostLand.color2.darker"
        fontSize="xl"
        fontWeight="black"
        mt={5}
        mb={3}
      >
        {name}
      </Text>
      {bio && <Text mt={5}>{bio}</Text>}
    </Text>
  );
};
