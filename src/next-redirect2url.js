(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var nxParam = nx.param || require('@feizheng/next-param');
  var nxHashlize = nx.hashlize || require('@feizheng/next-hashlize');
  var RETURN_VALUE = function (value) { return value; };
  var DEFAULT_OPTIONS = {
    query: 'redirect',
    transform: RETURN_VALUE,
  };

  var NxRedirect2url = nx.declare('nx.Redirect2url', {
    statics: {
      encode: function (inOptions) {
        var query = {};
        var options = nx.mix({
          encode: global.encodeURIComponent,
          source: null,
          target: null
        }, DEFAULT_OPTIONS, inOptions);

        query[options.query] = options.target;

        return options.transform(
          nxParam(
            query,
            options.source,
            { encode: options.encode }
          )
        );
      },
      decode: function (inOptions) {
        var options = nx.mix({
          decode: global.decodeURIComponent,
          url: null,
        }, DEFAULT_OPTIONS, inOptions);
        var url = options.url;
        var qs = nxHashlize(options.url);
        var target = qs[options.query];
        var source = url.substring(0, url.indexOf('?'));

        return { target: target, source: source, };
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxRedirect2url;
  }
})();