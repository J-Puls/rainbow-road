# rainbow-road
Simplified API for colored JavaScript console text

## Installation

`npm i rainbow-road`

`yarn add rainbow-road`

## Usage
Import the `rainbow-road` module into your project.

```javascript
/* ES5 */
const rr = require("rainbow-road")

/* ES6 */
import rr from "rainbow-road"
```

Use the appropriate function in place of `console.log()`:

```javascript
rr.err("YOUR TEXT")    // outputs a red colored console error message

rr.gen("YOUR TEXT")    // outputs a standard colored console log message

rr.info("YOUR TEXT")   // outputs a cyan colored console info message

rr.succ("YOUR TEXT")   // outputs a green colored console log message

rr.unimp("YOUR TEXT")  // outputs a grey colored console log message

rr.warn("YOUR TEXT")   // outputs a yellow colored console log message
```

![rainbow road](https://thumbs.gfycat.com/AbsolutePeacefulHammerheadshark-size_restricted.gif)
