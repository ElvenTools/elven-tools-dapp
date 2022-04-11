### Elven Tools Dapp

TODO:
- prepare demo collection with assets
- update the demo app
- write basic docs

TODO (for later):
- prepare elven-toools-cli commands for it, keep track the version, the same as for the sc
- test logic when the drop is enabled and maybe allowlist
- improve loading of the data on the mint page after logging in
- clear TODOs
- write more hooks for particular queries (swr)
- serialization for the data which commes from the smart contract?
- verify usage of callback urls in auth
- PWA and service worker optimizations
- swr rewalidation, cache etc. better settings
- remove typescript 'any'
- add global mechanism for toasts (error, success, info, warning)
- mint page better UI (countdown when disabled, maintanance etc.)
- add Ledger nano support (requires too much testing effort so postponed)
- swr fetcher with redis cache (upstash?)
- blog implementation with markdown files as source
- document and test at least two deployment solutions (vercel, netlify)
- add 'maintanance' setting for the owner with proper page which blocks whole minting UI
- migrate to erdjs 10.*, check how to use it properly, there were changes
- tests!
- image optimization through Cloudinary or similar one
- buy on marketplaces links
- handle hardcoded labels, strings etc
- eslint from command line seems to not work
- retest all components in the context of performance, add optimizations
- make some components smaller, refactor into more smaller components, make some of them reusable where needed 


Done:
- configure subdomain and deploy
- when at least three auth services are ready test switching between the chains
- test mobile auth on phone with deeplinks
- prepare proper package.json file
- prepare meta/og tags and image for social media
- rwd design
- handle properly all static smart contract settings, for now it can be simple UI (drop, allowlist, started etc.)
- mint more than one token, add data validation
- add better notifications about the progress of transactions etc.
- simple and clean initial design mint (simple version)
- simple and clean initial design home
- handle modal for the login options and qr code
- ChackraUI configuration
- prepare component for each auth provider with one login and logout function - this will give two ways of using it, as single auth provider component, and all at once
- add useLoggedIn hook and component gatekeeper
- unify the transaction hook
- make sure that the api is accessible only by the same host
- browser extension wallet - add deeplink for mobile devices
- Extension provider
- swr + fetcher configuration + hooks for queries
- custom api configuration and rewrites to hide the api key
- there is no dapp-core here - I found it difficult to use with Nextjs (and not because of erdjs) and it is doing too much as for such dapp
- replace all setStateItem with custom setState handlers
- add web wallet support


TEMPORARY NOTES:
---

What to add to the docs:

1. Explain how the UI is built
1. Explain how the proxy for api works
2. Explain what it can and cannot do
3. Mention that there is no dapp-core
4. Mention that there is no Ledger auth for now
5. general query and transaction hook plus specific ones (here tx for mint only, plus couple of queries)
6. Explain why using public api is bad idea and what are the options
7. Explain what are the frontend cache solutions (swr + pwa)
8. Explain that it uses 9.2.4 erdjs and it will be updated to work with erdjs 10 later when it is ready
9. describe all hooks and all components which can be used
10. Write about the Chakra UI
11. How to use social icons
12. how to use custom pages, how to add them to the main menu
13. explain why there is a config for smart contract when in fact it can be queried
14. explain how to deploy it using Netlify
15. explain that it is for elven tools, but it can be used for everything with modifications


Example when the SSG is required
```javascript
export async function getStaticProps () {
  const data = await apiCall.post(
    '/vm-values/int', 
    {
      scAddress: "erd1qqqqqqqqqqqqqpgqn8u7897v7jydzyr6fg65g9sadu9q5nz0p4xsf0hjnw",
      funcName: "getLockTime",
      args: ["c5842c765d8611489bcf2f165fb7d6ea6b270954279cfaeabaf5f385e3c20bc4"]
    }
  );

  return {
    props: {
      fallback: {
        '/vm-values/int': data
      }
    }
  }
};
```

<!-- dynamic -->
get-total-tokens-left 
get-drop-tokens-left
get-minted-per-address-total
get-minted-per-address-per-drop
get-allowlist-address-check

<!-- static -->
get-nft-price
get-nft-token-id
get-nft-token-name
get-tokens-limit-per-address-total
get-tokens-limit-per-address-per-drop
