const Big = require("big.js");

const fen2yuan = (value, isString = true) => {
  let tmp = Number(new Big(value).div(100).toFixed(2));
  return isString ? `${tmp}` : tmp;
};
const yuan2fen = (value, isString = true) => {
  let tmp = Number(new Big(value).times(100).toFixed(2));
  return isString ? `${tmp}` : tmp;
};
const plus = (val1, val2, isString = true) => {
  let tmp = Number(new Big(val1).plus(val2).toFixed(2));
  return isString ? `${tmp}` : tmp;
};
const minus = (val1, val2, isString = true) => {
  let tmp = Number(new Big(val1).minus(val2).toFixed(2));
  return isString ? `${tmp}` : tmp;
};

fen2yuan("341234214");

yuan2fen("432412.76");

plus("132534545.87", 4324)
minus("132534545.87", 4324)
console.log("🚀 ~ file: index.js:25 ~ :", plus("132534545.87", 4324),
  minus("132534545.87", 4324))

  console.log(process);