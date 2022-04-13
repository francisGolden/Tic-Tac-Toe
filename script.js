let gameB = ["", "", "", "", "", "", "", "", ""]
let box = document.querySelectorAll(".box")
let clicks = 0;
let playerScore = document.querySelector("#player")
let aiScore = document.querySelector("#ai")


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
                
                
                
                i = Array.from(box).indexOf(boxx)
                
                if (boxx.textContent == "") {
                    gameB[i] = "X"

                    let randomI = Math.floor(Math.random() * 10);
                  
                  do {
                    randomI = Math.floor(Math.random() * 10);
                  } while (gameB[randomI] != "")

                  if (gameB[randomI] != "X" && gameB[randomI] != "O") {
                    console.log(randomI) 
                    gameB[randomI] = "O"
                    
                  } else {
                    randomI = Math.floor(Math.random() * 10);
                    console.log(randomI)
                    gameB[randomI] = "O"
                    
                  }                
                  
                  dcModule.metodo()

                }
            
                if (gameB[0] == "X" && gameB[1] == "X" && gameB[2] == "X") {
                  player1.score += 1
                  gameB = ["", "", "", "", "", "", "", "", ""]
                  
                  dcModule.metodo()
                } else if (gameB[0] == "X" && gameB[3] == "X" && gameB[6] == "X") {
                  player1.score += 1
                  gameB = ["", "", "", "", "", "", "", "", ""]
                  
                  dcModule.metodo()
                } else if (gameB[0] == "X" && gameB[4] == "X" && gameB[8] == "X") {
                  player1.score += 1
                  gameB = ["", "", "", "", "", "", "", "", ""]
                  
                  dcModule.metodo()
                } else if (gameB[1] == "X" && gameB[4] == "X" && gameB[7] == "X") {
                  player1.score += 1
                  gameB = ["", "", "", "", "", "", "", "", ""]
                  
                  dcModule.metodo()
                } else if (gameB[2] == "X" && gameB[4] == "X" && gameB[6] == "X") {
                  player1.score += 1
                  gameB = ["", "", "", "", "", "", "", "", ""]
                  
                  dcModule.metodo()
                } else if (gameB[2] == "X" && gameB[5] == "X" && gameB[8] == "X") {
                  player1.score += 1
                  gameB = ["", "", "", "", "", "", "", "", ""]
                  
                  dcModule.metodo()
                } else if (gameB[6] == "X" && gameB[7] == "X" && gameB[8] == "X") {
                  player1.score += 1
                  gameB = ["", "", "", "", "", "", "", "", ""]
                  
                  dcModule.metodo()
                }

                if (gameB[0] == "O" && gameB[1] == "O" && gameB[2] == "O") {
                  player2.score += 1
                  gameB = ["", "", "", "", "", "", "", "", ""]
                  console.log(player2.score)
                  dcModule.metodo()
                } else if (gameB[0] == "O" && gameB[3] == "O" && gameB[6] == "O") {
                  player2.score += 1
                  gameB = ["", "", "", "", "", "", "", "", ""]
                  console.log(player2.score)
                  dcModule.metodo()
                } else if (gameB[0] == "O" && gameB[4] == "O" && gameB[8] == "O") {
                  player2.score += 1
                  gameB = ["", "", "", "", "", "", "", "", ""]
                  console.log(player2.score)
                  dcModule.metodo()
                } else if (gameB[1] == "O" && gameB[4] == "O" && gameB[7] == "O") {
                  player2.score += 1
                  gameB = ["", "", "", "", "", "", "", "", ""]
                  console.log(player2.score)
                  dcModule.metodo()
                } else if (gameB[2] == "O" && gameB[4] == "O" && gameB[6] == "O") {
                  player2.score += 1
                  gameB = ["", "", "", "", "", "", "", "", ""]
                  console.log(player2.score)
                  dcModule.metodo()
                } else if (gameB[2] == "O" && gameB[5] == "O" && gameB[8] == "O") {
                  player2.score += 1
                  gameB = ["", "", "", "", "", "", "", "", ""]
                  console.log(player2.score)
                  dcModule.metodo()
                }

                

                if (player1.score == 3) {
                  alert("Player wins. Restart the game?")
                  player1.score = 0
                  player2.score = 0
                  dcModule.metodo()
                } else if (player2.score == 3) {
                  alert("AI wins. Restart the game?")
                  player1.score = 0
                  player2.score = 0
                  dcModule.metodo()
                }

                ai.innerHTML = `AI: ${player2.score}`
                player.innerHTML = `Player: ${player1.score}` 
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

// added multiplayer functionality

// added AI functionality