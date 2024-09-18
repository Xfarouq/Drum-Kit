
// Makes sound when button is clicked
var numberOfDrums = document.querySelectorAll(".drum").length

for (var i = 0; i < numberOfDrums; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        var buttonInnerHtml = this.innerHTML;

        makeSound(buttonInnerHtml);
    });
}


// Makes sound when keyboard is pressed
document.addEventListener("keydown", function(event){ 
        makeSound(event.key);    
});

    
function makeSound(key){

    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        default:
            console.log(buttonInnerHtml);
    }
}


        // if (buttonInnerHtml === "w") {
        //     var crash = new Audio("sounds/crash.mp3");
        //     crash.play();
        // } else if (buttonInnerHtml === "a") {
        //     var kick = new Audio("sounds/kick-bass.mp3");
        //     kick.play();
        // } else if (buttonInnerHtml === "s") {
        //     var snare = new Audio("sounds/snare.mp3");
        //     snare.play();
        // } else if (buttonInnerHtml === "d") {
        //     var tom1 = new Audio("sounds/tom-1.mp3");
        //     tom1.play();
        // } else if (buttonInnerHtml === "j") {
        //     var tom2 = new Audio("sounds/tom-2.mp3");
        //     tom2.play();
        // } else if (buttonInnerHtml === "k") {
        //     var tom3 = new Audio("sounds/tom-3.mp3");
        //     tom3.play();
        // } else if (buttonInnerHtml === "l") {
        //     var tom4 = new Audio("sounds/tom-4.mp3");
        //     tom4.play();
        // } else {
        //     console.log(buttonInnerHtml);
        // }
        
    