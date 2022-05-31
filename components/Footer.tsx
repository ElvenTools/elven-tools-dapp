import { Container, Box, Text } from '@chakra-ui/react';
import packageJson from '../package.json';

export const Footer = () => {
  return (
    <Box
      height="120px"
      bgColor="elvenTools.dark.darker"
      color="elvenTools.white"
      display="flex"
      alignItems="center"
    >
      <Container
        maxW="container.xl"
        fontSize="sm"
        fontWeight="normal"
        textAlign="center"
      >
        <Box>Elven Tools Dapp Template (v{`${packageJson.version}`})</Box>
        <Box fontSize="xs" fontWeight="hairline">
          All for free. Please support the project. Give it credit and tell the
          world about it. Attribution is not required but welcomed in the form
          of a backlink.
        </Box>
        <Box fontSize="xs" fontWeight="bold">
          <Text
            as="a"
            color="elvenTools.color3.base"
            href="https://www.elven.tools"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            elven.tools
          </Text>{' '}
          ⚡{' '}
          <Text
            as="a"
            color="elvenTools.color3.base"
            href="https://www.julian.io"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            julian.io
          </Text>
        </Box>
      </Container>
    </Box>
  );
};
