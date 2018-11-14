window.url = 'http://101.132.137.156:8888'
console.log(window.location.href.indexOf('localhost'))
if(window.location.href.indexOf('localhost') > -1){
    window.url = 'http://localhost:8888'
}