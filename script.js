
// here is the best practice instead

$(`h1`).attr(`class`, `another fountain`)

$(`input`).on(`keypress`, function(event) {
    console.log(event.key);
    $(`h1`).text(event.key);
});

