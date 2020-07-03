var gl_buttonColours = ["red", "blue", "green", "yellow"];
var gl_gamePattern=[];
var gl_userClickedPattern=[];
var gl_level = 0;

$(document).on({
    keydown : function(){
        if (gl_level == 0)
            nextSequence();   
    }
})

$("#level-title").on({
    click : function(){
        if (gl_level == 0)
            nextSequence();   
    }
})

function getRandom() {    
    let lower = 0;
    let upper = 3;
    let random = Math.random();
    return (Math.floor(random * (upper - lower + 1)) + lower);
}
function playSound(file){ 
    var keySound = new Audio(file);
    keySound.play(); 
}

function animatePress(currentColour){
   // $("#"+currentColour).animate({opacity:0}, 100);
   // $("#"+currentColour).animate({opacity:1}, 100);
   $("#"+currentColour).addClass("pressed");
   setTimeout(function(){
     $("#"+currentColour).removeClass("pressed");
    }, 200);
}

function animateUserPress(currentColour){
    $("#"+currentColour).animate({opacity:0}, 100);
    $("#"+currentColour).animate({opacity:1}, 100);
    
 }
function resetGame(){
    gl_level = 0;
    gl_userClickedPattern =[];
    gl_gamePattern = [];
    $("#level-title").text("Start");
}

function nextSequence(){
    gl_level += 1;
    $("#level-title").text("Level " + gl_level);
    gl_userClickedPattern =[];

    let randomNumber = getRandom();
    let randomChosenColour= gl_buttonColours[randomNumber];
    gl_gamePattern.push(randomChosenColour);
    animatePress(randomChosenColour);
    playSound("sounds/" + randomChosenColour  + ".mp3");     
}
function checkAnswer(currentLevel){    
    let indx = gl_userClickedPattern.length;
    if (gl_userClickedPattern[indx-1] != gl_gamePattern[indx-1]){
        playSound("sounds/wrong.mp3"); 
        $("#level-title").text("Game Over");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");            
            resetGame();
        }, 1000);
        return;
    }
    if(gl_userClickedPattern.length ==  gl_gamePattern.length){
        setTimeout(function(){
            nextSequence();
        }, 1000);
    }
}

$("#green").on("click" , function(){
    let userChosenColour = "green";
    gl_userClickedPattern.push(userChosenColour);
    playSound("sounds/green.mp3");    
    checkAnswer(gl_level);
    animateUserPress("green");
});

$("#red").on("click" , function(){
    let userChosenColour = "red";
    gl_userClickedPattern.push(userChosenColour);
    playSound("sounds/red.mp3");   
    checkAnswer(gl_level); 
    animateUserPress("red");
});

$("#yellow").on("click" , function(){
    let userChosenColour = "yellow";
    gl_userClickedPattern.push(userChosenColour);
    playSound("sounds/yellow.mp3"); 
    checkAnswer(gl_level);
    animateUserPress("yellow");   
});

$("#blue").on("click" , function(){
    let userChosenColour = "blue";
    gl_userClickedPattern.push(userChosenColour);
    playSound("sounds/blue.mp3");   
    checkAnswer(gl_level); 
    animateUserPress("blue");
});
