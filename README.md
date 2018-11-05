[![Build Status](https://travis-ci.org/corelink-shenzhen/crc16.svg?branch=master)](https://travis-ci.org/corelink-shenzhen/crc16.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/corelink-shenzhen/crc16/badge.svg?branch=master)](https://coveralls.io/github/corelink-shenzhen/crc16?branch=master)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

# CRC-16/MODBUS

- 使用方法 -

```ts
import { encrypt } from '@corelink/crc16';
const u8a = new Uint8Array(...);
const n = encrypt(u8a)
```
