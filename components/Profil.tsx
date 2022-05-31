import { Avatar, Box, Text, WrapItem } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { accountState } from '../store/auth';

export const Profil = () => {
  const [herotag, setHerotag] = useState('');
  const [nonce, setNonce] = useState('');

  async function getHerotag() {
    const res = await fetch(`https://api.elrond.com/accounts/${accountState.address}`);
    const data = await res.json();
    const herotag = data?.username?.split('.')[0] ?? "";
    setHerotag(herotag);
    setNonce(data?.nonce);
  }

  useEffect(() => {
    getHerotag()
  }, [])

  return (
     <Box>
      <WrapItem justifyContent='center'>
        <Avatar size='xl' name='NaaQ' src='https://res.cloudinary.com/naaq/image/upload/v1653986673/t%C3%A9l%C3%A9chargement_aahft1.jpg' />
      </WrapItem>
      <Text mt='10px' textAlign='center'>{accountState.address}</Text>
      <Text mt='10px' textAlign='center'>@{herotag}</Text>
      <Text mt='10px' textAlign='center'>Nonce : {nonce}</Text>
     </Box>
     
  );
};


