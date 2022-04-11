let gameB = ["O", "O", "O", "O", "O", "O", "O", "O", "O"]
let box = document.querySelectorAll(".box")

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
                // boxx.innerHTML = "X"

                
                // for (element of box) {
                //     i = Array.from(box).indexOf(element)
                //     console.log(gameB)
                //     console.log(box)
                //     gameB[i] = box[i]
                // }
                // dcModule.metodo()
                i = Array.from(box).indexOf(boxx)
                gameB[i] = "X"

                console.log(i)
                dcModule.metodo()
                console.log(gameB)
            })
        })
        
    }

    return {metodo, displayInteraction}
})()

gbModule.metodo()
dcModule.metodo()

player1.sayHello();
player2.sayHello();


// for (element of gameB) {
//     console.log(element)
    
// }

dcModule.displayInteraction()