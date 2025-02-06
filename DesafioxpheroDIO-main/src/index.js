// Criando uma constante para realizar leitura de dados pelo teclado no console.
const teclado = require("prompt-sync")();

console.log("WELCOME TO XPHERO!\n")
console.log("Here, you're gonna know in what level you fit, depending of your XP!\n")

var heroName
var heroXP
while (true) {
    heroXP = undefined

    console.log("Tell me, what's your name, hero?")
    heroName = teclado()

    while (!Number.isInteger(heroXP)) {
        console.log("Now tell me, " + heroName + ", what's your actual XP?")
        heroXP = parseInt(teclado())
    }

    if (heroXP < 0) {
        console.log("Invalid XP!")
    }
    else if (heroXP <= 1000) {
        console.log("The Hero who's name is " + heroName + " it's on level **IRON**!\n")
    }
    else if ((heroXP >= 1001) && (heroXP <= 2000)) {
        console.log("The Hero who's name is " + heroName + " it's on level **BRONZE**!\n")
    }
    else if ((heroXP >= 2001) && (heroXP <= 5000)) {
        console.log("The Hero who's name is " + heroName + " it's on level **SILVER**!\n")
    }
    else if ((heroXP >= 5001) && (heroXP <= 7000)) {
        console.log("The Hero who's name is " + heroName + " it's on level **GOLD**!\n")
    }
    else if ((heroXP >= 7001) && (heroXP <= 8000)) {
        console.log("The Hero who's name is " + heroName + " it's on level **PLATINUM**!\n")
    }
    else if ((heroXP >= 8001) && (heroXP <= 9000)) {
        console.log("The Hero who's name is " + heroName + " it's on level **ASCENDANT*!\n")
    }
    else if ((heroXP >= 9001) && (heroXP <= 10000)) {
        console.log("The Hero who's name is " + heroName + " it's on level **IMORTAL**!\n")
    }
    else {
        console.log("The Hero who's name is " + heroName + " it's on level **MASTER**!\n")
    }

    console.log("Thanks for checking in and good luck on your journey!")
    console.log("\nPress enter to finish.");
    teclado(); 
}