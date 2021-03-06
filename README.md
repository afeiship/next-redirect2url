# next-redirect2url
> Redirect url encode/decode.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-redirect2url
```

## apis
| api    | params | description   |
| ------ | ------ | ------------- |
| encode | -      | desc balabala |
| decode | -      | desc balabala |

## options - encode
| name   | default            | description                      |
| ------ | ------------------ | -------------------------------- |
| query  | 'rediect'          | The query key string             |
| encode | encodeURIComponent | The default value encode method. |
| source | -                  | The url.                         |
| target | -                  | The redirect url.                |


## options - decode

| name   | default            | description                      |
| ------ | ------------------ | -------------------------------- |
| query  | 'rediect'          | The query key string             |
| decode | decodeURIComponent | The default value decode method. |
| url    | -                  | The target url.                  |

## usage
```js
import NxRedirect2url from '@feizheng/next-redirect2url';

const str = NxRedirect2url.encode({
  source: 'http://192.168.50.181/login',
  target: 'https://www.mipengine.org?q1=1&q2=2',
});

//  'http://192.168.50.181/login?redirect=https%3A%2F%2Fwww.mipengine.org%3Fq1%3D1%26q2%3D2'


const res = NxRedirect2url.decode({
  url: 'http://192.168.50.181/login?redirect=https%3A%2F%2Fwww.mipengine.org%3Fq1%3D1%26q2%3D2',
});

/*
{
  target: 'https://www.mipengine.org?q1=1&q2=2',
  source: 'http://192.168.50.181/login'
}
*/
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-redirect2url/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-redirect2url
[version-url]: https://npmjs.org/package/@jswork/next-redirect2url

[license-image]: https://img.shields.io/npm/l/@jswork/next-redirect2url
[license-url]: https://github.com/afeiship/next-redirect2url/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-redirect2url
[size-url]: https://github.com/afeiship/next-redirect2url/blob/master/dist/next-redirect2url.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-redirect2url
[download-url]: https://www.npmjs.com/package/@jswork/next-redirect2url
