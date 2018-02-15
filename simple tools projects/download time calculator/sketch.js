function dbl(a){
return ('0'+a ).slice(-2);
}
document.querySelector('button').onclick = function() {
  var fize = Number(document.querySelector('#fize').value);
  var yis = Number(document.querySelector('#yis').value);
  var fizer = document.querySelector('#fizer');
  var yiser = document.querySelector('#yiser');
  var dter=document.querySelector('#dt');
  var ah = 0,as=0,am=0;
 
  if(isNaN(fize)|| isNaN(yis)){
  yiser.innerHTML='';
  
  var cases = isNaN(fize);
  fizer.innerHTML=(cases? 'error in the file size input area' : 'error in your internet speed input area');
  fizer.style.color="red";
  }

  else {
 var num = 4*1000/488.28;
as=Math.floor((fize*1024*1024)/(yis*1000/num));
am=Math.floor(as/60);
as=as-am*60;
ah=Math.floor(am/60);
am-=ah*60;


  
  
  
  
  fizer.style.color='black';
    yiser.innerHTML = 'your internet speed is : ' + yis + ' Mb';
    fizer.innerHTML = 'file size is : ' + fize + ' GB';
    dter.innerHTML="download time is " +dbl(ah)+ ':'+dbl(am)+':'+dbl(as);
  }
}

