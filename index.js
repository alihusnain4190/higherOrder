const hof = {};

hof.identity = function (args) {
    return args;
};

hof.identityf = function (args) {
    function innerFunction() {
        return args;
    }
    return innerFunction;
};

hof.add = function (args1, args2) {
    return args1 + args2;
};

hof.sub = function (args1, args2) {
    return args1 - args2;
};

hof.mul = function (args1, args2) {
    return args1 * args2;
};

hof.inc = function (args) {

    return args + 1;
};

hof.addf = function (args1) {
    function innerFunction(args2) {
        return args1 + args2;
    }
    return innerFunction;
};

hof.curry = function (fun, args1) {
    function binaryFunction(args2) {
        return fun(args1, args2);
    }
    return binaryFunction;
};

hof.liftf = function (fun) {
    function innerFunction(args1) {
        function inside(args2) {
            return fun(args1, args2);
        }
        return inside;
    }
    return innerFunction;
};

hof.twice = function (fun) {
    function innerFunction(args1) {
        return fun(args1, args1);
    }
    return innerFunction;
};

hof.composeu = function (sqr, dbl) {
    function innerFunction(args1) {
        let sqVal = sqr(args1);
        let dblVal = dbl(sqVal);
        return dblVal;
    }
    return innerFunction;
};

hof.composeb = function () { };

hof.limit = function () { };

hof.from = function () { };

hof.to = function () { };

hof.fromTo = function () { };

hof.element = function () { };

hof.collect = function () { };

hof.filter = function () { };

hof.concat = function () { };

hof.gensymf = function () { };

hof.gensymff = function () { };

hof.counter = function () { };

hof.revokable = function () { };

module.exports = hof;
