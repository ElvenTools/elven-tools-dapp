import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export const ImgEarth = () => {
  return (
    <Box height={{ base: '40px' }} width={{ base: '40px' }} marginRight={2}>
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 12,
          ease: 'linear',
          repeat: Infinity,
          repeatDelay: 0,
        }}
      >
        <Box
          as="img"
          src="/media/ghostverse-earth-mr-ghost-mxghosts-nft-dao-multiversx-blockchain.webp"
          width={{ base: '40px' }}
          height={{ base: '40px' }}
          alt="Mr Ghost Earth - MultiversX NFT DAO - MxGhosts"
          title="Mr Ghost Earth - MultiversX NFT DAO - MxGhosts"
        />
      </motion.div>
    </Box>
  );
};
