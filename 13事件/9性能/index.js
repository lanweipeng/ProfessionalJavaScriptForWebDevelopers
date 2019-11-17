//事件委托
//利用冒泡
var list=$('#list')
$.addHandler(list,'click',function(event){
  event=$.getEvent(event)
  var target=$.getTarget(event)
  console.log(target.id)
  switch(target.id){
    case 'l1':{
      alert('li1')
      break
    }
    case 'l2':alert('li2')
    break
    case 'l3':alert('li3')
    break
  }
})
//移除事件处理程序