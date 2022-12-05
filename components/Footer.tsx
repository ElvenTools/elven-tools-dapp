import { Container, Box, Text, Image } from '@chakra-ui/react';
import packageJson from '../package.json';

export const Footer = () => {
  return (
    <Box
      color="elvenTools.white"
      display="flex"
      alignItems="center"
      mt={{ base: '5rem', md: 'auto' }}
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
          mb={{ base: '2', md: '4' }}
          position="relative"
          zIndex={1}
          display="flex"
          justifyContent="center"
          whiteSpace="nowrap"
        >
          <Text>Powered by</Text>
          <Text
            as="a"
            color="ghostVerse.color1.darker"
            href="https://www.elven.tools"
            mx={2}
            target="_blank"
            rel="noopener noreferrer"
          >
            Elven Tools Dapp (v{`${packageJson.version}`})
          </Text>
          <Text>on</Text>
          <Text
            as="a"
            color="ghostVerse.color1.darker"
            href="https://multiversx.com/"
            mx={2}
            target="_blank"
            rel="noopener noreferrer"
          >
            MultiversX
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
