

let p1Button=document.querySelector("#p1");
let p2Button=document.querySelector("#p2");


let valueOne=document.querySelector("#numOne");
let valueTwo=document.querySelector("#numTwo");

let score1=0;
let score2=0;

let gameOver=false;
let winningScore=5;

p1Button.addEventListener("click",function(){
    if(!gameOver){
        score1++;
        if(score1===winningScore){
            gameOver=true;
        }        
        valueOne.textContent=score1;
    }    
})


p2Button.addEventListener("click",function(){
    if(!gameOver){
        score2++;
        if(score2===winningScore){
            gameOver=true;
        }        
        valueTwo.textContent=score2;
    }    
})