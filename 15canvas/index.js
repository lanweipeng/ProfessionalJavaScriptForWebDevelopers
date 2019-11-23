// var canvas = $('#canvas')
// console.log(canvas)
// if(canvas.getContext){
//   var context=canvas.getContext('2d')
//   console.log(context)
//   context.strokeStyle='red'
//   context.strokeRect(10,10,50,50)
//   context.fillStyle='#0000ff'
//   context.fillRect(30,30,50,50)
// }

// var canvas = $('#canvas')
// if(canvas.getContext){
//   var context=canvas.getContext('2d')
//   // context.fillStyle='red'
//   // context.fillRect(10,10,50,50)
//   // context.fillStyle='rgba(0,0,255,.5)'
//   // context.fillRect(30,30,50,50)
//   // context.clearRect(40,40,10,10)

//   // context.act(x,y,radius,startAngle,endAangle,counterclockwise)
//   context.beginPath()
//   context.arc(100,100,99,0,2*Math.PI,false)
//   context.moveTo(194,100)
//   context.arc(100,100,94,0,2*Math.PI,false)
//   context.moveTo(100,100)
//   context.lineTo(100,15)
//   context.moveTo(100,100)
//   context.lineTo(35,100)
//   // context.font='bold 14px Arial'
//   // context.textAlign='center'//start end
//   // context.textBaseline='middle'//top bottom
//   // context.fillText('12',100,20)
//   var fontSize=100
//   context.font=fontSize+'px Arial'
//   while(context.measureText('Hello world').width>140){
//     fontSize--
//     context.font=fontSize+'px Arial'
//   }
//   context.fillText('Hello world',10,10)
//   context.fillText('Font size is '+fontSize+'px',10,50)
//   context.stroke()
// }

//变换
// var canvas=$('#canvas')
// if(canvas.getContext){
//   var context=canvas.getContext('2d')
//   context.beginPath()
//   context.arc(100,100,99,0,2*Math.PI,false)
//   context.moveTo(194,100)
//   context.arc(100,100,94,0,2*Math.PI,false)
//   //变换原点
//   context.translate(100,100)
//   context.rotate(1)
//   context.moveTo(0,0)
//   context.lineTo(0,-85)
// context.moveTo(0,0)
// context.lineTo(-65,0)
//   context.stroke()
// }

//save restore
//save入栈 restore出栈
// var canvas=$('#canvas')
// if(canvas.getContext){
//   var context=canvas.getContext('2d')
//   context.fillStyle='#0f0'
//   context.save()
//   context.fillStyle='#f00'
//   context.translate(100,100)
//   context.save()
//   context.fillStyle='#00f'
//   context.fillRect(0,0,100,200)
//   context.restore()
//   context.fillRect(10,10,100,200)
//   context.restore()
//   context.fillRect(0,0,100,200)
// }

//阴影
var canvas=$('#canvas')
if(canvas.getContext){
  var context=canvas.getContext('2d')
  context.shadowOffsetX=5
  context.shadowOffsetY=5
  context.shadowColor='red'
  context.shadowBlur=5
  context.fillStyle='#f00'
  context.fillRect(100,100,100,100)
}