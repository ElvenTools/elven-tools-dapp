import { Avatar, Box, Text, WrapItem } from '@chakra-ui/react';
import { accountState } from '../store/auth';



export const Profil = () => {
  return (
     <Box>
      <WrapItem justifyContent='center'>
        <Avatar size='xl' name='Kola Tioluwani' src='https://res.cloudinary.com/naaq/image/upload/v1653986673/t%C3%A9l%C3%A9chargement_aahft1.jpg' />
      </WrapItem>
      <Text mt='10px' textAlign='center'>@naaq</Text>
      <Text mt='10px' textAlign='center'>{accountState.address}</Text>
     </Box>
     
  );
};


