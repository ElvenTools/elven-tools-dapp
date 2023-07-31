### [7.3.0](https://github.com/ElvenTools/elven-tools-dapp/releases/tag/v7.3.0) (2023-07-31)
- update useElven (support for guardians)
- update dependencies

### [7.2.0](https://github.com/ElvenTools/elven-tools-dapp/releases/tag/v7.2.0) (2023-06-22)
- update useElven (new useTokenTransfer hook)
- update dependencies

### [7.1.1](https://github.com/ElvenTools/elven-tools-dapp/releases/tag/v7.1.1) (2023-06-07)
- update useElven - fix native auth login token handling
- update dependencies

### [7.1.0](https://github.com/ElvenTools/elven-tools-dapp/releases/tag/v7.1.0) (2023-06-04)
- update useElven and dependencies

### [7.0.0](https://github.com/ElvenTools/elven-tools-dapp/releases/tag/v7.0.0) (2023-05-28)
- **Breaking:** The dapp now uses the useElven version with built-in native token support. There is no fallback, so it is a breaking change. Standard string-based tokens will be deprecated across the MultiversX soon
- update dependencies

### [6.2.1](https://github.com/ElvenTools/elven-tools-dapp/releases/tag/v6.2.1) (2023-05-14)
- update [useElven](https://www.useelven.com/)
- fix problems with initialization of the HW provider

### [6.2.0](https://github.com/ElvenTools/elven-tools-dapp/releases/tag/v6.2.0) (2023-05-07)
- update [useElven](https://www.useelven.com/)
- fix HW integration when strict mode is enabled

### [6.1.0](https://github.com/ElvenTools/elven-tools-dapp/releases/tag/v6.1.0) (2023-05-02)
- update `useElven` and `sdk-core`, adjust the code
- update other dependencies
- fix NFT image IPFS fallback when MultiversX thumbnail is not ready yet

### [6.0.0](https://github.com/ElvenTools/elven-tools-dapp/releases/tag/v6.0.0) (2023-03-05)
- switch to v0.1.0 of [useElven](https://www.useelven.com/) with support for xPortal when signing
- changes for Wallet Connect pairings list
- other minor improvements

### [5.1.0](https://github.com/ElvenTools/elven-tools-dapp/releases/tag/v5.1.0) (2023-03-04)
- fix passing custom configuration, one should use .env variables for that, `useNetworkSync` will read from them

### [5.0.0](https://github.com/ElvenTools/elven-tools-dapp/releases/tag/v5.0.0) (2023-02-21)
- switch to [@useelven/core](https://www.useelven.com) when it comes to core functionality
- update dependencies

### [4.2.0](https://github.com/ElvenTools/elven-tools-dapp/releases/tag/v4.2.0) (2023-01-28)
- rebuilt in-app navigation using Next Link instead ActionButton that should be used only for triggering functions, and not navigation
- `useScQuery` can now query more complex data using abi file and result parser from MultiversX sdk-core 
- better errors handling through the network provider
- update npm dependencies

### [4.1.0](https://github.com/ElvenTools/elven-tools-dapp/releases/tag/v4.1.0) (2023-01-15)
- rebrand to multiversx (continuation)
    - npm packages are replaced
    - public api/explorer endpoints are replaced
- update dependencies
- **Breaking:** `useElrondNetworkSync` is now `useNetworkSync`

### [4.0.0](https://github.com/ElvenTools/elven-tools-dapp/releases/tag/v4.0.0) (2022-12-24)
- breaking: env vars naming changes and API proxy is now optional, check for more in the docs
- dependencies update
- demo homepage updates and rebranding

### [3.3.0](https://github.com/ElvenTools/elven-tools-dapp/releases/tag/v3.3.0) (2022-11-26)
- added Profile page with the list of minted NFTs and basic account/wallet information
- updated dependencies, including Next 13 (without changing the files structure yet)
- general API call hook added, for different API calls, not only blockchain-related. See more in the docs
- added `ProtectedPageWrapper` - client-side only page content wrapper component that will redirect to the chosen path when the user is not logged in. Wrap page content with it. Check the profile page, for example.

### [3.2.0](https://github.com/ElvenTools/elven-tools-dapp/releases/tag/v3.2.0) (2022-10-04)
- update dependencies
- show avatar from maiar mobile app if set

### [3.1.1](https://github.com/ElvenTools/elven-tools-dapp/releases/tag/v3.1.1) (2022-08-13)
- better errors catching when API is down
- fixes in displaying the numeric values
- fixes in memo usage

### [3.1.0](https://github.com/ElvenTools/elven-tools-dapp/releases/tag/v3.1.0) (2022-08-06)
- dependencies updates (erdjs libs, nextjs and others)
- small adjustments in the code

### [3.0.0](https://github.com/ElvenTools/elven-tools-dapp/releases/tag/v3.0.0) (2022-07-10)
- some of the configurations for a smart contract are now fetched automatically
- UX is essential, and the previous approach to sc-related configs was problematic and not clear
- the only gain was saving on API bandwidth, but I think it should be ok with future improvements, mainly SWR and service worker cache, but also using third-party API providers, not public ones, which should be evident for production-ready dapp
- still, you can remove the queries and configure all as constants in the app, but it won't be provided as a simple option for now because it would still introduce a lot of confusion
- new hook useElvenScQuery which uses generic useScQuery (both are now better typed)
- new return type for useScQuery - boolean, it also uses generics to be able to define typings better (preparation for future result parser)
- next, react, swr, chakra ui version updates
- better esling configuration

### [2.2.1](https://github.com/ElvenTools/elven-tools-dapp/releases/tag/v2.2.1) (2022-06-17)
- bugfix for web wallet signing, it is now required to provide the sender when creating a transaction

### [2.2.0](https://github.com/ElvenTools/elven-tools-dapp/releases/tag/v2.2.0) (2022-06-09)
- Hardware Wallet (Ledger) support

### [2.1.0](https://github.com/ElvenTools/elven-tools-dapp/releases/tag/v2.1.0) (2022-05-27)
- `useScQuery` wrapper now also incorporates `useSwrMutation` to be able to trigger calls without an initial call on the component mount
- response from `useScQuery` is now shallowed

### [2.0.0](https://github.com/ElvenTools/elven-tools-dapp/releases/tag/v2.0.0) (2022-05-05)
- migration to erdjs v10.* which had a lot of breaking changes. Please report all the bugs. If needed you can always use [v1.0.3](https://github.com/ElvenTools/elven-tools-dapp/releases/tag/v1.0.3) (erdjs v9.2.4)

### [1.0.3](https://github.com/ElvenTools/elven-tools-dapp/releases/tag/v1.0.3) (2022-04-26)
- improvements for loginToken and signatures, thanks to [@borispoehland](https://github.com/borispoehland) !

### [1.0.2](https://github.com/ElvenTools/elven-tools-dapp/releases/tag/v1.0.2) (2022-04-24)
- fix missing dependency

### [1.0.1](https://github.com/ElvenTools/elven-tools-dapp/releases/tag/v1.0.1) (2022-04-17)
- UI improvements

### 1.0.0 (2022-04-11)
- initial code pushed
