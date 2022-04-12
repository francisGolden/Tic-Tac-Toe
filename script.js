let gameB = ["", "", "", "", "", "", "", "", ""]
let box = document.querySelectorAll(".box")
let clicks = 0;


const playerFactory = (name, score) => {
    const sayHello = () => console.log(`hello, I'm ${name}`)
    return {score, name, sayHello}
}

const player1 = playerFactory("AI", 0)
const player2 = playerFactory("Human", 0)



const gbModule = ((function() {
    function metodo() {
        console.log(`ciao sono il contenuto di gbModule`)
    }
    return {metodo}
}))()

const dcModule = (function() {
    function metodo() {
        for (element of box) {
            i = Array.from(box).indexOf(element)
            element.innerHTML = gameB[i]
        }

    }
    function displayInteraction () {
        
        box.forEach(boxx => {
            boxx.addEventListener("click", function() {
                
                clicks += 1
                console.log(clicks)
                i = Array.from(box).indexOf(boxx)
                gameB[i] = "X"

                
                dcModule.metodo()
                console.log(gameB)
              
                if (gameB[0] == "X" && gameB[1] == "X" && gameB[2] == "X") {
                  player1.score += 1
                  gameB = ["", "", "", "", "", "", "", "", ""]
                  console.log(player1.score)
                  dcModule.metodo()
                } else if (gameB[0] == "X" && gameB[3] == "X" && gameB[6] == "X") {
                  player1.score += 1
                  gameB = ["", "", "", "", "", "", "", "", ""]
                  console.log(player1.score)
                  dcModule.metodo()
                } else if (gameB[0] == "X" && gameB[4] == "X" && gameB[8] == "X") {
                  player1.score += 1
                  gameB = ["", "", "", "", "", "", "", "", ""]
                  console.log(player1.score)
                  dcModule.metodo()
                } else if (gameB[1] == "X" && gameB[4] == "X" && gameB[7] == "X") {
                  player1.score += 1
                  gameB = ["", "", "", "", "", "", "", "", ""]
                  console.log(player1.score)
                  dcModule.metodo()
                } else if (gameB[2] == "X" && gameB[4] == "X" && gameB[6] == "X") {
                  player1.score += 1
                  gameB = ["", "", "", "", "", "", "", "", ""]
                  console.log(player1.score)
                  dcModule.metodo()
                } else if (gameB[2] == "X" && gameB[5] == "X" && gameB[8] == "X") {
                  player1.score += 1
                  gameB = ["", "", "", "", "", "", "", "", ""]
                  console.log(player1.score)
                  dcModule.metodo()
                }
            })
        })
        
    }

    return {metodo, displayInteraction}
})()

gbModule.metodo()
dcModule.metodo()

player1.sayHello();
player2.sayHello();




dcModule.displayInteraction()

// added click counter

// TO DO: add multiplayer functionality