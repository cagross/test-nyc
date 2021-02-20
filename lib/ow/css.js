/**
 * Description.
 *
 * @param {string} s - Desc.
 */
const func1 = (s) => {
  return s;
};

/**
 * Description.
 *
 * @param {object} props - Desc.
 */
const func2 = (props) => (props.testKey = 555);

/**
 * Description.
 *
 * @param {number} num1 - Desc.
 * @param {number} num2 - Desc.
 */
const func3 = (num1, num2) => {
  let result = num1 + num2;
  return result;
};

module.exports = {
  func1,
  func2,
  func3,
};
