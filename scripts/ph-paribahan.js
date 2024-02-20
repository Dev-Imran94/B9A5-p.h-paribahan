function continueBooking(booking){
    showElementById('success-modal');
    booking(); 
}

function booking(){
    hideElementById('success-modal');
}

function eBooking(){
    setBackgroundColorById(elementId);
    eBooking(); 
}

