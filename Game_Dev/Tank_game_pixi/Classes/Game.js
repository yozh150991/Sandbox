class State {
    constructor(state){
        this.state = state;
    };
}

class Loading extends State{
    constructor(){
        super();
    }
    sign(){
        return "Loading";
    }
    setup(){
        /*Pixi loader here
        
        */
    }
}

class Menu extends State{
    constructor(){
        super();
    }
    sign(){
        return "Menu";
    }
    setup(){
        //Pixi loader here
    }
}

class EndGame extends State{
    constructor(){
        super();
    }
    sign(){
        return "EndGame";
    }
    setup(){
        //Pixi loader here
    }
}

class GameScreen extends State{
    constructor(){
        super();
    }
    sign(){
        return "GameScreen";
    }
    setup(){
        //Pixi loader here
    }
}

class Game{
    constructor(){
        this.states = [
            new Loading(),
            new Menu(),
            new GameScreen(),
            new EndGame()
        ]
        this.current = this.states[0]
    }
    sign(){
        return this.current.sign();
    }
    change(index){
        this.previous = this.current;
        //this.previous.container.visible = false;
        this.current = this.states[index];
    }
}

let game = new Game();
console.log(game.sign());