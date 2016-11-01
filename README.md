# maq

[![Build Status](https://travis-ci.org/retorillo/maq.svg?branch=master)](https://travis-ci.org/retorillo/maq)
[![Coverage Status](https://coveralls.io/repos/github/retorillo/maq/badge.svg?branch=master)](https://coveralls.io/github/retorillo/maq?branch=master)
[![Dependency Status](https://gemnasium.com/badges/github.com/retorillo/maq.svg)](https://gemnasium.com/github.com/retorillo/maq)
[![NPM](https://img.shields.io/npm/v/maq.svg)](https://www.npmjs.com/package/maq)
[![MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

**Ma**ke **q**ueue (Array object) by specifing each number of elements.

```javascript
const maq = require('maq');
var array = maq({ work: 3, sleep: 2 });
// array == { 'sleep', 'work', 'work', ... }
```

Also, command line interface is avaiable.

```bash
$ maq --work 3 --sleep 2

work
sleep
work
work
sleep
```

## License

Copyright (C) 2016 Retorillo

Distributed under the MIT license.
