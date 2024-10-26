var start = document.getElementById('start');
var end = document.getElementById('end');
var boundaries = document.querySelectorAll('.boundary');
var statusDisplay = document.getElementById('status');

var startGame = false;


var mouseX = 0;
var mouseY = 0;


function updateMousePosition(event) {
    mouseX = event.clientX; 
    mouseY = event.clientY; 
}


document.addEventListener("mousemove", updateMousePosition);

function Game() {
    startGame = true; 
    statusDisplay.textContent = "Good luck!"; 
    resetBoundaries(boundaries);
}


function border() {
    if (!startGame) {
        return;
    }

    
    for (var i = 0; i < boundaries.length; i++) {
        var boundary = boundaries[i]; 

        
        var rect = boundary.getBoundingClientRect();
        var left = rect.left;
        var top = rect.top;
        var width = rect.width;
        var height = rect.height;

        
        if (isMouseOverElement(mouseX, mouseY, left, top, width, height)) {
            boundary.classList.add('highlighted'); 
            statusDisplay.textContent = "You lost! Try again."; 
            startGame = false; 
            return; 
        }
    }

    
    var endRect = end.getBoundingClientRect();
    var endLeft = endRect.left;
    var endTop = endRect.top;
    var endWidth = endRect.width;
    var endHeight = endRect.height;

    
    if (isMouseOverElement(mouseX, mouseY, endLeft, endTop, endWidth, endHeight) && startGame) {
        statusDisplay.textContent = "Congratulations! You win!"; 
        startGame = false; 
    }
}


function isMouseOverElement(mouseX, mouseY, elementLeft, elementTop, elementWidth, elementHeight) {
    var elementRight = elementLeft + elementWidth; 
    var elementBottom = elementTop + elementHeight; 

    
    return mouseX >= elementLeft && mouseX <= elementRight &&
           mouseY >= elementTop && mouseY <= elementBottom;
}


start.addEventListener('mouseover', Game); 
document.addEventListener('mousemove', border); 


