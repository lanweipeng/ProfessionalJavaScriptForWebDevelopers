console.log(document.readyState)
setTimeout(function(){
  if(document.readyState=='complete'){
    console.log('hh')
  }
},2000)
