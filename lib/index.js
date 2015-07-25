
"use strict";require("earlgrey-runtime/5");var q$0 = undefined;var $targ$0 = undefined;q$0 = require("quaint");$targ$0 = function () {
  var t0$0 = undefined;var fn$0 = undefined;var $targ$1 = undefined;var $it$0 = undefined;var self$0 = undefined;$targ$1 = this;t0$0 = $targ$1;$it$0 = t0$0;self$0 = t0$0;[$it$0, self$0];fn$0 = function fn(src$0, opts$0) {
    var t$0 = undefined;var format$0 = undefined;var format$1 = undefined;var rval$0 = undefined;if (!opts$0) {
      opts$0 = {};opts$0;
    }t$0 = opts$0.format;console.log(t$0);if (opts$0.format === void 0) {
      $it$0.log("Quaint: Defaulting to HTML");format$0 = "html";format$0;
    } else {
      format$1 = opts$0.format;format$1;
    }delete opts$0.format;rval$0 = false;try {
      rval$0 = q$0.create().translate(src$0, format$1, opts$0);rval$0;
    } catch (excv$0) {
      var e$0 = undefined;e$0 = excv$0;throw e$0;rval$0;
    }return rval$0;
  };return $it$0.filter("quaint", fn$0, { extension: ".q" });
};module.exports = $targ$0;void 0;