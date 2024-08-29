// short assignment

$(document).keypress(function(event) {
    console.log(event.key);
    // display the key output in h1 element
    $(`h1`).text(event.key);
})
