//contextmenu
//自定义菜单
// var menu=$('#menubyself')
// $(menu).addClass('hidden')
// $.addHandler(window,'contextmenu',function(event){
//   event=$.getEvent(event)
//   $.preventDefault(event)
//   menu.style.left=event.clientX+'px'
//   menu.style.top=event.clientY+'px'
//   menu.classList.remove('hidden')
  
// })
// $.addHandler(window,'click',function(event){
//   menu.classList.add('hidden')
//   $(menu).addClass('hidden')

// })

//veforeunload 
// $.addHandler(window,'beforeunload',function(event){
//   event=$.getEvent(event)
//   $.preventDefault(event)
//   alert('hh')
//   var message='are you sure to leave'
//   event.returnValue=message
//   return message
// })

//DOMContentLoaded 与load不同，DOMContentLoaded只要dom树构建完就触发，而load得一切资源都加载完毕才触发
// $.addHandler(window,'DOMContentLoaded',function(event){
//   alert('loaded')
// })
//对于不支持的浏览器，可以用
// setTimeout(function(){},0),这个settimout必须是第一个settimeout