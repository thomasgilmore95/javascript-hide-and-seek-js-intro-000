function getFirstSelector(selelctor){
   document.querySelector(selector)
   }

  function nestedTarget(){
   document.querySelector('#nested .target')
 }

  function increaseRankBy(n){

 }

  function deepestChild() {
   const list = document.getElementById('app').querySelectorAll('ul.ranked-list li')
   for (let i=0, 1=list.length; i<1; i++) {
     list[i].innerHTML = (i+1).toString()
   }
