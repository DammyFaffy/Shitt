const eat = (user, admin) =>{
    return `Hello ${user} you are an ${admin ? "admin" : "ordinary user"}`
}

console.log(eat("Ehimar" , true));

const person = "Donkey"

const message = `Hello User ${person}. 
    Welcome to our Platform.
    Hope you enjoy your experience 👍👍👍
    ${eat("Ehimare")}
    I have ${20+500} million naira`



console.log(message);

let zayd = "20"

let mama = zayd >= 18 ? "admit him" : "go and learn work"

console.log(mama);



const user = {
    name: "Ehimare",
    age: 20,
    admin: true
}

const{name, age} = user
 
console.log(eat(name , user.admin));


const primeNo = [1, 3, 5, 7, 11, 13, 15, 17, 19, 21]


const sumNo = primeNo.reduce((a, b) => a+b, 0)
console.log(sumNo);

const players = [
    {
        name: "Messi",
        age: 36,
        country: "Inter Miami",
        country: "Argentina",
        goals: 832
    },

    {
        name: "Neymar",
        age: 28,
        country: "Brazil",
        country: "Argentina",
        goals: 832
    },

    {
        name: "Ronaldo",
        age: 86,
        country: "Al Nassr",
        country: "Portugal",
        goals: 832
    },

    {
        name: "Neymar",
        age: 28,
        country: "Brazil",
        country: "Argentina",
        goals: 832
    },

    {
        name: "Ronaldo",
        age: 86,
        country: "Al Nassr",
        country: "Portugal",
        goals: 832
    }

]

const newArr = primeNo.filter( num => num > 11)
console.log(newArr);

const playerNames = players.map(player => player.name)

console.log(playerNames);

// const topPlayers = players.filter( player => player.goals => 300).map(players => players.name)

// console.log(topPlayers);