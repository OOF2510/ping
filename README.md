# Ping

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
