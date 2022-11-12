import NextLink from 'next/link';
import { Box } from '@chakra-ui/react';
import { ImgEarth } from './ImgEarth';
import { ImgG } from './ImgG';

export const Logo = () => {
  return (
    <NextLink href="/">
      <Box
        display="flex"
        alignItems="center"
        gap={2}
        position="relative"
        userSelect="none"
        cursor="pointer"
      >
        <ImgEarth />
        <Box width="200px">
          <ImgG />
        </Box>
      </Box>
    </NextLink>
  );
};
