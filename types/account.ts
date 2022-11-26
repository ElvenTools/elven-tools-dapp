export interface LocalAccountInstance {
  address: string;
  balance: string;
  nonce: number;
}

export interface Login {
  callbackRoute?: string;
  token?: string;
}

export interface Account {
  address: string;
  balance: string;
  nonce: number;
  shard: number;
  assets: Record<string, unknown>;
  code: string;
  codeHash: string;
  rootHash: string;
  txCount: number;
  scrCount: number;
  username: string;
  developerReward: string;
  ownerAddress: string;
  deployedAt: number;
  isUpgradeable: boolean;
  isReadable: boolean;
  isPayable: boolean;
  isPayableBySmartContract: boolean;
  scamInfo: {
    type: string;
    info: string;
  };
}
