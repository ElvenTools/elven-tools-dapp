import NextLink from 'next/link';
import { Box, Text } from '@chakra-ui/react';
import { useConfig } from '@useelven/core';

export const Logo = () => {
  const { chainType } = useConfig();

  return (
    <NextLink href="/">
      <Box
        display="flex"
        alignItems="center"
        gap={2}
        position="relative"
        userSelect="none"
      >
        <Text
          position="absolute"
          right="0"
          top="0"
          fontSize="10px"
          fontWeight="semibold"
          px={1.5}
          borderRadius="sm"
          color="elvenTools.color2.base"
        >
          {chainType}
        </Text>

        <Text
          as="span"
          cursor="pointer"
          mb={0}
          fontSize="4xl"
          fontWeight="black"
          color="elvenTools.white"
        >
          Weird Faces
        </Text>
      </Box>
    </NextLink>
  );
};
