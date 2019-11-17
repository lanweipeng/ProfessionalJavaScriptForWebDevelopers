function loadCss (url) {
  var head = document.getElementsByTagName('head')[0]
  var link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = url
  link.type = 'text/css'
  head.appendChild(link)
}