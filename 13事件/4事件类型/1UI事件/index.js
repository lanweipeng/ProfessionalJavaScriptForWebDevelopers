//UI事件
// DOMActivate:元素已经被用户激活
// load：
//unload 完全卸载
// abort 用户停止下载过程
// error 当js错误时在window上面触发
// select 当用户选择文本框中的一或多字符时触发
// resize 当窗口或框架的大小变化时在window或框架上面触发
// scroll：当用户滚动带滚动条的元素中的内容时，在该元素上面触发

// EventUtil.addHandler(window,'load',function(event){
//   alert('js-loaded')
// })

// var img=$('#img')
// EventUtil.addHandler(img,'load',function(event){
//   event=EventUtil.getEvent(event)
//   alert(EventUtil.getTarget(event).src)
// })

// EventUtil.addHandler(window,'resize',function(event){
//   console.log('resize')
// })

EventUtil.addHandler(window,'scroll',function(){
  if(document.compatMode==='CSS1Compat'){
    console.log(document.documentElement.scrollTop)
  }else{
    console.log(document.body.scrollTop)
  }
})