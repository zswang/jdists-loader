"use strict";

const should = require("should");
const path = require("path");
const webpack = require("webpack");
const enhancedReqFactory = require("enhanced-require");
const fs = require("fs");

describe("jdists-loader", function() {
  this.timeout(5000);
  it("should", function(done) {
    webpack(
      {
        mode: "production",
        entry: path.join(__dirname, '../lib/index.js') + '?trigger=debug!' + path.resolve(__dirname, "./jdists/base.jdists"),
        output: {
          path: __dirname + "/output",
          filename: "bundle.js"
        },
        loader: {}
      },
      function(err, stats) {
        if (err) throw err;
        var json = stats.toJson();
        json.warnings.should.be.eql([]);
        json.errors.length.should.be.eql(0);
        done();
      }
    );
  });
});
