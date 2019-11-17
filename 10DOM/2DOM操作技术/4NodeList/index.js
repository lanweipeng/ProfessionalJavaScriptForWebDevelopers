//NodeList,NamedNodeMap,HTMLCollection都是动态的，当文档结构发生变坏，它们都会得到更新，因此他们始终保存最新最准确的信息
//这个例子会无限循环
// var divs=document.getElementsByTagName('div')//取得div元素的HTMLCollection
// for(var i=0;i<divs.length;i++){
// var div=document.createElement('div')
// var text=document.createTextNode(i)
// div.appendChild(text)
// document.body.appendChild(div)
// }

//解决
var divs=document.getElementsByTagName('div')//取得div元素的HTMLCollection
for(var i=0,len=divs.length;i<len;i++){
var div=document.createElement('div')
var text=document.createTextNode(i)
div.appendChild(text)
document.body.appendChild(div)
}