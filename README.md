# Learning [nx](https://nx.dev/)

Just one of the things I'm learning. https://github.com/hchiam/learning

nx is like a modern version of [CRA (Create-React-App)](https://github.com/hchiam/learning-reactjs), but nx is meant for more than that:

https://youtu.be/2OTq15A5s0Y?t=159

https://nx.dev

https://nx.dev/getting-started

https://www.youtube.com/@nxdevtools/videos

- nx commands like `nx init` or `nx graph`: https://nx.dev/reference/commands

- nx has generators like component boilerplate scaffolding:

  ```sh
  npx nx g @nrwl/react:component shop
  ```

  or

  ```sh
  nx g @nrwl/react:component shop
  ```

  (see `<ExampleScaffoldedComponent/>` inside /text-nx-app)

  - https://github.com/hchiam/learning-nx/tree/main/test-nx-app/src/app/example-scaffolded-component
  - https://github.com/hchiam/learning-nx/blob/main/test-nx-app/src/app/app.tsx

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

Then:

```sh
# cd into new folder and run
npm run start
# or
yarn dev
# http://localhost:4200/
```
