import type { NextPage } from 'next';
import { Box, Text } from '@chakra-ui/react';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';

const About: NextPage = () => {
  return (
    <MainLayout>
      <HeaderMenu>
        <HeaderMenuButtons enabled={['auth', 'mint', 'about']} />
      </HeaderMenu>
      <Box
        sx={{
          a: {
            color: 'elvenTools.color3.base',
          },
        }}
      >
        <Text
          as="h2"
          fontSize="4xl"
          fontWeight="black"
          mb={10}
          mt={{ xl: 6, '2xl': 16 }}
        >
          About
        </Text>
        <Text mb={4}>
          This demo page is a full-featured minting landing page that will work
          well with the Elven Tools smart contract. You can use{' '}
          <a href="https://www.elven.tools/docs/cli-introduction.html">
            Elven Tools CLI
          </a>{' '}
          to initiate this dapp and deploy and set up the smart contract.
        </Text>
        <Text mb={4}>
          Please do not pay much attention to the UI design because I am not a
          designer. I tried to make it as pleasant and straightforward as
          possible in a short time. But if you like it, you can, of course, use
          it as it is. You can change the colors using theme settings. More in
          the docs. Also, the weird faces assets are just for testing, nothing
          special here.
        </Text>
        <Text mb={4}>
          This minting landing page will operate on proper collection on the
          devnet. So you will be able to test it, and you will be able to mint
          some NFTs with fake xEGLD money.
        </Text>
        <Text mb={4}>
          When the collection is depleted, I will redeploy another one and
          update the settings here. Btw. please contact me{' '}
          <a href="https://www.elven.tools/about.html">here</a> if I {"won't"}{' '}
          do that on time.
        </Text>
        <Text mb={4}>
          All docs on how to start working with it and configure it
          {" you'll"} find on the Elven Tools website. If there is something
          missing there, please let me know. There will be more docs and videos
          in the following weeks.
        </Text>
        <Text>
          Remember that you can make a couple of simple changes to make it work
          on the mainnet. Of course, keep in mind that it is best suited for the
          Elven Tools smart contract, but you can modify it and use it with any
          Elrond smart contract you like. You can even use it for projects not
          related to NFTs.
        </Text>
      </Box>
    </MainLayout>
  );
};

export default About;
