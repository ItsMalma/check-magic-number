# Check Magic Number

A library to determine the file type of a given buffer of data. It works by checking the start of the buffer against a known set of "magic numbers" that are associated with specific file types.

## What Do I Use

- [NodeJS](https://nodejs.org)
- [NPM](https://www.npmjs.com)
- [TypeScript](https://www.typescriptlang.org/)

## Install

Install this library with NPM or Yarn.

**NPM**:

```bash
npm install check-magic-number
```

**Yarn**:

```bash
yarn add check-magic-number
```

## Usage

```ts
import { readFileSync } from "fs";
import { fromBuffer } from "check-magic-number";

const extension = fromBuffer(Buffer.from(readFileSync("./example.png")));
```

Output:

```bash
png
```

## Supported Types

The following file types are currently supported:

- PNG
- JPG
- GIF

The list of supported file types can be found in the magicNumbers object in the source code.

## Limitations

This library only examines the start of the given buffer to determine the file type. This means that it may not be able to identify some file types, or it may identify a file as the wrong type if the buffer contains data that happens to match one of the magic numbers at the start of the file.

In general, this library should be considered a best effort and not relied upon for definitive identification of file types.

## Authors

- [@ItsMalma](https://www.github.com/ItsMalma)

## License

[MIT](https://choosealicense.com/licenses/mit/)
