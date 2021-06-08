var gen = Math.floor(Math.random() * Math.floor(101));
function game(){
    window.location.href = "guessthegame.html"
}
function imgvisit(){
    window.location.href = "gallery.html";
}
function btvisit(){
    window.location.href = "forms.html";
}
function check(){
    var num = document.getElementById("num").value;
    if(num == gen){
        alert("You Guessed The Number!!");
    } else if(num+10 < gen ){
        alert("Your Number is Far Smaller");
    }else if(num-10 > gen){
        alert("Your Number is Far Greater");
    } else if(num > gen){
        alert("Just a Bit Smaller");
    } else if(num < gen){
        alert("Just a Bit Greater");
    } else{
        alert("Somer Error Occured");
    }
}