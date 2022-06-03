import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { accountState } from '../store/auth';
import { HomeSectionTitle } from './HomeSectionTitle';

export const UserNft = () => {
  const [nftCollections, setNftCollections] = useState([]);

  async function getNftCollection() {
    const res = await fetch(
      `https://api.elrond.com/accounts/${accountState.address}/nfts`
    );
    const dataTemp = await res.json();
    const data = dataTemp.filter(
      (item: { type: string }) => item.type === 'NonFungibleESDT'
    );
    setNftCollections(data);
  }

  useEffect(() => {
    getNftCollection();
  }, []);

  return (
    <Box mt={8}>
      <HomeSectionTitle title={"My NFT's"} />
      <Flex flexWrap={'wrap'} justifyContent="center">
        {nftCollections.map((item: any) => (
          <Box key={item.id} width={'250px'} mb={10}>
            <Image
              borderRadius={16}
              m={'auto'}
              boxSize="240px"
              objectFit="cover"
              src={item.url}
            />
            <Text mt={2} textAlign={'center'}>
              {item.name}
            </Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};
