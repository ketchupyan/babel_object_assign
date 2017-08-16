"use strict";

var obj = { a: 1 };
var objA = { b: 2 };
var obj1 = Object.assign({}, obj, objA);
console.log(obj1);
