const gameboardObj = {
    gameB: [],
    

}

const playerFactory = (name, score) => {
    const sayHello = () => console.log(`hello, I'm ${name}`)
    return {score, name, sayHello}
}

const player1 = playerFactory("AI", 0)
const player2 = playerFactory("Human", 0)

player1.sayHello();
player2.sayHello();
