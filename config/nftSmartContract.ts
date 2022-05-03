// Here is the configuration specific to the Elven Tools Smart Contract
// The data can be also queried on SC, but because it is static it is better to save the api bandwidth
// It is important to keep the same values as configured on smart contract

// Elven Tools NFT Smart Contract address - replace it with yours
export const smartContractAddress =
  'erd1qqqqqqqqqqqqqpgqkzgvvwad2mjgv9j4z9k4adgd75hwk5zygtksf8wgpz';

// Amount of the NFTs in the collection
export const collectionSize = 10000;

// Number of the NFTs for one address in total
export const tokensLimitPerAddressTotal = 1000;

// Collection ticker
export const collectionTicker = 'ABCD-d34sa';

// Start or pause minting process. UI will react on this. Remember to keep itin in sync with Smart Contract. This is very important.
export const isMintingStarted = true;

// Enable/Disable the drop. UI will react on this. Remember to keep it in in sync with Smart Contract. This is very important.
export const isDropActive = false;

// The number of the NFTs for one address per current active drop can be ignored if there are no drops active
export const tokensLimitPerAddressPerDrop = 4;

// Enable/Disable allowlist. UI will react on this. Remember to keep it in in sync with Smart Contract. This is very important.
export const isAllowlistEnabled = false;

// Base transaction gas limit for the mint tx, it will be calculated, this is just a base
export const mintTxBaseGasLimit = 14000000;

// Mint endpoint name on the Smart Contract - replace with yours if you modified it
export const mintFunctionName = 'mint';

// Single token seling price - configurable on smart contract when deployed 1 EGLD = 10^18
export const tokenSellingPrice = '1000000000000000';
