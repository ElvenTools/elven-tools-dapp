import { Box, Text, UnorderedList, ListItem } from '@chakra-ui/react';
import { FC } from 'react';

interface RoadmapItemProps {
  title: string;
  points: string[];
}

export const RoadmapItem: FC<RoadmapItemProps> = ({ title, points }) => {
  return (
    <Box
      px={10}
      py={7}
      borderRadius="2xl"
      boxShadow="0 0 25px"
      color="elvenTools.shadowColor"
      bgColor="elvenTools.dark.darker"
      bgGradient="linear-gradient(90deg, elvenTools.dark.base 0%, elvenTools.dark.darker 70%);"
    >
      <Text color="elvenTools.white" fontSize="2xl" fontWeight="black" mb={3}>
        {title}
      </Text>
      <UnorderedList color="elvenTools.white">
        {points.map((point, index) => (
          <ListItem key={index}>{point}</ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};
