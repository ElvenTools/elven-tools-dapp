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
