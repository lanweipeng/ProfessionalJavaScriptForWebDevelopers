// var leftPos = (typeof window.screenLeft =='number') ? window.screenLeft : window.screenX
// var topPos = (typeof window.screenTop == 'number' ) ? window.screenTop : window.screenY
// console.log(leftPos,topPos)

//setIntval
//写法1
// var n = 0;
// var count = 10
// function add(){
//   if(n>=count){
//     clearInterval(intervalId)
//   }
//   console.log(n)
//   n ++
// }
// var intervalId = setInterval(add, 500);
//缺点：一个间歇调用可能在另一个间歇调用前启动，不建议这种写法

//最佳写法
// var n = 0;
// var count = 10
// function add(){
//   console.log(n)
//   n ++
//   if(n<=count){
//     setTimeout(add,500)
//   }
  
// }
// var intervalId = setTimeout(add, 500);

//对话框：alert、confirm 、prompt
// alert('hh')
// if(confirm('xx')){
//   alert('ok')
// }else{
//   alert('cancle')
// }
// var resutlt =null
// while(resutlt!='密码：123456'){
//   resutlt =prompt('heihei','密码：')
// }

//显示打印对话框
// window.print()