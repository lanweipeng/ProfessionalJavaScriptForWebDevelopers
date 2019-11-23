// var password=$('#password')
// $.addHandler(password,'keypress',function(event){
//   event=$.getEvent(event)
//   var target=$.getTarget(event)
//   var charCode=$.getCharCode(event)
//   if(!/\d/.test(String.fromCharCode(charCode))&&charCode>9&&!event.ctrKey){
//     $.preventDefault(event)
//   }
// })
//自动切换焦点
var form=$('#myform')
$.addHandler(form,'keypress',function(event){
  event=$.getEvent(event)
  var target=$.getTarget(event)
  var keyCode=$.getCharCode(event)
 if(keyCode==13){
   for(var i=0,len=form.elements.length-1;i<len;i++){
     if(form.elements[i]===target){
       form.elements[i+1].focus()
     }
   }
  }
})

//h5 api
//required
//其他类型 email url
//范围
//<input min='0' max='100' step='5' type='text' />
//输入模式
//<input pattern=/\d/ type='text' />