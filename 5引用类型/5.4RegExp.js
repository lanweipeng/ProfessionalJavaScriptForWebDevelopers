// let express=/patterns/flags
// g:全局 i:不区分大小写 m：这行找完找下一行
// let pattern1=/\.a/g
// let pattern2=new RegExp('\\.a','i')
// console.log(pattern1.test('sss.a'))//能找到返回true 找不到返回false

// let pattern=/a/g
// console.log(pattern.ignoreCase)
// console.log(pattern.global)
// console.log(pattern.multiline)
// console.log(pattern.source)
// console.log(pattern.lastIndex)

// let str='asdfjkesfkefkldefsa'
// let pattern =/s/g;
// let matches1=pattern.exec(str)//设置全局也只返回一个
// console.log(matches1)
// let matches2=pattern.exec(str)//exec第二次调用才重新往下走
// console.log(matches2.index)
// console.log(matches2.input)
// console.log(matches2)

// let str='efewkief'
// let pattern=/(..)e/m
// if(pattern.test(str)){
//   console.log(RegExp.input)
//   console.log(RegExp.lastMatch)
//   console.log(RegExp.leftContext)
//   console.log(RegExp.rightContext)
//   console.log(RegExp.lastParen)
//   console.log(RegExp.multiline)
//   console.log(RegExp['$_'])
//   console.log(RegExp['$&'])
//   console.log(RegExp['$`'])
//   console.log(RegExp["$'"])
//   console.log(RegExp['$+'])
//   console.log(RegExp['$*'])
//   console.log(RegExp.$1)
//   console.log(RegExp.$2)
// }