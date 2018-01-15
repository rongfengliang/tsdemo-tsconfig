(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var MyUser = /** @class */ (function () {
        function MyUser(name) {
            this.name = name;
        }
        MyUser.prototype.printUserName = function () {
            return this.name;
        };
        return MyUser;
    }());
    exports.MyUser = MyUser;
});
//# sourceMappingURL=user.js.map