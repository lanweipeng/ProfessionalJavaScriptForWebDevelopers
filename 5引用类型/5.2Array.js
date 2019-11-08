//创建数组的几种方式
// let arr=new Array()
// let arr=new Array(3)
// let arr=new Array('lwp','hw')
// let arr=[]//常用方式
// let arr=[2,5,2]
// let arr=[2,5,,]//强烈不建议写的方式，不同浏览器结果可能不一样

//length
// let arr=[5,8,6]
// console.log(arr.length)
// //减少数组长度
// arr.length=2
// console.log(arr)
// //增加数组长度，其余是undefined
// arr.length=5
// console.log(arr)
// // 清空数组
// arr.length=0
// console.log(arr)
// // push
// arr[arr.length]=4
// arr[arr.length]=45
// arr[arr.length]=455
// arr[arr.length]=456
// console.log(arr)

// 判断是否是数组
// let arr=[5,8,4,5]
// console.log(Array.isArray(arr))

//api
// let arr=[5,8,4,5,58]
// console.log(arr.toString())
// console.log(arr.toLocaleString())
// toString、toLocaleString会用,隔开
// console.log(arr.valueOf())
// console.log(arr.join('-'))

// push 数组末尾添加一个数，返回数组长度
// let arr=[5,8,4,5,58]
// console.log(arr.push(55))
// console.log(arr)

//pop 数组末尾删除一个元素，把这个元素返回
// let arr=[5,8,4,5,58]
// console.log(arr)
// console.log(arr.pop())
// console.log(arr)

// unshift 数组前面添加一个数，返回数组长度
// let arr=[5,8,4,5,58]
// console.log(arr.unshift(1))
// console.log(arr)

// shift 数组前面减少一个元素，把这个元素返回
// let arr=[5,8,4,5,58]
// console.log(arr.pop())
// console.log(arr)

//reverse
// let arr=[5,8,4,5,58]
// arr.reverse()
// console.log(arr)

//sort
// let arr=[5,8,4,5,58]
// arr.sort((a,b)=>a-b)//从小到大排序
// console.log(arr)

//concat
// let arr=[5,8,4,5,58]
// let arr1=arr.concat()//拷贝出一个新数组
// console.log(arr1)
// let arr2=arr.concat(arr1)//数组拼接1
// console.log(arr2)
// let arr3=arr.concat(5,arr1)//数组拼接2
// console.log(arr3)

//slice 对原数组不改动 slice[start,end) 正序[0,1,2,3,4]||倒叙[...,-3,-2,-1]
// let arr=[5,2,5,2,22,3]
// console.log(arr.slice(2))
// console.log(arr.slice(2,3))
// console.log(arr.slice(-2))
// console.log(arr)

//splice 对原数组改动 splice[start,number,add...] splice返回删除的元素，arr剩下被删后加上add，
//add放在start后面，可多个
// let arr=[5,2,5,2,22,3]
// console.log(arr)
// console.log(arr.splice(2,3))
// console.log(arr)
// console.log(arr.splice(1,1,5,6))
// console.log(arr)

//indexOf(item,start) 不包括start 从start开始寻找，返回第一找到的位置，找不到则返回-1 必须严格相等===
// let arr=[5,2,5,2,22,3]
// console.log(arr.indexOf(5))
// console.log(arr.indexOf(7))
// console.log(arr.indexOf(5,2))
// let obj={age:13}
// let array=[obj]
// console.log(array.indexOf(obj))
// console.log(array.indexOf({age:13}))//找不到，因为不严格相等
// //应用 判断数组是否存在某个数
// if(arr.indexOf()==-1){}//如果不存在
// if(arr.indexOf()!=-1){}//如果存在

//lastIndexOf 返回最后一个找到的位置 其他同indexOf
// let arr=[5,2,5,22,5]
// console.log(arr.lastIndexOf(5))

//迭代 every some filter map forEach 参数：函数。函数参数(item,index,array)

//every 运行到第一个false结束运行  一个false，就是false，全部true才是true
// let arr=[1,2,5,5]
// let newArr=arr.every(item=>{
//   console.log(item)
//   return item<3
// })
// console.log(newArr)

//some 运行到第一个true结束运行  一个true，就是true
// let arr=[1,2,5,5]
// let newArr=arr.some((item,index,array)=>{
//   console.log(item,index,array)
//   return item>3
// })
// console.log(newArr)

//filter 过滤 把正确的筛选出来
// let arr=[1,2,5,5]
// let newArr=arr.filter(item=>{
//   console.log(item)
//   return item>3
// })
// console.log(newArr)

//map 映射
// let arr=[1,2,5,5]
// let newArr=arr.map(item=>{
//   console.log(item)
//   return item*3
// })
// console.log(newArr)

//forEach 循环
// let arr=[1,2,5,5]
// let newArr=arr.forEach((item)=>{
//   console.log(item)
// })

//reduce prev,curr,index,array
// let arr=[1,5,2,3,3]
// let res=arr.reduce((prev,curr,index,array)=>prev+curr)
// console.log(res)

//reduceRight 与reduce方向相反

