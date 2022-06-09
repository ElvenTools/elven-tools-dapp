import { Box, Accordion } from '@chakra-ui/react';
import { FaqItem } from './FaqItem';
import { faq } from '../config/dappUi';
import { HomeSectionTitle } from './HomeSectionTitle';

export const Faq = () => {
  if (!Array.isArray(faq)) return null;

  return (
    <Box mt={32}>
      <HomeSectionTitle title="FAQ" />
      <Accordion allowToggle>
        {faq.map((faqItem, index) => (
          <FaqItem key={index} {...faqItem} />
        ))}
      </Accordion>
    </Box>
  );
};
