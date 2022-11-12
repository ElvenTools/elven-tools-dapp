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
      borderColor="ghostLand.color1.darker"
      borderWidth={1}
      bgColor="ghostLand.dark.lighter"
      backdropFilter="blur(3px)"
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
