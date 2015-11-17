"use strict";

var should = require("should");
var path = require("path");
var webpack = require("webpack");
var enhancedReqFactory = require("enhanced-require");
var fs = require("fs");

var CR = /\r/g;
var pathToJdistsLoader = path.resolve(__dirname, "../index.js");

describe("jdists-loader", function() {
  this.timeout(5000);
  it("should", function(done) {
    webpack({
      entry: pathToJdistsLoader + '?trigger=debug!' +
        path.resolve(__dirname, "./jdists/base.jdists"),
      output: {
        path: __dirname + "/output",
        filename: "bundle.js"
      }
    }, function(err, stats) {
      if (err) throw err;
      var json = stats.toJson();
      json.warnings.should.be.eql([]);
      json.errors.length.should.be.eql(0);
      done();
    });
  });
});