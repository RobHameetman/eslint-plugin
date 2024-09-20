<div id="top"></div>

<!--
*** Comments prefixed with "TODO" will provide further instructions for
*** customizing certain parts of this README file.
-->

# 📦 @rob.hameetman/eslint-plugin

<div align="center">
  <a href="https://github.com/RobHameetman/eslint-plugin">
    <img src="./.github/img/logo.png" alt="Logo" width="75" height="112">
  </a>

  <p align="center">
    <br />
    ESLint plugin for enterprise-strength frontend code
  </p>
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/TypeScript-v5.2.2-%23007ACC.svg?&logo=typescript&logoColor=007ACC" alt="TypeScript v5.2.2">
  </a>
  <a href="https://rollupjs.org/">
    <img src="https://img.shields.io/badge/Rollup-v4.3.0-EC4A3F.svg?&logo=rollup.js&logoColor=EC4A3F" alt="Rollup v4.3.0">
  </a>
  <a href="https://jestjs.io/">
    <img src="https://img.shields.io/badge/Jest-v29.7.0-%23C21325.svg?&logo=jest&logoColor=%23C21325" alt="Jest v29.7.0">
  </a>
  <br />
  <img src="https://img.shields.io/github/actions/workflow/status/RobHameetman/eslint-plugin/build.yml?branch=main" alt="Build">
  <img src="https://img.shields.io/github/actions/workflow/status/RobHameetman/eslint-plugin/test.yml?branch=main" alt="Tests">
  <img src="https://img.shields.io/github/actions/workflow/status/RobHameetman/eslint-plugin/deploy.yml?branch=main" alt="w">
	<img src="https://img.shields.io/github/v/release/RobHameetman/eslint-plugin?display_name=tag" alt="CI/CD">
  <br />
  <p align="center">
    <br />
    <a href="https://www.npmjs.org/package/@{{scope}}/eslint-plugin">
      <img src="https://img.shields.io/badge/Check%20It%20Out-%239CB0B2.svg?style=for-the-badge" alt="Check It Out">
    </a>
    <a href="https://www.github.com/RobHameetman/eslint-plugin">
      <img src="https://img.shields.io/badge/Request%20A%20Feature-%23AECCB3.svg?style=for-the-badge" alt="Request A Feature">
    </a>
    <a href="https://www.github.com/RobHameetman/eslint-plugin">
      <img src="https://img.shields.io/badge/Report%20A%20Defect-%23FFD0CA.svg?style=for-the-badge" alt="Report A Defect">
    </a>
    <br />
  </p>
  <p align="center">
    <br />
    <a href="#1-overview">Overview</a>
    ·
    <a href="#2-getting-started">Getting Started</a>
    ·
    <a href="#3-development">Development</a>
    ·
    <a href="#4-testing">Testing</a>
    ·
    <a href="#5-publishing">Publishing</a>
    ·
    <a href="#6-contact">Contact</a>
    ·
    <a href="#7-license">License</a>
  </p>
</div>

## §1: Overview

### §1.1: Configs

| Config                                          | Files                                                                                                      |
|------------------------------------------------|------------------------------------------------------------------------------------------------------------|
| [**⭐️ Recommended**](/lib/configs/recommended/) | _auto-magically detected_                                                                                  |
| [**Core**](/lib/configs/core/)                  | `*.js`                                                                                                     |
| [**Cypress**](/lib/configs/cypress/)            | `*.cy.js`                                                                                                  |
| [**Graphql**](/lib/configs/graphql/)            | `*.gql`, `*.graphl`                                                                                        |
| [**Jest**](/lib/configs/jest/)                  | `*.spec.js`, `*.spec.jsx`, `*.spec.ts`, `*.spec.tsx`, `*.test.js`, `*.test.jsx`, `*.test.ts`, `*.test.tsx` |
| [**Prettier**](/lib/configs/prettier/)          | _auto-magically detected_                                                                                  |
| [**React**](/lib/configs/react/)                | `*.jsx`, `*.tsx`                                                                                           |
| [**TypeScript**](/lib/configs/typescript/)      | `*.ts`                                                                                                     |

#### §1.1.1: Recommended

#### §1.1.2: Core

#### §1.1.3: Cypress

#### §1.1.4: Graphql

#### §1.1.5: Jest

#### §1.1.6: Prettier

#### §1.1.7: React

#### §1.1.8: TypeScript

<p align="right"><a href="#top">⬆️ back to top</a></p>

## §2: Getting Started

Follow these steps to get the project up and running on your local machine:

### 1. Prerequisites

- Node v21+
- NPM v10+

### 2. Installation

```bash
git clone git@github.com:RobHameetman/eslint-plugin
cd eslint-plugin
npm run setup
```

### 3. Editor Configuration

For VSCode, save the following as `editor.code-workspace` in the project root
directory:

```json
{
  "folders": [
    {
      "path": "."
    }
  ],
  "settings": {
    "editor.rulers": [
     80,
     120
    ],
    "eslint.nodeEnv": "development",
    "files.autoSave": "onFocusChange",
    "yaml.format.enable": true,
    "yaml.format.singleQuote": true,
  },
}
```

<p align="right"><a href="#top">⬆️ back to top</a></p>

## §3: Development

### NPM Commands

- `npm run build`: Create a production build artifact.
- `npm run format`: Perform static analysis and auto-fix errors.
- `npm run reset`: Perform a full `node_modules/` reset.
- `npm run setup`: Set up the project for development.
- `npm test`: Execute the Jest test suite.

### Environment Variables

#### App

| Variable           | Required | Description                                                                                                |
|--------------------|----------|------------------------------------------------------------------------------------------------------------|
| **`APP_NAME`**     | Yes      | The name of this service. Used as the namespace for exposed remotes, as well as for logging and rendering. |
| `APP_DEBUG`        | No       | Print extra information to the browser console to debug redundant re-rendering issues.[^1]                 |
| **`APP_ENDPOINT`** | Yes      | Used as the base URL for fetching data from the backend. Add more env variables below.                     |

#### Build

| Variable          | Required | Description                                                                                                          |
|-------------------|----------|----------------------------------------------------------------------------------------------------------------------|
| `HOST`            | No       | The host used by Webpack Dev Server to serve the application for local development. Default host is `localhost`.[^2] |
| `PORT`            | No       | The port used by Webpack Dev Server to serve the application for local development. Default port is `8080`.          |
| `PUBLIC_PATH`     | No       | Used by Wepback Dev Server to retrieve chunks from the chunk graph.                                                  |
| `ANALYZE_BUNDLE`  | No       | Set to `true` to enable [`webpack-bundle-analyzer`](https://www.npmjs.com/package/webpack-bundle-analyzer).          |
| `SERVE_FROM_DISK` | No       | Set to `true` to write to disk when running Webpack Dev Server.                                                      |

[^1]: `NODE_ENV` must also be `development`, meaning this works when the app is
  run with `npm start` but not `npm run prod`.
[^2]: In order to run cypress tests in Firefox, set this var to `127.0.0.1`
  locally.

<p align="right"><a href="#top">⬆️ back to top</a></p>

## §4: Testing

This project uses the following tiers of testing:

- **Unit & Integration Tests**: Use `npm run test` to run all tests.

These commands accept additional inputs following a `--` modifier as in the
common use-case examples below:

- `npm run test -- --watch`: Watch for changes and re-run all tests.
- `npm run test -- src/path/to/test.spec.ts`: Run tests in a specific test file.

<p align="right"><a href="#top">⬆️ back to top</a></p>

## §5: Publishing

Creating and merging PRs will create new package versions that you can monitor
by vising the _Actions_ tab in Github.

### Channels

- `alpha`: Used for manual testing in other packages
- `beta`: Used for UAT and testing by external consumers
- `next`: Everything that will be included in the next major version release

### Versioning

This project uses [SemVer](http://semver.org/) for versioning. For the versions
available, see the [tags on this repository](https://github.com/RobHameetman/eslint-plugin/tags).

An `beta` pre-release version will be published whenever you create a PR and
incremented as you update your changes. Once the PR is merged, a release version
is created automatically. This is handled with `semantic-release`.

Major versions should have a corresponding release in Github. Click
[here](https://github.com/RobHameetman/eslint-plugin/releases/new) to create a new release
once your version meets acceptance criteria.

<p align="right"><a href="#top">⬆️ back to top</a></p>

## §6: Contact

For inquiries and additional information, please reach out to:

**Rob Hameetman**  
_Front End Architect_ | Chicago, IL  
engineering@robhameetman.com

<p align="right"><a href="#top">⬆️ back to top</a></p>

## §7: License

Distributed under the MIT License.  
See the [LICENSE](LICENSE) file for details.

<p align="right"><a href="#top">⬆️ back to top</a></p>
