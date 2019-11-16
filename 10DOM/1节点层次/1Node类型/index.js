// var father = $('#father')
// console.log(father.firstChild)
// console.log(father.lastChild)

//appendChild
// var father = $('#father')
// var p=document.createElement('p')
// p.textContent='10'
// father.appendChild(p)

//如果appendChild()是已经存在，那就是转移位置
// var father = $('#father')
// var p1=$('#p1')
// father.appendChild(p1)

//insertBefore(newNode,oldNode)
// var father = $('#father')
// var p=document.createElement('p')
// p.textContent='10'
// var p4=$('#p4')
// father.insertBefore(p,p4)

// 如果oldNode==null,效果和appendChild一样
// var father = $('#father')
// var p=document.createElement('p')
// p.textContent='10'
// var p4=$('#p4')
// father.insertBefore(p,null)


//insertBefore(newNode,oldNode)
// var father = $('#father')
// var p=document.createElement('p')
// p.textContent='10'
// var p4=$('#p4')
// father.replaceChild(p,p4)

//removeChild
// var father = $('#father')
// var p4=$('#p4')
// father.removeChild(p4)

//cloneNode()浅复制(复制当前节点) cloneNode(true)深复制(复制整棵树)
// var father = $('#father')
// var fatherF1 = father.cloneNode()
// console.log(fatherF1)
// var fatherF2 = father.cloneNode(true)
// console.log(fatherF2)

