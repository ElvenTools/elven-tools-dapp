export const avatarIdUrl = (address: string) =>
  `https://id.maiar.com/users/photos/profile/${address}`;

export const customIPFSGateway = 'https://nftstorage.link/ipfs/';

export const getOldElrondIPFSGateway = (chain: string) =>
  `https://${chain}-media.elrond.com/nfts/asset/`;
