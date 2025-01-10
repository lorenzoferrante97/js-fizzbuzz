// start code

// worklflow

// 1. creare ciclo for
//      - inizializzare variabile di ciclo "i"
//      - condizione di avanzamento del ciclo
//      - incremento della variabile "i"
// 2. controllo se "i" è sia multiplo di 3 che di 5
//      - se true -> stampo FizzBuzz
//      - altrimenti se è solo multiplo di 3 -> stampo Fizz
//      - altrimenti se è solo multiplo di 5 -> stampo Buzz
//      - altrimenti stampo solo il num

// code

for (let i = 1; i <=100; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log(`FizzBuzz (${i})`)
    } else if (i % 3 == 0) {
        console.log(`Fizz (${i})`)
    } else if (i % 5 == 0) {
        console.log(`Buzz (${i})`)
    } else {
        console.log(`${i}`)
    }
}

//end code