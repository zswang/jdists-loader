/*<jdists encoding="ejs" data="../package.json">*/
/**
 * @file <%- name %>
 *
 * <%- description %>
 * @author
     <% (author instanceof Array ? author : [author]).forEach(function (item) { %>
 *   <%- item.name %> (<%- item.url %>)
     <% }); %>
 * @version <%- version %>
     <% var now = new Date() %>
 * @date <%- [
      now.getFullYear(),
      now.getMonth() + 101,
      now.getDate() + 100
    ].join('-').replace(/-1/g, '-') %>
 */
/*</jdists>*/

var jdists = require("jdists");
var fs = require("fs");
var loaderUtils = require("loader-utils");
var path = require("path");

module.exports = function(source) {
  if (this.cacheable) this.cacheable();

  var query = this.query;

  var output = jdists.build(source, {
    fromString: true,
    path: this.resource,
    remove: query.remove,
    trigger: query.trigger,
    config: query.config
  });
  return output;
};
