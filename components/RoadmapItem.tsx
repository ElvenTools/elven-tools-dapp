import { Box, Text, UnorderedList, ListItem } from '@chakra-ui/react';
import { FC } from 'react';

interface RoadmapItemProps {
  title: string;
  points: string[];
}

export const RoadmapItem: FC<RoadmapItemProps> = ({ title, points }) => {
  return (
    <Box>
      <Text
        as="h2"
        color="ghostVerse.grey.base"
        fontSize="xl"
        fontWeight="black"
        mb={3}
      >
        {title}
      </Text>
      <UnorderedList m={0} color="elvenTools.white">
        {points.map((point, index) => (
          <ListItem
            listStyleType="none"
            borderColor="ghostVerse.color2.base"
            borderWidth={1}
            bgColor="ghostVerse.dark.lighter"
            backdropFilter="blur(3px)"
            py={2}
            px={6}
            mb={2}
            key={index}
          >
            {point}
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};
