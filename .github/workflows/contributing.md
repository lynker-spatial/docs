# Contributing Guide

## Pull Request Guidelines

- Checkout a branch from the relevant branch, e.g. `main`, and merge back against that branch.

## Development Setup

We use [pnpm](https://pnpm.io/) as our package manager. To get running:

```sh
# Clone into ./lynker-spatial-docs
git clone https://github.com/lynker-spatial/docs lynker-spatial-docs
cd lynker-spatial-docs

# Install the project dependencies
pnpm install

# Start the development server
pnpm dev
```

After running the above, the current site and any changes you make
will be available, live, at http://localhost:5173.

For more information on the file structure of this repository, refer to
the [VitePress documentation on routing](https://vitepress.dev/guide/routing).
