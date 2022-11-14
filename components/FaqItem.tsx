import { FC } from 'react';
import {
  Box,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  AccordionItem,
  Link,
  ListItem,
  UnorderedList
} from '@chakra-ui/react';
import { UrlWithStringQuery } from 'url';

interface FaqItemProps {
  question: string;
  answer?: string;
  link?: string;
  points?: any;
}

export const FaqItem: FC<FaqItemProps> = ({ question, answer, link, points }) => {
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
      <AccordionPanel color="elvenTools.white">
        {answer && <>
          {answer}
          &nbsp;
          {
            link && <Link className='site_link' href={`${link}`} target="_black">{link}</Link>
          }
        </>}
        {
          points &&
          <UnorderedList
            color="elvenTools.white"
            style={{ padding: '0px 10px' }}
          >
            {points.map((point: any, index: any) => (
              <ListItem key={index}>{point}</ListItem>
            ))}
          </UnorderedList>}
      </AccordionPanel>

    </AccordionItem>
  );
};
