function identity(args) {
  return args;
}
function identityf(args) {
  const innerFun = function () {
    return args;
  };
  return innerFun;
}
function binary(func) {
  const innerFun = function (...args) {
    return func(...args);
  };
  return innerFun;
}
function inc() {
  return function (args) {
    return args + 1;
  };
}
function add(args) {
  return function (args2) {
    return !args2 ? args : args2 + args;
  };
}
function liftf(func) {
  return function (args1) {
    return function (args2) {
      return func(args1, args2);
    };
  };
}
function twice(func) {
  return function (num) {
    return func(num);
  };
}
function from(args) {
  return function () {
    return args++;
  };
}
function to(generator, val) {
 
  return function () {
    if (generator < val) return generator++;
    else return 'undefine';
  };
}

  
module.exports = {
  identity,
  identityf,
  binary,
  inc,
  add,
  liftf,
  twice,
  from,
  to,
};
