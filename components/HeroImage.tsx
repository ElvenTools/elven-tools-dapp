import { Box } from '@chakra-ui/react';

export const HeroImage = ({ collectionItem, image }: { collectionItem?: any, image?: string }) => {
  return (
    <Box
      minWidth="400px"
      height="400px"
      display="flex"
      justifyContent="flex-end"
      sx={{
        '@media screen and (max-width: 1000px)': {
          display: 'none',
        },
      }}
    >
      <Box
        padding={10}
        bgColor="elvenTools.dark.darker"
        borderRadius="2xl"
        userSelect="none"
        boxShadow="0 0 25px"
        color="elvenTools.shadowColor"
        display="flex"
        bgGradient="linear-gradient(90deg, elvenTools.dark.base 0%, elvenTools.dark.darker 70%);"
      >
        {
          image ?
            <Box as="img" src="./img.gif" alt="" width="300px" height="300px" />
            :
            <Box as="img" src={`${collectionItem && collectionItem.image}`} alt="" width="300px" height="300px" />
        }
      </Box>
    </Box>
  );
};
