import { Box, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export const HeroImage = () => {
  return (
    <Box
      width={{ base: '100%' }}
      mr={{ base: '0', md: '3rem' }}
      display="flex"
      justifyContent="center"
    >
      <motion.div
        animate={{
          y: [-15, 15, -15],
        }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatDelay: 0,
        }}
      >
        <Image
          src="/media/ghostverse-mint-mr-ghost-mxghosts-nft-dao-multiversx-blockchain.gif"
          title="Mint Mr Ghost Mr Ghost Minting - MultiversX NFT DAO - MxGhosts"
          alt="Mint Mr Ghost Mr Ghost Minting - MultiversX NFT DAO - MxGhosts"
          width={300}
          height={300}
          maxWidth="inherit"
        />
      </motion.div>
    </Box>
  );
};
