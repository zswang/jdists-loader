/**
 * @file jdists-loader
 *
 * jdists loader module for webpack
 * @author
 *   zswang (http://weibo.com/zswang)
 * @version 0.0.13
 * @date 2015-11-17
 */
var jdists = require('jdists');
var fs = require('fs');
var loaderUtils = require('loader-utils');
var path = require('path');
module.exports = function(source) {
  var loaderContext = this;
  var query = loaderUtils.parseQuery(this.query);
  return jdists.build(source, {
    fromString: true,
    path: this.resource,
    remove: query.remove,
    trigger: query.trigger,
    config: query.config
  });
};
