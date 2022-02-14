let ul=document.querySelectorAll('ul')[0]
let menu=document.querySelectorAll('.menu')[0]
let body=document.querySelectorAll('body')[0]
let button=document.querySelectorAll('.btn')[0]
let nav=document.querySelectorAll('nav')[0]
let li=document.querySelectorAll('li')
let naviga=document.querySelectorAll('.navigation')[0]
// function for the hamburger menu
menu.addEventListener('click',function menu(){
   ul.classList.toggle('hmaburgermenu')
   naviga.classList.toggle('fixed')
})
li.forEach(item=>{
   item.addEventListener('click',none())
})
function none(params) {
   ul.classList.remove('hmaburgermenu')
   naviga.classList.remove('fixed')

}







// button.addEventListener('click',handle())
