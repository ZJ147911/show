/**
 * @Author       :赵军
 * @Copyright (c) 2023 by 赵军/公司名, All Rights Reserved.
 * @Date         :2023-02-26 12:30:48
 * @Description  :
 * @FilePath     :\项目展示\测试\b.js
 * @LastEditors  :赵军
 * @LastEditTime :2023-02-26 12:36:45
 */
const obj = {
  name: "111",
  set: (name, val) => {
    this[name]=val
    console.log("🚀 ~ file: b.js:14 ~ this:", this);
  },
  get: (name) => {
    console.log("🚀 ~ file: b.js:18 ~ this:", this);
    return this[name]
  }
}
console.log("🚀 ~ file: b.js:21 ~ obj:", obj);

obj.set('aaa',123)
console.log("🚀 ~ file: b.js:24 ~ obj:", obj);
obj.get('aaa')