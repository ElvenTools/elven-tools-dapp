import { FC } from 'react';
import {
  Box,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  AccordionItem,
} from '@chakra-ui/react';

interface FaqItemProps {
  question: string;
  answer: string;
}

export const FaqItem: FC<FaqItemProps> = ({ question, answer }) => {
  return (
    <AccordionItem
      border={0}
      bgColor="elvenTools.dark.darker"
      boxShadow="0 0 10px"
      color="elvenTools.shadowColor"
      bgGradient="linear-gradient(90deg, elvenTools.dark.base 0%, elvenTools.dark.darker 70%);"
      mb={6}
    >
      <AccordionButton
        _focus={{ outline: 'none' }}
        color="elvenTools.white"
        padding={6}
      >
        <Box flex="1" textAlign="left">
          {question}
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel color="elvenTools.white">{answer}</AccordionPanel>
    </AccordionItem>
  );
};
