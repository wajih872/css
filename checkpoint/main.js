function italictext(){
   var getitalic=document.getElementById("txt");
    if(getitalic.style.fontStyle=="italic"){
        getitalic.style.fontStyle="normal"; 
    }
    else{
        getitalic.style.fontStyle="italic";
    } 
}
function boldtext(){
    var getbold=document.getElementById("txt");
    if(getbold.style.fontWeight=="bolder"){
        getbold.style.fontWeight="normal";
    }
    else{
        getbold.style.fontWeight="bolder";
    }
}
function undertext(){
    var getunder=document.getElementById("txt");
    if(
        getunder.style.textDecoration=="underline"){
           getunder.style.textDecoration="none"; 
        }
    else{
        getunder.style.textDecoration="underline"
    }    
}

function changesize2(){
    var changesize1=document.getElementById("91");
    var getsize=document.getElementById("txt");
    getsize.style.fontSize=changesize1.value;
}
function changefamil2(){
    var changefamil1=document.getElementById("y90");
    var getfamil=document.getElementById("txt");
    getfamil.style.fontFamily=changefamil1.value;
}

