import { Accordion } from '@chakra-ui/react';
import { FaqItem } from './FaqItem';
import { faq } from '../config/dappUi';
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

export const Faq = () => {
  if (!Array.isArray(faq)) return null;

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial="initial"
      animate="animate"
      variants={fadeInUp}
    >
      <Accordion allowToggle>
        {faq.map((faqItem, index) => (
          <FaqItem key={index} {...faqItem} />
        ))}
      </Accordion>
    </motion.div>
  );
};
