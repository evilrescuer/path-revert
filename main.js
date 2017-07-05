/**
 * 使用方法：
 * 	1.修改path为source, 修改模式为add，node运行此脚本
 * 	2.fis
 * 	3.修改path为output, 修改模式为slim，node运行此脚本
 */

let revert = require('./revert').revert;

let path11 = 'E:/wamp/www/testBar-source/application/cinema/view';
let path12 = 'E:/wamp/www/testBar-source/application/cinema/controller';
let path13 = 'E:/wamp/www/testBar-source/public';

let path21 = 'E:/wamp/www/testBar-output/application/cinema/view';
let path22 = 'E:/wamp/www/testBar-output/application/cinema/controller';
let path23 = 'E:/wamp/www/testBar-output/public';


//revert(path11, "add");
//revert(path12, "add");
//revert(path13, "add");

revert(path21, "slim");
revert(path22, "slim");
revert(path23, "slim");