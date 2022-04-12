### Elven Tools Dapp

- Demo: [dapp-demo.elven.tools](https://dapp-demo.elven.tools)
- Sneak peek: [youtu.be/ATSxD3mD4dc](https://youtu.be/ATSxD3mD4dc)

The Dapp is built using Nextjs and a couple of helpful tools. For now, there is no documentation, but it will come shortly. The first significant wave of docs and walkthrough videos should appear after 18 April. So please be patient.

### How to start it locally:
- cp .env.example .env.local
- npm install
- npm run dev

### Main assumption for the dapp:
- it works on Nextjs
- it uses erdjs 9.* without the dapp-core library. It will be migrated to erdjs 10.* asap
- it uses backed side redirections to hide the API endpoint. The only exposed one is `/api`
- it uses .env file - there is an example in the repo
- it uses a couple of config files in the 'config' directory
- it uses chakra-ui

#### Here are rough notes on what would be done. It will be cleaned up and prioritized soon:

- prepare elven-toools-cli commands for it, keep track of the version, the same as for the sc
- test logic when the drop is enabled and maybe allowlist
- improve loading of the data on the mint page after logging in
- clear TODOs
- write more hooks for particular queries (swr)
- serialization for the data which comes from the smart contract?
- verify usage of callback URLs in auth
- PWA and service worker optimizations
- SWR revalidation, cache etc. better settings
- remove typescript 'any.'
- add a global mechanism for toasts (error, success, info, warning)
- mint page better UI (countdown when disabled, maintenance etc.)
- add Ledger nano support (requires too much testing effort so postponed)
- SWR fetcher with Redis cache (upstash?)
- blog implementation with markdown files as source
- document and test at least two deployment solutions (vercel, netlify)
- add the 'maintenance' setting for the owner with the proper page, which blocks the whole minting UI
- migrate to erdjs 10.*, check how to use it properly. There were changes
- tests!
- image optimization through Cloudinary or a similar one
- buy on marketplaces links
- handle hardcoded labels, strings, etc
- eslint from the command line seems not to work
- retest all components in the context of performance, add optimizations
- make some components smaller, refactor them into smaller components, make some of them reusable where needed 

#### And here are notes on what will land in the docs soon:

1. Explain how the UI is built
1. Explain how the proxy for API works
2. Explain what it can and cannot do
3. Mention that there is no dapp-core
4. Mention that there is no Ledger auth for now
5. general query and transaction hook plus specific ones (here tx for mint only, plus a couple of queries)
6. Explain why using public API is bad idea and what are the options
7. Explain what the frontend cache solutions (SWR + PWA) are
8. Explain that it uses 9.2.4 erdjs, and it will be updated to work with erdjs 10 later when it is ready
9. describe all hooks and all components which can be used
10. Write about the Chakra UI
11. How to use social icons
12. how to use custom pages, how to add them to the main menu
13. explain why there is a config for a smart contract when in fact, it can be queried
14. explain how to deploy it using Netlify
15. explain that it is for elven tools, but it can be used for everything with modifications
