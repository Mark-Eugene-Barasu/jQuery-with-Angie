
// using .before, .after, .prepend, and .append

$(`h1`).attr(`class`, `another fountain`)

// using before adds before the element
$(`h1`).before(`<button>new</button>`)

// using after adds after the element
$(`h1`).after(`<button>New</button>`)


// now, using prepend add before the element's content
$(`h1`).prepend(`<button>prepend</button>`)

// also, append adds to the end of the element's content
$(`h1`).append(`<button>append</button>`)
