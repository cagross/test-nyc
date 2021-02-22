const tape = require("tape");
const { func1, func2, func3 } = require("../../../lib/ow/css");

tape("Tests of functions.", (t) => {
  let actual, expected;

  expected = 555;
  actual = func1(555);
  t.equals(actual, expected, "Test description for func1.");

  const props = {};
  func2(props);
  expected = 555;
  actual = props.testKey;
  t.equals(actual, expected, "Test description for func2.");

  expected = 5;
  actual = func3(2, 3);
  t.equals(actual, expected, "Test description for func3.");

  t.end();
});
