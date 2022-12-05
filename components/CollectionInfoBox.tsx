import { Box, Text, Spinner } from '@chakra-ui/react';
import { FC } from 'react';
import { Tooltip } from '@chakra-ui/react';

interface CollectionInfoBoxProps {
  content: string | number;
  label: string;
  href?: string;
  isLoading?: boolean;
}

export const CollectionInfoBox: FC<CollectionInfoBoxProps> = ({
  content,
  label,
  href,
  isLoading = false,
}) => {
  return (
    <Tooltip
      label={label}
      bg="ghostVerse.green.base"
      fontWeight="light"
      placement="top"
      py={3}
      px={5}
      mb={3}
      hasArrow
      arrowSize={12}
      borderRadius={0}
    >
      <Box
        py={3}
        px={8}
        borderColor="elvenTools.white"
        borderWidth={0.5}
        borderRadius="md"
        borderStyle="dashed"
      >
        {isLoading ? (
          <Box display="flex" alignItems="center" justifyContent="center">
            <Spinner color="ghostVerse.color1.darker" />
          </Box>
        ) : (
          <Text fontWeight="normal">
            {href ? (
              <a href={href} target="_blank" rel="noopener noreferrer nofollow">
                {content}
              </a>
            ) : (
              content
            )}
          </Text>
        )}
      </Box>
    </Tooltip>
  );
};
