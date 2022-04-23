### Elven Tools Dapp

- Docs: [elven.tools/docs/landing-page.html](https://www.elven.tools/docs/landing-page.html)
- Demo: [dapp-demo.elven.tools](https://dapp-demo.elven.tools)
- Sneak peek: [youtu.be/ATSxD3mD4dc](https://youtu.be/ATSxD3mD4dc)

The Dapp is built using Nextjs and a couple of helpful tools. More docs soon!

### How to start it locally:
- Clone/Download the repository code
- Install npm dependencies
- Configure basic .env variables
- Configure smart contract information (optionally other things too).
- Run the dapp locally
- Prepare it for deployment

More docs on it: [How to start with the Dapp](https://www.elven.tools/docs/how-to-start-with-the-dapp.html)

### Main assumption for the dapp:
- it works on Nextjs
- it uses erdjs 9.* without the dapp-core library. It will be migrated to erdjs 10.* asap
- it uses backed side redirections to hide the API endpoint. The only exposed one is `/api`
- it uses .env file - there is an example in the repo
- it uses a couple of config files in the 'config' directory
- it uses chakra-ui

More docs on it: [Minter Dapp introduction](https://www.elven.tools/docs/minter-dapp-introduction.html)
