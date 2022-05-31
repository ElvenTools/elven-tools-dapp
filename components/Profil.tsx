import {
  Avatar,
  Box,
  Fade,
  Flex,
  ListItem,
  Slide,
  SlideFade,
  Text,
  UnorderedList,
  WrapItem,
} from '@chakra-ui/react';
import { copyFile } from 'fs';
import { useEffect, useState } from 'react';
import { accountState } from '../store/auth';
import { HomeSectionTitle } from './HomeSectionTitle';

export const Profil = () => {
  const [herotag, setHerotag] = useState('');
  const [nonce, setNonce] = useState('');
  const [shard, setShard] = useState('');

  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  async function getHerotag() {
    const res = await fetch(
      `https://api.elrond.com/accounts/${accountState.address}`
    );
    const data = await res.json();
    const herotag = data?.username?.split('.')[0] ?? '';
    setHerotag(herotag);
    setNonce(data?.nonce);
    setShard(data?.shard);
  }

  useEffect(() => {
    getHerotag();
  }, []);

  return (
    <Box>
      <WrapItem
        justifyContent="center"
        alignItems="center"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <Avatar
          size="xl"
          name="NaaQ"
          src="https://res.cloudinary.com/naaq/image/upload/v1653986673/t%C3%A9l%C3%A9chargement_aahft1.jpg"
        />
        <Box>
          <HomeSectionTitle title={herotag} />
        </Box>
      </WrapItem>
      <Box
        mt={10}
        px={10}
        py={7}
        height={'auto'}
        borderRadius="2xl"
        boxShadow="0 0 25px"
        color="elvenTools.shadowColor"
        bgColor="elvenTools.dark.darker"
        bgGradient="linear-gradient(90deg, elvenTools.dark.base 0%, elvenTools.dark.darker 70%);"
      >
        <Text
          color="elvenTools.white"
          textAlign="center"
          fontSize="2xl"
          fontWeight="black"
          mb={3}
        >
          @{herotag}
        </Text>
        <Box color="elvenTools.white">
          <Text mt="10px" textAlign="center">
            {accountState.address}{' '}
          </Text>
          <Box mt={8}>
            <Text textAlign="left">Nonce : {nonce}</Text>
            <Text textAlign="left">Shard : {shard}</Text>{' '}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
