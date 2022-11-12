import { Text, Box, SimpleGrid } from '@chakra-ui/react';
import { SecondaryMember } from './SecondaryMember';
import { secondary } from '../config/dappUi';
import { motion } from 'framer-motion';

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

export const Secondary = () => {
  if (!Array.isArray(secondary)) return null;

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial="initial"
      animate="animate"
      variants={fadeInUp}
    >
      <Box mt={4}>
        <Text
          as="h2"
          color="ghostLand.color2.darker"
          fontSize="xl"
          fontWeight="black"
          mb={3}
        >
          Trade
        </Text>
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={5}>
          {secondary.map((secondaryMember, index) => (
            <SecondaryMember key={index} {...secondaryMember} />
          ))}
        </SimpleGrid>
      </Box>
    </motion.div>
  );
};
