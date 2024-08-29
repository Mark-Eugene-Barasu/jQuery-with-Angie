
// log to see the values of attributes in console
console.log($(`img`).attr(`src`));
console.log($(`img`).attr(`alt`));

// manipulating attributes in jQuery

$(`a`).attr(`href`, `https://www.yahoo.com`);
$(`a`).attr(`href`, `https://mozilla.com`);
console.log($(`a`).attr(`href`));



// since class is also an attribute
$(`h1`).addClass(`fountain`); // applying class in jQuery

// the class="another" from html
console.log($(`h1`).attr(`class`)) // display all classes applied
