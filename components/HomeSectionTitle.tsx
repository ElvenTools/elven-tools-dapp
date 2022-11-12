import { Text } from '@chakra-ui/react';
import { FC } from 'react';

interface HomeSectionTitleProps {
  title: string;
}

export const HomeSectionTitle: FC<HomeSectionTitleProps> = ({ title }) => {
  return (
    <Text
      as="h1"
      fontSize={{ base: 'lg', md: '2xl' }}
      fontWeight="black"
      color="ghostLand.color2.darker"
      mb={4}
    >
      {title}
    </Text>
  );
};
