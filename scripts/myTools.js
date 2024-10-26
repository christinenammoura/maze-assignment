

function resetBoundaries(boundaries) {
    
    for (let i = 0; i < boundaries.length; i++) {
        
        boundaries[i].classList.remove('highlighted');
    }
}

function isMouseOverElement(mouseX, mouseY, element) {
    
    var rect = element.getBoundingClientRect();

    
    if (mouseX >= rect.left && mouseX <= rect.right) {
        if (mouseY >= rect.top && mouseY <= rect.bottom) {
            return true; 
        } else {
            return false; 
        }
    } else {
        return false; 
    }
}