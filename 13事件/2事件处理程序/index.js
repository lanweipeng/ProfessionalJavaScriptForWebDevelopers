//HTML事件处理程序
//在标签定义有一个问题，如果script放在最下面，方法就会加载不到
//<div onclick='fn()'></div>
//<script>function fn(){...}</script>

//DOM0事件处理程序
//xx.onclick=fn //增加事件
//xx.onclick=null //移除事件

//DOM2事件处理程序
//xx.addEventListener('click',fn,boolean)//boolean=true 捕获阶段 boolean=false 冒泡阶段，没有特殊需要一般用false
//xx.removeEventListener('click',fn,boolean)
//匿名函数无法移除

//IE事件处理程序
//attachEvent('onclick',fn) detachEvent()
//如果attach多掉用，逆序发生