//click 单击主鼠标
//dblclick 双击主鼠标
//mousedown 鼠标点击任意键
//mouseenter 首次移入，不冒泡，移入后代不触发
//mouseleave 移出，不冒泡，移入后代不触发
//mousemove
//mouseout //移入另一个元素
//mouseover//首次移入元素内
//mouseup 释放鼠标

//clientX,clientY->所有浏览器都支持 在浏览器视口的特点位置
// EventUtil.addHandler(window,'click',function(event){
//   event=EventUtil.getEvent(event)
//   console.log(`(client:${event.clientX},${event.clientY})`)
// })

//pageX,pageY 在视口的什么位置
// EventUtil.addHandler(window,'click',function(event){
//   event=EventUtil.getEvent(event)
//   console.log(`(page:${event.pageX},${event.pageY})`)
// })
//没滚动的情况下，client和page结果是一样的

//IE8以下不支持page
// EventUtil.addHandler(window,'click',function(event){
//   event=EventUtil.getEvent(event)
//   var pageX=event.pageX
//   var pageY=event.pageY
//   if(pageX===undefined){
//     pageX=event.clientX+(document.body.scrollLeft)||document.documentElement.scrollLeft
//   }
//   if(pageY===undefined){
//     pageY=event.clientY+(document.body.scrollTop)||document.documentElement.scrollTop
//   }
//   console.log(`page:(${pageX},${pageY})`)
// })

//屏幕坐标位置
// EventUtil.addHandler(window,'click',function(event){
//   event=EventUtil.getEvent(event)
//   console.log(`screen:${event.screenX},${event.screenY}`)
// })

//修改键
// EventUtil.addHandler(window,'click',function(event){
//   event=EventUtil.getEvent(event)
//   var keys=new Array()
//   if(event.shiftKey){
//     keys.push('shift')
//   }
//   if(event.ctrlKey){
//     keys.push('ctrl')
//   }
//   if(event.altKey){
//     keys.push('alt')
//   }
//   if(event.metaKey){
//     keys.push('meta')
//   }
//   console.log(keys.join(','))
// })

//相关元素
// var div=$('#mydiv')
// $.addHandler(div,'mouseout',function(event){
//   event=$.getEvent(event)
//   var target=$.getTarget(event)
//   var relatedTarget=$.getRelatedTarget(event)
//   console.log(target.tagName,relatedTarget.tagName)
// })

//鼠标按键
// DOM的button
// 0 主 1 滚轮 2 次
// IE8及以下的button
// 0：没有按下按钮
// 1：主
// 2：次
// 3：同时主次
// 4：滚轮
// 5：主，滚轮
// 6：次，滚轮
// 7：三个一起按
// $.addHandler(window,'mousedown',function(event){
//   event=$.getEvent(event)
//   console.log($.getButton(event))
// })

//textInput
// var textbox=$('#myText')
// $.addHandler(textbox,'textInput',function(event){
//   event=$.getEvent(event)
//   console.log(event.data)
// })
//与keypress不同，
// 1.任何可以获得焦点的元素都可以触发keypress，textInput只能在可编辑区域触发
// 2.keypress影响文本显示也能触发（退格键），而kextInput输入实际字符才能触发