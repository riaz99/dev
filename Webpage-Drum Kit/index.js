var drumSound = new Map();
drumSound.set("w" , 'sounds/crash.mp3' );
drumSound.set("a" , 'sounds/kick-bass.mp3' );
drumSound.set("s" , 'sounds/snare.mp3' );
drumSound.set("d" , 'sounds/tom-1.mp3' );
drumSound.set("j" , 'sounds/tom-2.mp3' );
drumSound.set("k" , 'sounds/tom-3.mp3' );
drumSound.set("l" , 'sounds/tom-4.mp3' );

var keyArray = ['w','a','s','d','j','k','l']
var drums = document.querySelectorAll(".drum");

drums.forEach( function(ele) {
    ele.addEventListener("click" , function(){          
            makeSound(ele.textContent);
            buttonAnimation(ele.textContent);                           
    });
})

document.addEventListener("keydown" , function(event){         
        if (keyArray.indexOf( event.key) != -1) {
                makeSound( event.key);
                buttonAnimation(event.key);                                 
         }              
});


function makeSound(key){ 
    var keySound = new Audio(drumSound.get(key));
    keySound.play(); 
}

function buttonAnimation(key) {
    var ele = document.querySelector("." + key)
    ele.classList.add("pressed");
    setInterval(function(){      
        ele.classList.remove("pressed");
    }, 200); 
}    