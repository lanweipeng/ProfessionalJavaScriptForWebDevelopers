// console.log(location.hash)
// console.log(location.host)
// console.log(location.hostname)
// console.log(location.origin)
// console.log(location.pathname)
// console.log(location.protocol)
// console.log(location.search)
// console.log(location.href)
// console.log(location.port)

//访问地址加?name=lwp&age=18
// function getQueryStringArgs(){
//   var qs = (location.search.length>0?location.search.substring(1):''),
//   items = qs.length ? qs.split('&') : [],
//   args = {},
//   item = null,
//   name = null,
//   value = null,
//   i = 0,
//   len = items.length
//   for(i = 0; i < len; i ++) {
//     item = items[i].split('=')
//     name = decodeURIComponent(item[0])
//     value = decodeURIComponent(item[1])
//     if(name.length) {
//       args[name] = value
//     }
//   }
//   return args
// }
// var args = getQueryStringArgs()
// console.log(args)

//三种方式结果一样
// location.assign('https://baidu.com')
// window.location = 'https://baidu.com'
// location.href = 'https://baidu.com'//常用
//本文件第一行的属性这里也能设置值
//location.replace = 'xxx'//不能后退，而那三种方式可以后退
//location.reload()//从缓存加载--地址不变不加载
//location.reload(true)//从服务器加载--不够怎么样都重新加载