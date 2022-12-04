import { Container, Box } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';
import { MetaHead, MetaHeadProps } from './MetaHead';
import { Footer } from './Footer';

export const MainLayout: FC<PropsWithChildren<MetaHeadProps>> = ({
  children,
  metaTitle,
  metaDescription,
  metaImage,
  metaUrl,
}) => {
  return (
    <>
      <MetaHead
        metaTitle={metaTitle}
        metaDescription={metaDescription}
        metaImage={metaImage}
        metaUrl={metaUrl}
      />
      <Box
        minHeight="calc(100vh - 34px)"
        position="relative"
        zIndex={3}
        color="ghostVerse.color2.darker"
      >
        <Container maxW="container.xl">
          <Box>{children}</Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
};
