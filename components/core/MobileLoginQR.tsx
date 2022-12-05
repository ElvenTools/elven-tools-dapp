import { useEffect, useState, FunctionComponent } from 'react';
import { Flex, Box } from '@chakra-ui/react';
import { networkConfig, chainType } from '../../config/network';
import { isMobile } from '../../utils/isMobile';
import QRCode from 'qrcode';

interface MobileLoginQRProps {
  walletConnectUri: string;
}

export const MobileLoginQR: FunctionComponent<MobileLoginQRProps> = ({
  walletConnectUri,
}) => {
  const [qrCodeSvg, setQrCodeSvg] = useState('');

  useEffect(() => {
    const generateQRCode = async () => {
      if (!walletConnectUri) {
        return;
      }

      const svg = await QRCode.toString(walletConnectUri, {
        type: 'svg',
      });

      setQrCodeSvg(svg);
    };
    generateQRCode();
  }, [walletConnectUri]);

  const mobile = isMobile();

  return (
    <Box>
      <Box
        sx={{
          svg: {
            borderRadius: 'xl',
          },
        }}
        dangerouslySetInnerHTML={{
          __html: qrCodeSvg,
        }}
      />
      {mobile ? (
        <Flex justifyContent="center" background="black">
          <Box
            width="100%"
            textAlign="center"
            borderColor="ghostVerse.color1.darker"
            borderWidth={1}
            bgColor="transparent"
            py={2}
            px={6}
            mt={6}
            fontWeight="normal"
            _hover={{ bg: 'GhostVerse.color2.lighter' }}
            transition="background-color .3s"
            as="a"
            href={`${
              networkConfig[chainType]?.walletConnectDeepLink
            }?wallet-connect=${encodeURIComponent(walletConnectUri)}`}
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            Maiar Login
          </Box>
        </Flex>
      ) : null}
    </Box>
  );
};
