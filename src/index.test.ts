import { Memory } from "./index";

test("Check memory intial capacity", () => {
  let first = 1;
  let second = 2;
  let third = 4;
  const mem = new Memory(first, second, third);
  expect(mem.getMemory()).toStrictEqual([1, 2, 4]);
});

test("Check last assigned value", () => {
  let first = 1;
  let second = 2;
  let third = 4;
  const mem = new Memory(first, second, third);
  mem.addToMemory(5);
  expect(mem.getMemory()).toStrictEqual([2, 4, 5]);
});
