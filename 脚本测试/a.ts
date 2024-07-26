const fun = (val:boolean=false) => {
  return new Promise<string>((resolve, reject) => {
    if (val) {
      reject("error");
    }
		setTimeout(() => {
			resolve("12");
		}, 1000);
	});
};
const fun2 =async() => {
  const res1 = await fun(true).catch((err) => {
		console.log('🚀 ~ file: a.ts:13 ~ fun2 ~ err:', err)
	});
  console.log('🚀 ~ file: a.ts:16 ~ fun2 ~ res1:', res1)
};
fun2();

const fun3 = async() => {
  const res1 = await fun().catch((err) => {
    console.log('🚀 ~ file: a.ts:21 ~ fun3 ~ err:', err)
  })
  console.log('🚀 ~ file: a.ts:24 ~ fun3 ~ res1:', res1)
};

fun3()
