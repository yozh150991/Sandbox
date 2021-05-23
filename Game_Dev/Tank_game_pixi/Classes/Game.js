class Game {
    constructor(state){
        this.transitionTo(state);
    };
    transitionTo(state){
        this.state = state;
        this.state.setGame(this);
    }
    changestate(){
        this.state.change();
    }
}

class State {
    setGame(){
        this.game = game;
    }
    change();
}

class Loading extends State{
    constructor(){
        super();
    }
    sign(){
        return "Loading";
    }
    setup(){
        //Pixi loader here
    }
    change(){
        this.game.transitionTo(new Menu());
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
    change(){
        this.game.transitionTo(new GameScreen());
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
    change(){
        this.game.transitionTo(new Menu());
    }
}

class GameScreen extends State{
    constructor(){
        super();
    }
    sign(){
        return "Gamescreen";
    }
    setup(){
        //Pixi loader here
    }
    change(){
        this.game.transitionTo(new EndGame());
    }
}

let game = new Game(Loading);
console.log(game.sign());