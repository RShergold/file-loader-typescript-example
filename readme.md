#file-loader TypeScript example

A minimal example project showing how to get webpack file-loader working with TypeScript.

##To run

```
$ npm install
$ npm run build

```

##TLDR

*typings/custom.ts*

```
declare module "*.png"
```

*src/Card.tsc*

```
import * as Emoji from './slightly-smiling-face.png';

...

<img src={Emoji} alt="face"/>

```
