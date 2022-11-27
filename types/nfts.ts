export interface NFT {
  identifier: string;
  attributes: string;
  name: string;
  media: {
    fileSize: number;
    fileType: string;
    originalUrl: string;
    thumbnailUrl: string;
    url: string;
  }[];
  url: string;
}
