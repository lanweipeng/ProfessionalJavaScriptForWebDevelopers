//指定事件处理程序时，无论是DOM0还是DOM2的方法，都是传入event对象
//xx.onclick=function(event){console.log(event.type)}//click

// event属性
// bubbles 是否冒泡
// cancelable 是否可以取消默认行为
// currentTarget 其事件处理程序正在处理事件的哪个元素
// defaultPrevented true表示已经调用了preventDefault()
// detail 事件相关的细节
//eventPhase 1捕获阶段 2目标阶段 3 冒泡阶段
// preventDefault 取消事件的默认行为
// stopImmediateProgagation() 取消事件的进一步捕获或冒泡，同事阻止任何事件处理程序被调用
// stopPropagation 取消事件的进一步捕获或冒泡，如果bubbles为true，则可以使用次方法
// target 事件的目标
// trusted 为true表示事件是浏览器生成。false表示事件是由开发人员通过js创建的
// type
// view 与事件关联的抽象视图

//IE中的事件对象
//如果是DOM0方法，event作为window的一个属性
//如果是attachEvent，event跟其他浏览器一样，作为参数
//属性
//cancelBubble 默认值是false，将其设置为true可以取消冒泡事件
//returnValue 默认值true，设置为false可以取消事件的默认行为
// srcElement，事件的目标
// type 被触发事件的类型