

let lis=document.querySelectorAll("li");


for(let i=0;i<lis.length;i++){
    lis[i].addEventListener('mouseover',function(){
        this.classList.add("colored");
    })
}

for(let i=0;i<lis.length;i++){
    lis[i].addEventListener('mouseout',function(){
        this.classList.remove("colored");
    })
}
