$.addHandler(window,'load',function(){
  // var editor=$('#richedit')
  // editor.document.designMode = "on"
  // w.document.contentEditable = "true";
// w.document.execCommand("bold", false, null);

})
window.onload=function(){
  var editor=$('#richedit')
  editor.document.designMode = "on"
}
var div = document.getElementById("richedit");
div.contentEditable = "true";
// frames["richedit"].document.execCommand("bold", false, null);