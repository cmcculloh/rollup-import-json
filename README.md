# rollup-import-json

This repository is a minimal test-case to test `import` of `.json` from both npm modules _and_ within your own code _in rollup_.

This does not work natively in rollup, but luckily [there is a rollup plugin that adds support it](https://github.com/swiing/rollup-plugin-import-assertions)!

There is also [an issue open in rollup](https://github.com/rollup/rollup/issues/4530) for it.

## Test it out!

1. clone this repo.
2. `yarn install`.
3. `yarn bundle`.

## ESM JSON imports

Node 16.15.0 added the ability to `import` JSON files!

This requires a _mandatory_ ` assert { type: "json" }` after the `import`:

```
import data from "test-json-import/data.json" assert { type: "json" };
```

Both of these should work:

```
import npmdata from "test-json-import/data.json" assert { type: "json" };
import data from "./data.json" assert { type: "json" };
```

### The Old Way

You used to have to do this:

```
import { readFile } from 'fs/promises';
const json = JSON.parse(
  await readFile(
    new URL('./some-file.json', import.meta.url)
  )
);
```

Or this:

```
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const data = require("./data.json");
```

Snippets taken from: [https://www.stefanjudis.com/snippets/how-to-import-json-files-in-es-modules-node-js/](https://www.stefanjudis.com/snippets/how-to-import-json-files-in-es-modules-node-js/)

### Link dump of resources associated with this so I can close the browser tabs:

nodejs/node@363028c
https://nodejs.org/en/blog/release/v16.15.0/
https://nodejs.org/en/about/releases/
nodejs/node@036650e...4e05026
https://nodejs.org/api/esm.html#json-modules
https://simonplend.com/import-json-in-es-modules/
https://stackoverflow.com/questions/40616272/an-import-path-cannot-end-with-ts-nodejs-and-visual-code
https://formidable.com/blog/2021/node-esm-and-exports/
https://nodejs.org/api/esm.html#enabling
https://www.stefanjudis.com/snippets/how-to-import-json-files-in-es-modules-node-js/

### CJS:

https://techsparx.com/nodejs/esnext/dynamic-import-2.html
https://github.com/FormidableLabs/node-esm-examples/tree/main/scenarios/wrapper
