import { Box, Text } from '@chakra-ui/react';
import { CollectionInfoBox } from './CollectionInfoBox';
import { chainType, networkConfig } from '../config/network';
import {
  collectionTicker,
  smartContractAddress,
  collectionSize,
} from '../config/nftSmartContract';
import { shortenHash } from '../utils/shortenHash';

export const Hero = () => {
  return (
    <Box width="100%">
      <Text
        as="h1"
        fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }}
        textAlign={{ base: 'center', md: 'left' }}
        fontWeight="black"
        lineHeight="shorter"
        mb={5}
      >
        Open source Dapp template for the{' '}
        <Text
          as="a"
          color="elvenTools.color3.base"
          href="https://www.elven.tools"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          Elven Tools
        </Text>{' '}
        and{' '}
        <Text
          as="a"
          color="elvenTools.color2.base"
          href="https://www.elrond.com"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          Elrond
        </Text>{' '}
        blockchain.
      </Text>
      <Text
        as="h2"
        fontSize="lg"
        fontWeight="thin"
        textAlign={{ base: 'center', md: 'left' }}
      >
        The actual working example is connected to the Elven Tools smart
        contract deployed on the Elrond blockchain{' '}
        <Text as="span" fontWeight="medium">
          devnet
        </Text>
        ! You can play with it. I will redeploy it from time to time to keep the
        minting active. You can also use the template on the mainnet with a
        couple of config changes. Check the Elven Tools website for docs.
      </Text>
      <Box
        display="flex"
        justifyContent={{ base: 'center', md: 'flex-start' }}
        mt={10}
        gap={3}
        sx={{
          '@media screen and (max-width: 650px)': {
            flexDirection: 'column',
          },
        }}
      >
        <CollectionInfoBox
          content={collectionTicker}
          label="Collection ticker. Click for details."
          href={`${networkConfig[chainType].explorerAddress}/collections/${collectionTicker}`}
        />
        <CollectionInfoBox
          content={shortenHash(smartContractAddress, 12)}
          label={`Minter smart contract. Click for details.`}
          href={`${networkConfig[chainType].explorerAddress}/accounts/${smartContractAddress}`}
        />
        <CollectionInfoBox content={collectionSize} label="Collection amount" />
      </Box>
    </Box>
  );
};
