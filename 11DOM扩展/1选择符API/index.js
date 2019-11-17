//QuerySelector(css选择符) 返回第一个元素，找不到返回null
//如果传入浏览器不支持的选择符或者选择符错误，报错
// //tag
// console.log(document.querySelector('div'))
// //id
// console.log(document.querySelector('#btn'))
// //css
// console.log(document.querySelector('.fr'))
// //子代
// console.log(document.querySelector('div .fl'))

//QuerySelectorAll(css选择符) 返回NodeList实例，找不到则返回空的NodeList
//如果传入浏览器不支持的选择符或者选择符错误，报错
// //tag
// console.log(document.querySelectorAll('div'))
// //id
// console.log(document.querySelectorAll('#btn'))
// //css
// console.log(document.querySelectorAll('.fr'))
// //子代
// console.log(document.querySelectorAll('div .fl'))
// //null
// console.log(document.querySelectorAll('hhl'))

// document.matchesSelector(css选择符),调用元素与该选择符匹配，返回true，否则返回false