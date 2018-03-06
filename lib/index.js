/**
 * @file jdists-loader
 *
 * jdists loader module for webpack
 * @author
 *   zswang (http://weibo.com/zswang)
 * @version 0.0.26
 * @date 2018-03-06
 */
var jdists = require("jdists");
var fs = require("fs");
var loaderUtils = require("loader-utils");
var path = require("path");
module.exports = function(source) {
  if (this.cacheable) this.cacheable();
  var query = loaderUtils.parseQuery(this.query);
  var output = jdists.build(source, {
    fromString: true,
    path: this.resource,
    remove: query.remove,
    trigger: query.trigger,
    config: query.config
  });
  return output;
};
