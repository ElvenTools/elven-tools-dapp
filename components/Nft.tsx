import { Avatar, Box, Text, WrapItem } from '@chakra-ui/react';

export const Nft = (url: any, collection: any) => {
  return (
    <Box>
      <WrapItem justifyContent="center">
        <Avatar size="xl" src={url} />
      </WrapItem>
      <Text>{collection}</Text>
    </Box>
  );
};
