
// log to see the values of attributes in console
console.log($(`img`).attr(`src`));
console.log($(`img`).attr(`alt`));

// manipulating attributes in jQuery

$(`a`).attr(`href`, `https://www.yahoo.com`);
$(`a`).attr(`href`, `https://mozilla.com`);
console.log($(`a`).attr(`href`));


// since class is also an attribute
console.log($(`h1`).attr(`class`))

