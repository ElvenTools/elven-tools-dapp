import { Container, Box, Text, Stack } from '@chakra-ui/react';
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
        <Stack
          fontSize="xs"
          fontWeight="bold"
          direction="row"
          justifyContent="center"
        >
          <Text
            as="a"
            color="elvenTools.color3.base"
            href="https://www.elven.tools"
            target="_blank"
            rel="noopener noreferrer"
          >
            Elven Tools ⚡
          </Text>
          <Text fontWeight="hairline"> | </Text>
          <Text
            as="a"
            color="elvenTools.color3.base"
            href="https://www.elvenjs.com"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            {'Elven.js'}
          </Text>
          <Text fontWeight="hairline"> | </Text>
          <Text
            as="a"
            color="elvenTools.color3.base"
            href="https://www.useElven.com"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            {'useElven'}
          </Text>
          <Text fontWeight="hairline"> | </Text>
          <Text
            as="a"
            color="elvenTools.color3.base"
            href="https://github.com/xdevguild/buildo-begins"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            {'Buildo Begins'}
          </Text>
          <Text fontWeight="hairline"> | </Text>
          <Text
            as="a"
            color="elvenTools.color3.base"
            href="https://www.julian.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            julian.io
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};
