// jQuery creates properly groups each and every element
// into its own DOM object

if ($(`h1`) == document.querySelector(`h1`)){
    console.log(`same`);
} else {
    console.log(`not same`);
}

console.log($(`h1`));
console.log(document.querySelector(`h1`))