# Learning [nx](https://nx.dev/)

Just one of the things I'm learning. https://github.com/hchiam/learning

https://youtu.be/2OTq15A5s0Y?t=159

https://nx.dev

https://nx.dev/getting-started

https://www.youtube.com/@nxdevtools/videos

- nx commands like `nx init` or `nx graph`: https://nx.dev/reference/commands

- `nx g @nrwl/workspace:ci-workflow` to set up things like GitHub CI automation: https://nx.dev/packages/workspace/generators/ci-workflow

- `npx nx@latest init` or just `nx init` automatically migrates a create-react-app to an nx app with [vite](https://github.com/hchiam/learning-vite) support https://www.youtube.com/watch?v=zvYb7XCLQzU

No need to `yarn add nx` nor `yarn global add nx` to set up globally on your computer with [`yarn`](https://github.com/hchiam/learning-yarn) - instead do this:

```sh
yarn create nx-workspace
```

or with `npx`:

```sh
npx create-nx-workspace
```

and follow the CLI prompts.

But if you want to be able to run `nx ...` commands directly, run `yarn global add nx` or `npm install -g nx`
