//文档片
//nodeType=11
//nodeName=#document-fragment

//document.createDocumentFragment()

//在for循环中，如果直接append到文档中，会不断渲染，可以先append到文档片中，再一次性append到文档中
var ul = $('#ul')
var fragment=document.createDocumentFragment()
var li = null
for(var i = 0; i<3;i++){
  li = document.createElement('li')
  li.appendChild(document.createTextNode(i+1))
  fragment.appendChild(li)
}
ul.appendChild(fragment)