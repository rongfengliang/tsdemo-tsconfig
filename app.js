var asciitable = require("asciitable");s
var  mysql = require("mysql");
var options = {
  skinny: true,
  intersectionCharacter: "&&&&&",
  columns: [
    {field: "ab", name: "First"},
    {field: "b",  name: "Second"},
    {field: "c",  name: "Third"},
    {field: "de", name: "Fourth"},
  ],
};
 
var table = asciitable(options, [
  {ab: "a",              b: "b",   c: "c"            },
  {ab: "asddsfa",        b: "sss", c: "zxc"          },
  {ab: "dsgvdgsdvgssdf", b: "x",   c: "eryty"        },
  {ab: "m",              b: "n",   c: "o",    de: "p"},
  {ab: 5,                b: null,  c: {},     de: [] },
  {ab: function(){}},
]);
 
console.log(table);