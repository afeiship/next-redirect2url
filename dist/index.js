/*!
 * name: @jswork/next-redirect2url
 * description: Redirect url encode/decode.
 * homepage: https://github.com/afeiship/next-redirect2url
 * version: 1.0.0
 * date: 2020-11-20 22:51:05
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var nxParam = nx.param || require('@jswork/next-param');
  var nxHashlize = nx.hashlize || require('@jswork/next-hashlize');
  var DEFAULT_OPTIONS = { query: 'redirect' };

  var NxRedirect2url = nx.declare('nx.Redirect2url', {
    statics: {
      encode: function (inOptions) {
        var query = {};
        var options = nx.mix(
          {
            encode: global.encodeURIComponent,
            source: null,
            target: null
          },
          DEFAULT_OPTIONS,
          inOptions
        );

        query[options.query] = options.target;

        return nxParam(query, options.source, { encode: options.encode });
      },
      decode: function (inOptions) {
        var options = nx.mix(
          {
            decode: global.decodeURIComponent,
            url: null
          },
          DEFAULT_OPTIONS,
          inOptions
        );
        var url = options.url;
        var qs = nxHashlize(options.url);
        var target = qs[options.query];
        var source = url.substring(0, url.indexOf('?'));

        return { target: target, source: source };
      }
    }
  });


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxRedirect2url;
  }
})();
