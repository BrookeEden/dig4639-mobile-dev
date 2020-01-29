let Adder = require ("./Adder.js")
let myAdder = new Adder (
    {
        a:4,
        b:9
    }
)
console.log(myAdder.render());