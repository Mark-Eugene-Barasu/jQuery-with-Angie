
// using .hide, .show, .toggle, .fadeOut, .fadeIn, .fadeToggle,
// .slideDown, .slideUp, .slideToggle
// .animate help to customize your own animation CSS

$(`h1`).attr(`class`, `another fountain`)

$(`button`).on(`click`, function() {
    // everything will happen in that order
    $(`h1`).slideUp().slideDown().animate({opacity: `0.7`,})
});

