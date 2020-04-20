[![polkadotjs](https://img.shields.io/badge/polkadot-js-orange?style=flat-square)](https://polkadot.js.org)
![license](https://img.shields.io/badge/License-Apache%202.0-blue?logo=apache&style=flat-square)
[![npm](https://img.shields.io/npm/v/@polkadot/apps?logo=npm&style=flat-square)](https://www.npmjs.com/package/@polkadot/apps)
[![beta](https://img.shields.io/npm/v/@polkadot/apps/beta?label=beta&logo=npm&style=flat-square)](https://www.npmjs.com/package/@polkadot/apps)
[![maintainability](https://img.shields.io/codeclimate/maintainability-percentage/polkadot-js/apps?logo=code-climate&style=flat-square)](https://codeclimate.com/github/polkadot-js/apps)

# @polkadot/apps

A Portal into the Polkadot and Substrate networks. Provides a view and interaction layer from a browser.

This can be accessed as a hosted application via [https://polkadot.js.org/apps/](https://polkadot.js.org/apps/) to explorer any of the supported Polkadot and Substrate chains

## development

Contributions are welcome!

To start off, this repo uses yarn workspaces to organize the code. As such, after cloning dependencies _should_ be installed via `yarn`, not via npm, the latter will result in broken dependencies.

To get started -

1. Clone the repo locally
2. Ensure that you have a recent LTS version of Node.js, for development purposes [Node >=10.13.0](https://nodejs.org/en/) is recommended.
3. Ensure that you have a recent version of Yarn, for development purposes [Yarn >=1.10.1](https://yarnpkg.com/docs/install) is required.
4. Install the dependencies by running `yarn`
5. Ready! Now you can launch the UI (assuming you have a local Polkadot Node running), via `yarn start`
6. Access the UI via [http://localhost:3000](http://localhost:3000)

If you want to edit -

1. available nodes go to `packages/apps-config/src/settings/endpoints.ts` and edit `AKRO_NODES`
2. chain types go to `/packages/react-api/src/akroTypes.ts`

For deploy run `yarn deploy`.

## Docker

You can run a docker container via -

  docker run --rm -it --name polkadot-ui -p 80:80 chevdor/polkadot-ui:latest

To build a docker container containing local changes -

  docker build -t chevdor/polkadot-ui:latest .

When using these Docker commands, you can access the UI via http://localhost:80 (or just http://localhost)
