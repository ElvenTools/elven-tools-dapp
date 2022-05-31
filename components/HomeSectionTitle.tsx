import { Text, Box, background, color } from '@chakra-ui/react';
import { FC } from 'react';

interface HomeSectionTitleProps {
  title: string;
}

export const HomeSectionTitle: FC<HomeSectionTitleProps> = ({ title }) => {
  return (
    <Text
      as="h2"
      fontSize={{ base: '5xl', lg: '7xl' }}
      fontWeight="black"
      mr={8}
      textAlign="center"
      position="relative"
      transition=".3s ease-out"
      bottom={'0px'}
      padding="36px"
    >
      {title}{' '}
      <Box
        as="span"
        width={5}
        height={5}
        display="inline-block"
        backgroundColor="elvenTools.color3.base"
      />
    </Text>
  );
};
