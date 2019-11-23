//option 有HTMLOptionElement对象
// HTMLOptionElement有如下属性
// index
// label
// selected
// text
// value
var form =$('#myform')
var select=$('#select')
console.log(select.options[0].index)
console.log(select.options[0].text)
console.log(select.options[0].label)
console.log(select.options[0].selected)
console.log(select.options[0].value)

//添加子元素
var optionChild=new Option('text','value')
select.appendChild(optionChild)
var optionChild1=new Option('text1','value1')
select.add(optionChild1,undefined)

//移除选项
select.remove(0)
select.options[0]=null