let Article = function(event){
   event.preventDefault();
   let article = document.getElementById('article').value;
   if(article != ''){
       let rand,rand1,rand2,html,newHtml;  
       document.getElementById('article').value = '';
       rand1 = Math.floor((Math.random() * 1000) + 1);
       rand2 = Math.floor((Math.random() * 1000) + 1);
       rand = rand1 + rand2;
       html = '<div class="col-md-4 coustom" onclick="show('+rand+')"><div class="progress"><div class="'+rand+' progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div></div><p id="'+rand+'">'+article+'</p><span class="play">Read</span></div>';
       document.getElementById('articles').insertAdjacentHTML('afterbegin', html);
   }else{
      alert("kita baa");
   }
}
function show(id){
   //let time = parseInt(prompt("How many article do you want to read per minute?"));
   let article = document.getElementById(id).textContent;
   document.querySelector('.play').style.visibility = "hidden";
   document.getElementById(id).textContent='';
   //var elem = document.getElementsByClassName(id);   
   var counter = 10;
   var newYearCountdown = setInterval(function(){
      console.log(counter);
      counter--;
      if (counter === 0) {
        console.log("HAPPY NEW YEAR!!");
        clearInterval(newYearCountdown);
      }
    }, 1000);
   
   //alert(article);
   //var width = 0;
   //var interval = setInterval(frame(), 10);
   //function frame() {
      //document.getElementById(id).append=article;
      //console.log(width);
      //width++;
     /* if (width == 100) {
         clearInterval(interval);
         document.getElementsByClassName('play').css="display:block";
      } else {
         alert("Hello world people");
         //width++; 
         //elem.style.width = width + '%'; 
         document.getElementById(id).append=article;
      }*/
   

}
/*document.getElementById('article1').addEventListener('click', function(){
   let article = parseInt(prompt("How many article do you want to read per minute?"));
   alert(article);
});*/
document.getElementById('save').addEventListener('click',Article);
