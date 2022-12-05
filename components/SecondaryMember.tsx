import { Box, Image } from '@chakra-ui/react';
import { FC } from 'react';

interface SecondaryMemberProps {
  name: string;
  imageUrl: string;
  socialMediaLinks?: string[];
}

export const SecondaryMember: FC<SecondaryMemberProps> = ({
  name,
  imageUrl,
  socialMediaLinks,
}) => {
  return (
    <Box color="elvenTools.color3.base">
      {socialMediaLinks && (
        <Box>
          {socialMediaLinks.map((link, index) => (
            <Box
              as="a"
              height="68px"
              borderColor="ghostVerse.blue.base"
              borderWidth={1}
              bgColor="ghostVerse.dark.lighter"
              backdropFilter="blur(3px)"
              color="white"
              py={2}
              px={6}
              fontSize="xl"
              display="flex"
              alignItems="center"
              key={index}
              href={link}
              rel="sponsored"
              title={name}
              _hover={{
                bg: 'ghostVerse.blue.lighter',
              }}
              transition="background-color .3s"
            >
              <Image
                src={imageUrl}
                alt={name}
                title={name}
                mr={2}
                boxSize="40px"
                objectFit="contain"
              />
              {name}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};
