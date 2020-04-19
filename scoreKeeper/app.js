

let p1Button=document.querySelector("#p1");
let p2Button=document.querySelector("#p2");


let valueOne=document.querySelector("#numOne");
let valueTwo=document.querySelector("#numTwo");

let score1=0;
let score2=0;

let gameOver=false;
let winningScore=5;

let resetBtn=document.getElementById("reset");
let inputVal=document.querySelector("input");
let scoreVal=document.querySelector("h4 span");

p1Button.addEventListener("click",function(){
    if(!gameOver){
        score1++;
        if(score1===winningScore){
            valueOne.classList.add("changeCol");
            gameOver=true;
        }        
        valueOne.textContent=score1;
    }    
})


p2Button.addEventListener("click",function(){
    if(!gameOver){
        score2++;
        if(score2===winningScore){
            valueTwo.classList.add("changeCol");
            gameOver=true;
        }        
        valueTwo.textContent=score2;
    }    
})

resetBtn.addEventListener("click",resetPage);

function resetPage(){
    score1=0;
    score2=0;
    valueOne.textContent=0;
    valueTwo.textContent=0;
    valueOne.classList.remove("changeCol");
    valueTwo.classList.remove("changeCol");
    gameOver=false;
}

inputVal.addEventListener("change",function(){
    scoreVal.textContent=this.value;
    winningScore=Number(this.value);
    resetPage();

})