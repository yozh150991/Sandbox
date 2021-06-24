import

class Game{
    constructor(){
        if (Game.exists){
            return Game.instance;
        }
        Game.instance = this;
        Game.exists = true;
        this.state = new Init();
        this.state.draw();
    }
    nextState() {
        this.state = this.state.next();
        this.state.draw();
    };
}

window.onload = new Game();