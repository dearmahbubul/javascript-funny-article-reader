let Article = function(event){
    event.preventDefault();
    let article = document.getElementById('article').value;
    if(article != ''){
        let rand,rand1,rand2,html,newHtml;
        document.getElementById('article').value = '';
        rand1 = Math.floor((Math.random() * 1000) + 1);
        rand2 = Math.floor((Math.random() * 1000) + 1);
        rand = rand1 + rand2;
        html = '<div class="col-md-4 coustom" onclick="show('+rand+')"><p id="'+rand+'">'+article+'</p><span class="play">Read</span></div>';
        document.getElementById('articles').insertAdjacentHTML('afterbegin', html);
        swal("Success", "Article Saved!", "success");
        document.getElementById('save').disabled = true;
    }
};
function show(id){
    //let time = parseInt(prompt("How many word do you want to read per minute?"));
    let progress,time,second,content,speed,passSecond;
    const minute = 60;
    let article = document.getElementById(id).textContent;
    contents = article.split(" ");
    swal("How many word do you want to read per minute?", {
        content: "input",
    })
        .then((value) => {
            if(value > 0){
                time = value;
                second = 0;
                speed = (60*1000)/time;
                passSecond = 0;
                $('#exampleModalCenter').modal('show');
                var newYearCountdown = setInterval(function(){
                    if(contents[second+2] === undefined){
                        clearInterval(newYearCountdown);
                    }
                    document.querySelector('.modal-body').innerHTML = contents[second];
                    second++;
                    passSecond = (passSecond+(speed/1000));
                    document.querySelector('.modal-title').innerHTML = 'Word No: '+second +'  Time: '+ passSecond+' s';

                }, speed);
            }else{
                swal("Error", "Value Should be greater than 0!", "error");
            }
        });
}
document.getElementById('save').addEventListener('click',Article);
document.getElementById('article').addEventListener('change',function () {
    alert("Okay");
    if(document.getElementById('article').value != '')
    {
        document.getElementById('save').disabled = false;
    }
    else
    {
        document.getElementById('save').disabled = true;
    }
});