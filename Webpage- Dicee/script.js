var footer = document.querySelector(".footer span");
var d = new Date();
footer.style.fontSize = "1.5rem"
footer.textContent = d.getFullYear();

document.querySelector("h1").addEventListener("click", refreshDice);

function refreshDice() {   
    document.querySelector(".p1").textContent="";
    document.querySelector(".p2").textContent="";
   
    function local_start(counter){
        if(counter < 24){
          setTimeout(function(){
            counter++;
            rollDice();
            local_start(counter);
          }, 400);
        } else {
            hideDice();
            setTimeout(function(){        
                rollLastDice();        
            }, 1000); 
        }
    }    
    local_start(0);   
}

function rollDice() {    
        let dice1 = document.querySelector(".img1");
        dice1.setAttribute("src", "images/dice" + getRandom() + ".png")
        let dice2 = document.querySelector(".img2");
        dice2.setAttribute("src", "images/dice" + getRandom() + ".png")
}
function rollLastDice() {    
    let dice1 = document.querySelector(".img1");
    let r1 = getRandom();
    dice1.setAttribute("src", "images/dice" + r1 + ".png")
    let dice2 = document.querySelector(".img2");
    let r2 = getRandom();
    dice2.setAttribute("src", "images/dice" + r2 + ".png")

    let p1= document.querySelector(".p1");
    let p2= document.querySelector(".p2");
    p1.className = ""; p1.classList.add ("p1"); 
    p2.className = ""; p2.classList.add ("p2"); 
    if (r1 == r2){
        p1.textContent = "- Draw"
        p2.textContent = "- Draw"
        p1.classList.add ("draw");        
        p2.classList.add ("draw"); 
    }
    else if (r1 > r2){
        p1.textContent = "- Win"
        p2.textContent = "- Loss"
        p1.classList.add ("win"); 
        p2.classList.add ("loss"); 
    } 
    else {       
        p1.textContent = "- Loss"
        p2.textContent = "- Win"
        p1.classList.add ("loss"); 
        p2.classList.add ("win"); 
    }
}
function hideDice() {    
    let dice1 = document.querySelector(".img1");
    dice1.setAttribute("src", "")
    let dice2 = document.querySelector(".img2");
    dice2.setAttribute("src", "")
}
function getRandom() {
    let upper = 6;
    let lower = 1;
    let random = Math.random();
    return (Math.floor(random * (upper - lower + 1)) + lower);
}