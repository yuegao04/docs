# Walrus Docs

User documentations for [Walrus](https://github.com/seal-io/walrus).

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Tag a version

```shell
yarn run docusaurus docs:version 0.1
```

### Release

The documentation is published using GitHub Pages at `https://seal-io.github.io/docs/`, and linked at `https://seal.io`.

Release commands:
```shell
GIT_PASS=<github personal access token>
GIT_USER=<github username> yarn deploy
```