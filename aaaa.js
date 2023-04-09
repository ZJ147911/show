const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(11111)
  }, 3088)
})
const p2 = new Promise((resolve, reject) => {
  setTimeout(
    resolve
    //错误扰态，戒为结果
    , 508, false)
})

//race:觅技/宽
//只有一个Promise变成ulfilled态，那么就结束
// Promise.race([p1, p2, p3])

Promise.allSettled([Promise.race([p1, p2])]).then(res => {
  console.log("res:", res)
}).catch(err => {
  console.log("err:", err)
  //err:22222
})