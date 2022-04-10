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

for (element of box) {
    element.innerHTML = "O"
}

const dcModule = (function() {
    function metodo() {
        console.log(`ciao sono il contenuto di dcModule`)
        

    }
    function displayInteraction () {
        
        box.forEach(boxx => {
            boxx.addEventListener("click", function() {
                boxx.innerHTML = "X"
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