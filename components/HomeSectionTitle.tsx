import { Text, Box } from '@chakra-ui/react';
import { FC } from 'react';

interface HomeSectionTitleProps {
  title: string;
}

export const HomeSectionTitle: FC<HomeSectionTitleProps> = ({ title }) => {
  return (
    <Text
      as="h2"
      fontSize={{ base: '3xl', lg: '5xl' }}
      fontWeight="black"
      mb={16}
      textAlign="center"
    >
      {title}{' '}
      <Box
        as="span"
        width={3}
        height={3}
        display="inline-block"
        backgroundColor="elvenTools.color3.base"
      />
    </Text>
  );
};
