# Modern Microfrontend Architecture: A Browser Native Approach

<br>

# Run Commands

- NX cache is enabled for all commands.
  - For example, if you run a build, the second time you run a build, as long as no files have changed, NX will retreive the cache immediately
- When running a command, NX looks through all the `package.json` files in the projects specified by `pnpm-workspace.yaml` file and runs the matching target.

[More info on running NX tasks](https://nx.dev/features/run-tasks)

```bash
# install
pnpm i

# install for specific project
pnpm i -D --filter shared-ui @storybook/builder-vite

# run a single app
pnpm nx dev react-app
pnpm nx run react-app:dev

# build a single app
pnpm nx build react-app
pnpm nx run react-app:build

# run build on all projects
pnpm nx run-many -t build
pnpm nx run-many --target=build

# run build on specific projects
pnpm nx run-many -t build -p shell react-app
pnpm nx run-many --target=build --projects=shell,react-app

# run build and preview on all projects
pnpm nx run-many -t build preview
pnpm nx run-many -t build preview -p shell react-app

# See dependancy graph
pnpm graph

# See affected projects by command
pnpm nx affected -t build
pnpm nx affected:build

# Show project
# JSON
pnpm nx show project shared-ui
# Web
pnpm nx show project shared-ui --web

```

### Create a Microfrontend using vite

Run following commands

```bash
cd apps
pnpm create vite@latest
```

<br>

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace uses [Nx, Smart Monorepos · Fast CI.](https://nx.dev)** ✨

Scaffolded from pnpm workspaces using:

```bash
pnpm dlx nx@latest init
```

<br>

> This repo is a [Package Based Repo](https://nx.dev/concepts/integrated-vs-package-based)

<br>
# See which projects are affected ny command

```bash
pnpx nx affected:build
```

## Want better Editor Integration?

Have a look at the [Nx Console extensions](https://nx.dev/nx-console). It provides autocomplete support, a UI for exploring and running tasks & generators, and more! Available for VSCode, IntelliJ and comes with a LSP for Vim users.
<br>

## Set up CI!

- [Learn more how to setup CI](https://nx.dev/recipes/ci)
