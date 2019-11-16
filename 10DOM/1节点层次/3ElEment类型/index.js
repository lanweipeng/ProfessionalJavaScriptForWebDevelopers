//nodeType=1
//标签名：nodeName，tagName
//判断标签 if(xx.tagName.toLowerCase()=='div')//稳妥
// var p = document.createElement('p')
// console.log(p.nodeType)
// console.log(p.nodeName)
// console.log(p.tagName)

//设置和获取值
// var p=$('#p')
// p.className='pp'
// p.id='hh'
// p.dir='rtl'//right-to-left----left-to-right
// p.title='hhhh'
// p.lang='javascript'

//getAttribute 获取某个属性的值(不常使用)
// var p=$('#p')
// console.log(p.getAttribute('class'))//属性的名称

//setAttribute 如果存在，覆盖，不存在，就新增。可以自定义属性，统一属性为小写

// var p=$('#p')
// p_attr=p.attributes
// console.log(p_attr.getNamedItem('class'))
// console.log(p_attr.removeNamedItem('class'))
// console.log(p_attr.setNamedItem('class'))
// console.log(p_attr.item(1))

//在IE中，createElement
// var div=document.createElement("<div id=\"myNewDiv\" class=\"box\"></div>")
// document.body.appendChild(div)

// father.insertBefore(new,oldChild) 
// var div=document.createElement('div')
// var p=$('#p')
// document.body.insertBefore(div,p)

//father.replaceChild(new,old)
// var div=document.createElement('div')
// var p=$('#p')
// document.body.replaceChild(div,p)

//元素的字节点
{/* <ul id="list">
    <li>l1</li>
    <li>l2</li>
    <li>l3</li>
  </ul> */}
var list=$('#list')
console.log(list.childNodes)
for(var c of list.childNodes){
  if(c.nodeType==1){
    //...
  }
}
//空隙的地方就是text，其他是li，如果把空袭删掉，就只有li
{/* <ul id="list"><li>l1</li><li>l2</li><li>l3</li></ul> */}