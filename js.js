var startbtn = document.getElementById('startgame');
var clickme = document.getElementById('clickme');
var scoreinfo = document.getElementById('scoreinfo');
var stopbtn = document.getElementById('stopgame');
var startime, endtime, waittime, gamestatus = false, stop = false;

function myFunction() {
    
    if(!gamestatus){
        console.log('ddd');
        gamestatus = true;
        waittime = Math.random()*2000+2000;
        setTimeout(function(){
       
            var top = Math.random()*500;
            var left = Math.random()*700;
            starttime = Date.now();
            
            clickme.style.background = '#' + Math.random().toString(16).substr(-6);
            clickme.style.top = top + "px";
            clickme.style.left = left + "px";
            clickme.style.display = "block";  
        }, waittime);
    
    }


}
function myFucntioclick() {
   console.log(this);
/*this.innerHTML = "CLICKED";*/
    gamestatus=false;
    endtime = Date.now();
    this.style.display="none";
    console.log('clicked');
    scoreinfo.innerHTML = 'Twoj czas reakcji wynosi: ' + (endtime - starttime)/ 1000 + ' sec.';             myFunction();
}

/*function randomColor() {
    var letters = "0123456789ABCDEF".split('');
    var myHex = '#';
    
    for(var i=0; i<6; i++){
        myHex = myHex + letters[Math.floor(Math.random()*16)];
    }
    return myHex;
    
}

console.log(randomColor());
*/startbtn.onclick = myFunction;
clickme.onclick = myFucntioclick;
stopbtn.onclick = myFunctionStop;