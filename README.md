### Elven Tools Dapp

- Docs: [elven.tools/docs/landing-page.html](https://www.elven.tools/docs/landing-page.html)
- Demo: [dapp-demo.elven.tools](https://dapp-demo.elven.tools)
- Sneak peek: [youtu.be/ATSxD3mD4dc](https://youtu.be/ATSxD3mD4dc)

The Dapp is built using Nextjs and a couple of helpful tools. More docs soon!

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
