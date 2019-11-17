//getElementsByClassName() 返回NodeList
// var fr = document.getElementsByClassName('fr')
// console.log(fr)

//classList
//add(value)
//contains(value) 包含返回true，否则false
//remove(value)
//toggle(value) 已存在，删除，不存在，添加

var div = document.getElementById('div')
div.classList.remove('disabled')