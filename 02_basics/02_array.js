const marvel_hero =["Hulk","Thor","Ironman","Loki"]
// console.log(marvel_hero);

const dc_hero = ["Joker","Superman","BAtman","flash"]
// console.log(dc_hero);

//concat use for merge to array

// const new_marvel_hero=marvel_hero.concat(dc_hero)
// console.log(new_marvel_hero);

//Spread Operator

const all_super_heros = [...marvel_hero, ...dc_hero]
console.log(all_super_heros);

//you put any Object/String then (from) very easely convert inti a Array
console.log(Array.from("SHAHBAZ"));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
//when i combine some variable then use (of) 