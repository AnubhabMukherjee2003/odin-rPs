let you = 0
let computer = 0
let display= document.querySelector(".display") 

function getComputerChoice() {
    let a = Math.floor(Math.random() * 10) % 3
    return a
}

// function getHumanChoice() {
//     let b = prompt("Enter your choice: rock paper scissor")
//     if (b.toLowerCase() == "rock") {
//         a = 0
//     }
//     else if (b.toLowerCase() == "paper") {
//         a = 1
//     }
//     else if (b.toLowerCase() == "scissors") {
//         a = 2
//     }
//     else {
//         alert("Invalid choice! check spelling.")
//         return getHumanChoice()
//     }
//     return a
// }

function call(int) {
    if (int == 0) {
        return "rock"
    }
    else if (int == 1) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

const playRound = async(h, c) => {
    if (h == c) {
        let result = document.createElement("p")
        result.innerText = `You chose ${call(h)} and computer chose ${call(c)}. It's a tie!`   
        // console.log(`you chose ${call(h)} and computer chose ${call(c)}`)
        // console.log("It's a tie!")
        display.appendChild(result)
    }
    else if ((h == 0 && c == 2) || (h == 1 && c == 0) || (h == 2 && c == 1)) {
        let result = document.createElement("p")
        result.innerText = `You chose ${call(h)} and computer chose ${call(c)}. You win!`
        // console.log(`you chose ${call(h)} and computer chose ${call(c)}`)
        // console.log("You win!")
        you++
        let mine =document.getElementById("mine")
        mine.innerText = you
        display.appendChild(result)
    }
    else {
        let result = document.createElement("p")
        result.innerText = `You chose ${call(h)} and computer chose ${call(c)}. You lose!`
        // console.log(`you chose ${call(h)} and computer chose ${call(c)}`)
        // console.log("You lose!")
        computer++
        let comp = document.getElementById("comp")
        comp.innerText = computer
        display.appendChild(result)
    }
    
}

// function playGame(int) {
//     for (let i = 0; i < int; i++) {
//         console.log(`Round ${i + 1}:`)
//         playRound(getHumanChoice(), getComputerChoice());
//     }
//     if (you > computer) {
//         console.log("Congratulations! You won the game!")
//     }
//     else if (computer > you) {
//         console.log("Sorry! You lost the game.")
//     }
//     else {
//         console.log("The game is a tie!")
//     }
// }
function reset() {
    if (document.getElementById("mine").innerText == "5") {
        alert("You won the game at 5 points!")
        you = 0
        computer = 0
        let mine =document.getElementById("mine")
        mine.innerText = you
        let comp = document.getElementById("comp")
        comp.innerText = computer
        display.innerHTML = ""
    }else if (document.getElementById("comp").innerText == "5") {
        alert("You lost the game!")
        you = 0
        computer = 0
        let mine =document.getElementById("mine")
        mine.innerText = you
        let comp = document.getElementById("comp")
        comp.innerText = computer
        display.innerHTML = ""
    }
}
let btn = document.getElementsByClassName("button")

Array.from(btn).forEach(element => {
    element.addEventListener('click', async (e) => {
        // console.log(e.target.id)
        // let humanSore=getHumanChoice()
        let computerScore = getComputerChoice()
        await playRound(parseInt(e.target.id), computerScore)
        reset()
    })
});

