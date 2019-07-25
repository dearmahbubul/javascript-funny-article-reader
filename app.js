class controller{

   construct(article){
      this.article = article;
   }

   showData(){
       let i=1;
       this.articles.push(this.article);
       console.log("Inside "+this.articles);
       this.articles.forEach(function(article) {
            document.getElementById('article'+i).textContent = article;
	    i++;
       }); 	
   } 

}
let Article = function(event){
   event.preventDefault();
   let article = document.getElementById('article').value;
   if(article != ''){
       document.getElementById('article').value = '';
       obj = new controller(article);
       obj.showData();
   }
}
/*document.getElementById('article1').addEventListener('click', function(){
   let article = parseInt(prompt("How many article do you want to read per minute?"));
   alert(article);
});*/
document.getElementById('save').addEventListener('click',Article);
