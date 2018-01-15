import  my = require("./my");
import log = require('loglevel'); 
import * as mysql  from "mysql";
import {MyUser} from "./user";
const  myUser =new MyUser("dalongdemo");
log.log(myUser.printUserName())
log.log(my.name);