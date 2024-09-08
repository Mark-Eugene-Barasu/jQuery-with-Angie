
// here is the best practice instead

$(`h1`).css(`color`, `purple`);
$(`h1`).attr(`class`, `fountain another`)
// $(`h1`).removeClass(`fountain`)
$(`h1`).attr(`class`, `fountain`)
console.log($(`h1`).hasClass(`fountain`));
console.log($(`h1`).hasClass(`another`));
console.log($(`h1`).attr(`class`));