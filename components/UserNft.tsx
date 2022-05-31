import { Avatar, Box, Text, WrapItem } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { accountState } from '../store/auth';
import { Nft } from './Nft';

export const UserNft = () => {
  const [nftCollection, setNftCollection] = useState([]);

  async function getNftCollection() {
    const res = await fetch(
      `https://api.elrond.com/accounts/${accountState.address}/nfts`
    );
    const data = await res.json();
    setNftCollection(data);
  }

  useEffect(() => {
    getNftCollection();
  }, []);

  return (
    <Box>
      <WrapItem justifyContent="left"></WrapItem>
    </Box>
  );
};
