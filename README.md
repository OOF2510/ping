# Ping

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/ea0d6864cd1d4ea9a03983403283de4c)](https://app.codacy.com/gh/OOF2510/ping?utm_source=github.com&utm_medium=referral&utm_content=OOF2510/ping&utm_campaign=Badge_Grade_Settings)

An NPM module to ping a domain

# Installation

### Yarn

```bash
yarn add @oof2510/ping
```

### NPM

```bash
npm i @oof2510/ping
```

# Example code

```js
const { ping } = require("@oof2510/ping");

async function p() {
  let googlePing = await ping("google.com");
  console.log(googlePing);
}
p();
```
# Cli usage
```
simple-ping [options] [command]

  Commands:
    help     Display help
    version  Display version

  Options:
    -H, --help     Output usage information
    -h, --host     host to ping
    -v, --version  Output the version number
```
