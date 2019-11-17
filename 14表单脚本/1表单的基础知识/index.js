var form=$('#myform')
// form.submit()
//避免多次提交
$.addHandler(form,'submit',function(event){
  event=$.getEvent(event)
  var target=$.getTarget(event)
  var btn=target.elements['submit-btn']
  btn.disabled=true
})

//共有的表单字段使事件，blur，focus，change：失去焦点且值改变