is-tar
-

NodeJS utility function for checking if a specific path/file name has a valid tar extension

## Prerequisites
---
NodeJS or Vanilla Javascript or Typescript

## Installation
---
NodeJS / TypeScript

`
$ npm install is-tar
`

Browser

`
    <script src="https://unpkg.com/validator-is-tar@1.0.11/dist/is-tar.js"></script>
`

Javascript
`
$ git clone
`

### Parameters

```typescript
type isTar = (value: string, checkExtensionOnly?: boolean = false)

```

## Usage
---
```javascript
import { isTar } from  'is-tar'; // Skip this if you imported from unpkg

const validFileName     = isTar("fds.tar.gz");
// true

const invalidFileName   = isTar("fds.tar.gz", true);
// false because it checks for an extension only

const validExtension    = isTar(".tar.gz");
// true

```


## Examples

```javascript
const isTar = require('is-tar');

isTar('cowsay-0.8.0.tar.gz') // true

isTar('cowsay-0.8.0.tar.gz.gz') // false

isTar('.tar.gz') // true

isTar('.tar.gz', true)
```

## FAQ
---
### **Why does this exist? It's something super simple**

The reasonings behind buiilding utility packages like `is-tar` are:
- So that you don't have to build it again or copy/paste snippets from the internet that you're not sure how they work
- Performance: The package contains benchmarks for the this function and also compared to some other ways to do it as well as comparisons with the ones that come up on google/stackoverflow on a search.
- Follows GNU docs: I am keeping things as close to the core and GNU standards as possible. The list of available compression programs(aka extensions) is pulled directly from GNU's manual ( https://www.gnu.org/software/tar/manual/html_chapter/Formats.html#auto_002dcompress ) then parsed, indexed as a tree and updating the package. *TODO: Automate this*
