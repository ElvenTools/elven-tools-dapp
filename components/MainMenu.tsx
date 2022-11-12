import { FC, PropsWithChildren } from 'react';
import { SimpleGrid } from '@chakra-ui/react';
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

export const MainMenu: FC<PropsWithChildren<PropsWithChildren>> = ({
  children,
}) => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial="initial"
      animate="animate"
      variants={fadeInUp}
    >
      <SimpleGrid width="100%" columns={{ md: 4, sm: 2 }} spacing={10}>
        {children}
      </SimpleGrid>
    </motion.div>
  );
};
