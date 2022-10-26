// MESSAGEM GENERATOR
//--------------------------------------------------------------//
// USING OBJECTS
//--------------------------------------------------------------//
const message = {
    _colour: ['pink', 'black', 'white', 'blue', 'gold', 'green', 'red'],
    _animal: ['elephant', 'dog', 'cat', 'fish', 'dragon', 'hourse', 'tiger'],
    _means: ['good luck', 'bad luck', 'fortune', 'bad tidinds', 'happiness', 'joy', 'prosperity'],
    get number(){
        return Math.floor(Math.random()*7)
    },
    get message(){
        return `The ${this._colour[this.number]} ${this._animal[this.number]} brings ${this._means[this.number]}!`
    }
}

    console.log(message.message);

// USING FUNCTIONS
//--------------------------------------------------------------//
/*
// RANDOM INDEX
randomNumber = () => {
     return Math.floor(Math.random()*7)
}

// RANDOM MESSAGE

randomMessage = (colour, animal, means) => {
    return`The ${message.colour[randomNumber()]} ${message.animal[randomNumber()]} brings ${message.means[randomNumber()]}!`
}

// CALL RANDOM MESSAGE FUNCTION
console.log(randomMessage(message.colour, message.animal, message.means)); */



