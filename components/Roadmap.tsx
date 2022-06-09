import { Box, SimpleGrid } from '@chakra-ui/react';
import { RoadmapItem } from './RoadmapItem';
import { roadmap } from '../config/dappUi';
import { HomeSectionTitle } from './HomeSectionTitle';

export const Roadmap = () => {
  if (!Array.isArray(roadmap)) return null;

  return (
    <Box mt={32}>
      <HomeSectionTitle title="Roadmap" />
      <SimpleGrid columns={{ lg: 3, md: 2, sm: 1 }} spacing={10}>
        {roadmap.map((roadmapItem, index) => (
          <RoadmapItem key={index} {...roadmapItem} />
        ))}
      </SimpleGrid>
    </Box>
  );
};
