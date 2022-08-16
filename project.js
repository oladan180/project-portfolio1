const tic = document.querySelectorAll("td");
console.log(tic);
const btn = document.querySelector(".btn-active");
console.log(btn);
btn.addEventListener("click", function(){
    for(let i =0; i<tic.length; i++){
        tic[i].textContent = "";
    }
});

function changeMaker() {

}

for(let i=0; i<tic.length;i++){
    tic[i].addEventListener('click', function(){
        if(this.textContent===''){
            this.textContent='X';
        }
        else if(this.textContent === 'X'){
            this.textContent='O';
        }
        else {
            this.textContent='';
        }
        
    })

}


function changeMaker(){
    for(let i = 0; i<tic.length;i++){
        tic[i].textContent='';
    }
    
}
for(let i =0;i<tic.length;i++){
    tic.addEventListener('click',    function () {
        if(this.textContent===""){
            this.textContent='X';
        }
        else if(this.textContent==="x"){
            this.textContent="o";
        }
        else{
            this.textContent="";
        }
        
    })

}

