### Elven Tools Dapp

- Docs: [elven.tools/docs/landing-page.html](https://www.elven.tools/docs/landing-page.html)
- Demo: [dapp-demo.elven.tools](https://dapp-demo.elven.tools)
- Sneak peek: [youtu.be/ATSxD3mD4dc](https://youtu.be/ATSxD3mD4dc)

The Dapp is built using Nextjs and a couple of helpful tools. More docs soon!

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
- it uses erdjs 10.* without the dapp-core library.
- it uses backed side redirections to hide the API endpoint. The only exposed one is `/api`
- it uses .env file - there is an example in the repo
- it uses a couple of config files in the 'config' directory (it will be simplified in the future)
- it uses chakra-ui

More docs on it: [Minter Dapp introduction](https://www.elven.tools/docs/minter-dapp-introduction.html)

### Community

- Example with auth verification on the backend side: [elven-tools-dapp-with-auth](https://github.com/borispoehland/elven-tools-dapp-with-auth) thanks to [@borispoehland](https://github.com/borispoehland)
