// After minting an NFT, there is no guarantee that the image thumbnail
// will be immediately available through Elrond API
// This is why we have this helper. It will fallback to the IPFS source using a custom
// IPFS gateway, we take the CID from Elrond's IPFS gateway url here to be sure that we will get it

import { FC, CSSProperties, PropsWithChildren } from 'react';
import { Box } from '@chakra-ui/react';
import Image, { ImageProps } from 'next/image';
import { customIPFSGateway, elrondIPFSGateway } from '../config/network';

const commonImageStyles: CSSProperties = {
  objectFit: 'contain',
  borderRadius: 0,
};

const commonImagesProps = {
  sizes: '280px',
  height: 280,
  width: 280,
  priority: true,
  style: commonImageStyles,
  placeholder: 'blur' as ImageProps['placeholder'],
  blurDataURL:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAAEYCAQAAAAthyEHAAAB0ElEQVR42u3SQQ0AAAgEIC+eqaxuBb9ukIH0FJxFGIRBGIRBGIQBYRAGYRAGYRAGhEEYhEEYhEEYEAZhEAZhEAaEQRiEQRiEQRgQBmEQBmEQBmFAGIRBGIRBGIQBYRAGYRAGYUAYhEEYhEEYhAFhEAZhEAZhEAaEQRiEQRiEQRgQBmEQBmEQBoRBGIRBGIRBGBAGYRAGYRAGYUAYhEEYhEEYhBEGYRAGYRAGYUAYhEEYhEEYhAFhEAZhEAZhEAaEQRiEQRiEAWEQBmEQBmEQBoRBGIRBGIRBGBAGYRAGYRAGYUAYhEEYhEEYEAZhEAZhEAZhQBiEQRiEQRiEAWEQBmEQBmEQBoRBGIRBGIQBYRAGYRAGYRAGhEEYhEEYhEEYEAZhEAZhEAZhhEEYhEEYhEEYEAZhEAZhEAZhQBiEQRiEQRiEAWEQBmEQBmFAGIRBGIRBGIQBYRAGYRAGYRAGhEEYhEEYhEEYEAZhEAZhEAaEQRiEQRiEQRgQBmEQBmEQBmFAGIRBGIRBGIQBYRAGYRAGYUAYhEEYhEEYhAFhEAZhEAZhEAaEQRiEQRiEQRhhEAZhEAZhEAaEQRiEQRiEQRgQBmEQBmEQBmFAGIRBGP5YwUTb2T0xhhoAAAAASUVORK5CYII=',
};

interface NftImageHelperProps {
  thumbnail: string;
  elrondIPFSGatewayUrl: string;
  href?: string;
}

const isDefaultThumbnail = (thumbnail: string) => {
  return thumbnail.includes('default.png');
};

const getImageUrlFromIPFS = (
  elrondIPFSGatewayUrl: string,
  thumbnail: string
) => {
  if (elrondIPFSGatewayUrl) {
    const CIDandImageFileName = elrondIPFSGatewayUrl.replace(
      elrondIPFSGateway,
      ''
    );
    return `${customIPFSGateway}${CIDandImageFileName}`;
  }
  return thumbnail;
};

interface WithHrefProps {
  href?: string;
}

const MaybeWithHref: FC<PropsWithChildren<WithHrefProps>> = ({
  href,
  children,
}) => {
  if (href) {
    return (
      <Box
        as="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        position="relative"
        display="block"
      >
        {children}
      </Box>
    );
  }
  return <Box position="relative">{children}</Box>;
};

export const NftImageHelper: FC<NftImageHelperProps> = ({
  thumbnail,
  elrondIPFSGatewayUrl,
  href,
}) => {
  return (
    <>
      {isDefaultThumbnail(thumbnail) ? (
        <MaybeWithHref href={href}>
          <Image
            src={getImageUrlFromIPFS(elrondIPFSGatewayUrl, thumbnail)}
            alt=""
            {...commonImagesProps}
          />
        </MaybeWithHref>
      ) : (
        <MaybeWithHref href={href}>
          <Image src={thumbnail} alt="" {...commonImagesProps} />
        </MaybeWithHref>
      )}
    </>
  );
};
