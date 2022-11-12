import { Container, Box, Text, Image } from '@chakra-ui/react';
import packageJson from '../package.json';

export const Footer = () => {
  return (
    <Box
      color="elvenTools.white"
      display="flex"
      alignItems="center"
      mt={{ base: 'auto' }}
    >
      <Container
        maxW="container.xl"
        fontSize="sm"
        fontWeight="normal"
        textAlign="center"
      >
        <Box
          fontSize="xs"
          fontWeight="bold"
          mb="4"
          position="relative"
          zIndex={1}
        >
          <Text
            as="a"
            color="#fff"
            href="https://www.elven.tools"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Elven Tools Dapp (v{`${packageJson.version}`})
          </Text>
        </Box>
        <Box
          position="absolute"
          zIndex={0}
          width="100%"
          height="auto"
          left="0"
          right="0"
          bottom="0"
        >
          <Image
            src="/media/ghostverse-cemetery-mr-ghost-mxghosts-nft-dao-multiversx-blockchain.webp"
            alt="Mr Ghost Moon"
            objectFit="contain"
            width="2048"
            height="auto"
          />
        </Box>
      </Container>
    </Box>
  );
};
