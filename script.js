// short assignment

$(document).keypress(function(event) {
    console.log(event.key);
    // display the key output in h1 element
    $(`h1`).text(event.key);
})

// a in improved way to add event
let h1 = $(`h1`); 
h1.on(`mouseover`,  function(){
    h1.css(`color`, `purple`);
})

// beautiful, check mozilla to check for more event listener