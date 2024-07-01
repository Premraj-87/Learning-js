const marvel_heros = ["thor", "ironman", "spiderman", "captain america"]
const dc_heros = ["superman", "batman", "flash", "wonder woman"]

marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[4][2]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12]]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Premrajananad"))// important
console.log(Array.from("Premrajananad"))// important
console.log(Array.from({ name: "Premrajananad" }))// interestin case for the interview perspective


let score1 = 100
let score2 = 200
let score3 = 300

const scores = [score1, score2, score3]
console.log(scores);
console.log(Array.of(score1, score2, score3));


