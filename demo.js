"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const my = require("./my");
const log = require("loglevel");
const user_1 = require("./user");
const myUser = new user_1.MyUser("dalongdemo");
log.log(myUser.printUserName());
log.log(my.name);
