// to apply event or style to a list of class in JS you must always use for loop

for (let i = 0; i < document.querySelectorAll(`button`).length; i++) {
    // add event listener
    document.querySelectorAll(`button`)[i].addEventListener(`click`, function() {
        // what so do after the event
        document.querySelectorAll(`button`)[i].style.backgroundColor = `blue`;
    })    

}; // vanilla JS

// ===

// now in jQuery style

$(`button`).click(function() {
    $(`button`).css(`color`, `red`);
}); // jQuery makes life easier