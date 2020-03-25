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

hof.composeb = function (fun1, fun2) {
    function innerFunction(a, b, c) {
        let addVal = fun1(a, b);
        let mulVal = fun2(addVal, c);
        return mulVal;
    }
    return innerFunction;

};

hof.limit = function (fun, limit) {

    let count = 0;
    function innerFunction(val1, val2) {
        count++;
        if (count <= limit) {
            return fun(val1, val2);
        }
    }
    return innerFunction;
};

hof.from = function () {
    let count = 0;
    function innerFunction() {
        return count++;
    }
    return innerFunction;
};

hof.to = function (fun, limit) {

    function innerFunction() {
        let val = fun();
        if (val < limit) {
            return val;
        }
    }
    return innerFunction;
};
hof.fromTo = function (val, limit) {
    function innerFunction() {
        if (val === 0) {
            val++;
            return 0;
        }
        if (val < limit) {
            return val++;
        }
    }
    return innerFunction;
};

hof.element = function () {

};

hof.collect = function () { };

hof.filter = function () { };

hof.concat = function () { };

hof.gensymf = function () { };

hof.gensymff = function () { };

hof.counter = function () { };

hof.revokable = function () { };

module.exports = hof;
