const {
  liftf,
  to,
  identity,
  identityf,
  binary,
  inc,
  add,
  twice,
  from,
} = require("./closure");
describe("identity", () => {
  test("take a argument and return a same argument", () => {
    const spy = jest.fn();
    expect(identity(4)).toBe(4);
  });
});
describe("identityf", () => {
  test("return a function", () => {
    const iden = identityf();
    expect(typeof iden).toBe("function");
    expect(iden).not.toBe("function");
  });

  test("return a argument which we passed into identityf function", () => {
    const iden = identityf(3);
    expect(iden()).toBe(3);
    const iden1 = identityf(4);
    expect(iden1()).toBe(4);
    const iden2 = identityf(5);
    expect(iden2()).toBe(5);
  });
});
describe("binary", () => {
  test("return a function", () => {
    const orignalFun = jest.fn();
    const b = binary(orignalFun);
    expect(typeof b).toBe("function");
    expect(b).not.toBe(orignalFun);
  });
  test("new function first argument is passes to orinalFuntion", () => {
    const orignalFun = jest.fn();
    const b = binary(orignalFun);
    b(2);
    expect(orignalFun).toBeCalledWith(2);
  });

  test("new function multiple argument passesd to orinalFuntion", () => {
    const orignalFun = jest.fn();
    const b1 = binary(orignalFun);
    b1(2, 2);
    expect(orignalFun).toBeCalledWith(2, 2);
  });

  test("we are passing the add function to binary function as a argument", () => {
    const add = function (a, b) {
      return a + b;
    };
    const b = binary(add);
    expect(b(12, 14)).toBe(26);
  });

  test("we are passing the add function to binary function as a argument", () => {
    const sub = function (a, b) {
      return a - b;
    };
    const b = binary(sub);
    expect(b(12, 14)).toBe(-2);
  });
  test("we are passing the add function to binary function as a argument", () => {
    const mul = function (a, b) {
      return a * b;
    };
    const b = binary(mul);
    expect(b(2, 2)).toBe(4);
  });
});
describe("inc", () => {
  test("return a function", () => {
    const spy = jest.fn();
    const n = inc(spy);
    expect(typeof n).toBe("function");
    expect(spy).not.toBe(n);
  });
  test("passed a argument to inc return with increment ", () => {
    const n = inc();
    expect(n(2)).toBe(3);
  });
  test("passed a argument to inc return with increment when we call function again", () => {
    const n = inc();
    expect(n(n(5))).toBe(7);
    expect(n(n(n(6)))).toBe(9);
  });
});
describe("add", () => {
  test("return a function", () => {
    const n = add();
    expect(typeof n).toBe("function");
  });
  test("passes argument to add function", () => {
    const n = add(12);
    expect(n()).toBe(12);
  });

  test("passes also second argument to add function", () => {
    const n = add(12);
    expect(n(7)).toBe(19);
  });
});
describe("liftf", () => {
  test("return a new function", () => {
    const spy = jest.fn();
    const lift = liftf();
    expect(typeof lift).toBe("function");
  });
  test("orignal function is taking a function", () => {
    const spy = jest.fn();
    const lift = liftf(spy);
    expect(spy).not.toBeCalledWith(lift);
  });

  test("passed a binary add function and call it with two invocation", () => {
    const add = function (a, b) {
      return a + b;
    };
    const lift = liftf(add);
    const lift1 = lift(3);
    const result = lift1(4);

    expect(result).toBe(7);
  });

  test("passed a binary add function and call it with two invocation", () => {
    const mul = function (a, b) {
      return a * b;
    };
    const lift = liftf(mul);
    const lift1 = lift(3);
    const result = lift1(4);

    expect(result).toBe(12);
  });
});
describe("twice", () => {
  test("return a function", () => {
    const t = twice();
    expect(typeof t).toBe("function");
  });
  test("add a binary function and return unary function", () => {
    const add = function (a) {
      return a + a;
    };
    const doubl = twice(add);
    expect(doubl(11)).toBe(22);
  });
  test("add a binary function and return unary function", () => {
    const mul = function (a) {
      return a * a;
    };
    const doubl = twice(mul);
    expect(doubl(11)).toBe(121);
  });
});
describe("index", () => {
  test("return a new function", () => {
    const n = from();
    expect(typeof n).toBe("function");
  });

  test("return consective value on every time call fnction", () => {
    const n = from(12);
    expect(n()).toBe(12);
  });

  test("return consective value on every time call fnction", () => {
    const n = from(12);
    n();
    n();
    expect(n()).toBe(14);
  });
});
describe("to", () => {
  test("generate to end", () => {
    const from = function (a) {
      return a;
    };
    const ins = to(from(1), 3);
    ins();
    expect(ins()).toBe(2);
    const ins1 = to(from(1), 3);
    ins1();
    ins1();
    expect(ins1()).toBe("undefine");
  });
});
