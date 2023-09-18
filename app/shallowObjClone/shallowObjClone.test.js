const shallowObjClone = require("./shallowObjClone");

test("Shallow obj clone", () => {
  const myObj = { name: "Traveler", number: 42 };

  expect(shallowObjClone(myObj)).toStrictEqual(myObj);
});
