import { Box, BoxProps } from '@chakra-ui/react';
import { FC, PropsWithChildren, useCallback } from 'react';

interface ActionButtonXLProps extends BoxProps {
  onClick: () => void;
  isFullWidth?: boolean;
  disabled?: boolean;
}

export const ActionButtonXL: FC<PropsWithChildren<ActionButtonXLProps>> = ({
  children,
  onClick,
  isFullWidth = false,
  disabled = false,
  ...props
}) => {
  const handleClick = useCallback(() => {
    if (!disabled) {
      onClick?.();
    }
  }, [disabled, onClick]);

  return (
    <Box
      as="button"
      borderColor="transparent"
      borderWidth={1}
      bgColor="transparent"
      py={2}
      px={6}
      fontWeight="normal"
      display="flex"
      flexDirection="column"
      alignItems="center"
      cursor={disabled ? 'not-allowed' : 'pointer'}
      color="elvenTools.white"
      userSelect="none"
      _hover={
        !disabled
          ? {
              bg: 'ghostLand.color1.lighter',
              borderColor: 'ghostLand.color1.darker',
              color: 'ghostLand.color1.darker',
              backdropFilter: 'blur(3px)',
            }
          : {}
      }
      transition="background-color .3s"
      width={isFullWidth ? '100%' : 'auto'}
      onClick={handleClick}
      opacity={!disabled ? 1 : 0.5}
      {...props}
    >
      {children}
    </Box>
  );
};
