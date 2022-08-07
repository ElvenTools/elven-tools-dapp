### Elven Tools Dapp

- Docs: [elven.tools/docs/minter-dapp-introduction.html](https://www.elven.tools/docs/minter-dapp-introduction.html)
- Demo: [dapp-demo.elven.tools](https://dapp-demo.elven.tools)
- Elven Tools intro (including the Dapp): [youtu.be/Jou5jn8PFz8](https://youtu.be/Jou5jn8PFz8)

The Dapp is built using Nextjs and a couple of helpful tools. It allows you to interact with the Elrond blockchain, smart contracts, and especially it is prepared for the [Elven Tools Smart Contract](https://github.com/ElvenTools/elven-nft-minter-sc). But you can always modify it and adjust for your needs.

### It provides:
- Auth with 4 Elrond blockchain providers
  - Web Wallet
  - Maiar mobile app
  - Maiar DeFi browser extension
  - Ledger Nano
- React hooks for making transactions
- React hooks for querying smart contracts
- Tools and React hooks for app state synchronization
- API endpoint rewrites and 'guard' middleware
- Preconfigured UI based on Chakra UI
- The template with sections mainly used on minter dapps (it will be developed further)

### Examples

Login with one of four methods.
```jsx
const { login, isLoggedIn, error, walletConnectUri, getHWAccounts } = useLogin();

(...)

login(LoginMethodsEnum.ledger)
```

Custom mint transactions for the Elven Tools Smart Contract. There is also more generic `useScTransaction` hook.
```jsx
const { mint, pending, transaction, error } = useMintTransaction();

(...)

mint(amount)
```

Query the Elven Tools Smart Contract. There is also more generic `useScQuery` hook.
```jsx
const {
  data,
  fetch,
  isLoading,
} = useElvenScQuery<boolean>({
  funcName: 'isAllowlistEnabled',
  type: SCQueryType.BOOLEAN,
  autoInit: false,
});

(...)

fetch()
```

For more docs on how to use it check the link above, and for more examples see: [elven.tools/docs/dapp-react-hooks-and-components.html](https://elven.tools/docs/dapp-react-hooks-and-components.html)

### Tracking the progress

- [Elven Tools Dapp kanban](https://github.com/orgs/ElvenTools/projects/2)

### How to start it locally:
1. npm install -g elven-tools
2. elven-tools init-dapp
3. cd your-dapp-directory
5. npm run dev

--- or ---

1. clone or download the repo code
2. cd elven-tools-dapp
3. npm install
4. configure .env.local (you can copy the contents of the .env.example)
6. npm run dev

Check detailed docs on it here: [How to start with the Dapp](https://www.elven.tools/docs/how-to-start-with-the-dapp.html)

### Main assumption for the dapp:
- it works on Nextjs
- it uses the newest version of erdjs without the dapp-core library.
- it uses backend side rewrites to hide the API endpoint. The only exposed one is `/api`
- it uses .env file - there is an example in the repo
- it uses chakra-ui

More docs on it: [Minter Dapp introduction](https://www.elven.tools/docs/minter-dapp-introduction.html)

### Community

- Example with auth verification on the backend side: [elven-tools-dapp-with-auth](https://github.com/borispoehland/elven-tools-dapp-with-auth) thanks to [@borispoehland](https://github.com/borispoehland)
