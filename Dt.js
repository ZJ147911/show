const a = ["(0,49]", "[50,59]", "[60,69]", "[70,79]", "[80,89]", "[90,99]", "[100,109]", "[110,119]", "[120,129]", "[130,139]", "[140,149]", "[150,200]", "[200,300]", "[300,500]", "[500+]", "其他"]
 let options= [
]

a.forEach((item) => {
  options.push({

                value:item,
                label: item
  })
})
console.log('🚀 ~ file: Dt.js:11 ~ a.forEach ~ options:', options)