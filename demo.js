(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./my", "./user"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var my = require("./my");
    var user_1 = require("./user");
    var myUser = new user_1.MyUser("dalongdemo");
    console.log(myUser.printUserName());
    console.log(my.name);
});
//# sourceMappingURL=demo.js.map