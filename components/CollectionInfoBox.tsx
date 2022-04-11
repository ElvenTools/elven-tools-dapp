import { Box, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { Tooltip } from '@chakra-ui/react';
import { numberFormatter } from '../utils/numberFormater';

interface CollectionInfoBoxProps {
  content: string | number;
  label: string;
  href?: string;
}

export const CollectionInfoBox: FC<CollectionInfoBoxProps> = ({
  content,
  label,
  href,
}) => {
  const contentFormated =
    typeof content === 'number' ? numberFormatter.format(content) : content;

  return (
    <Tooltip
      label={label}
      bg="elvenTools.dark.darker"
      fontWeight="light"
      placement="top"
      py={3}
      px={5}
      mb={3}
      hasArrow
      arrowSize={12}
      borderRadius={10}
    >
      <Box
        py={3}
        px={8}
        borderColor="elvenTools.white"
        borderWidth={0.5}
        borderRadius="md"
        borderStyle="dashed"
      >
        <Text fontWeight="normal">
          {href ? (
            <a href={href} target="_blank" rel="noopener noreferrer nofollow">
              {contentFormated}
            </a>
          ) : (
            contentFormated
          )}
        </Text>
      </Box>
    </Tooltip>
  );
};
