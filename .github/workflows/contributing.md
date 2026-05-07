# Contributing Guide

## Pull Request Guidelines

- Checkout a branch from the relevant branch, e.g. `main`, and merge back against that branch.

## Development Setup

Starting from 0 (note that you will need administrative privileges to correctly install these):

0) We recommend [vscode](https://code.visualstudio.com/) to interact with this repository
1) [Install node](https://nodejs.org/en/download/)

* Check the box to automatically install the nessassary additional tools.
* Follow the onscreen instructions

2) Enable powershell: `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser`
3) Reboot to ensure installation took.
4) Install pnpm with: `choco install pnpm`
5) We also need git: `winget install --id Git.Git -e --source winget`
6) Reboot to ensure installation took.
7) We use [pnpm](https://pnpm.io/) as our package manager. To get running:

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
