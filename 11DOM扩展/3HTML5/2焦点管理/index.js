var btn=document.getElementById('btn')
btn.focus()
console.log(document.activeElement===btn)
console.log(document.hasFocus())