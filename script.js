// $(`h1`).css(`fontSize`, `110px`);


// how to add, remove and check it there is a class applied

$(`h1`).addClass(`fountain another`);
console.log($(`h1`).hasClass(`fountain`));

$(`h1`).removeClass(`fountain`);
console.log($(`h1`).hasClass(`fountain`));

// to check the actual value of the property
console.log($(`*`).css(`boxSizing`));

