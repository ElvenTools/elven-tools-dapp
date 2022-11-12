import { SimpleGrid } from '@chakra-ui/react';
import { RoadmapItem } from './RoadmapItem';
import { roadmap } from '../config/dappUi';
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

export const Roadmap = () => {
  if (!Array.isArray(roadmap)) return null;

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial="initial"
      animate="animate"
      variants={fadeInUp}
    >
      <SimpleGrid columns={{ lg: 3, md: 2, sm: 1 }} spacing={10}>
        {roadmap.map((roadmapItem, index) => (
          <RoadmapItem key={index} {...roadmapItem} />
        ))}
      </SimpleGrid>
    </motion.div>
  );
};
