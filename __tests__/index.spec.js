(function() {
  var nx = require('@feizheng/next-js-core2');
  var NxRedirect2url = require('../src/next-redirect2url');

  describe('NxRedirect2url.methods', function() {
    test('encode', function() {
      var str = NxRedirect2url.encode({
        source: 'http://192.168.50.181/login',
        target: 'https://www.mipengine.org?q1=1&q2=2',
      });

      expect(str).toBe('http://192.168.50.181/login?redirect=https%3A%2F%2Fwww.mipengine.org%3Fq1%3D1%26q2%3D2');
    });

    test('decode', ()=>{
      var res = NxRedirect2url.decode({
        url: 'http://192.168.50.181/login?redirect=https%3A%2F%2Fwww.mipengine.org%3Fq1%3D1%26q2%3D2',
        query:'redirect'
      });

      expect(res).toEqual({
        target: 'https://www.mipengine.org?q1=1&q2=2',
        source: 'http://192.168.50.181/login'
      });
    })
  });
})();
