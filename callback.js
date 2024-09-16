var add = function add(a, b) {
  return a + b;
};

var sub = function sub(a, b) {
  return a - b;
};

//callback function
var makeAcall = function (a, b, add, sub) {
  if (a > b) {
    return sub(a, b);
  } else {
    return add(a, b);
  }
};

var r = makeAcall(5, 3, add, sub);

console.log(r);
var print = function () {
  console.log("Hello World");
};
setInterval(() => {
  console.log("hello -");
}, 2000);
