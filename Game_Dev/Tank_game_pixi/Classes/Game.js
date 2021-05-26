let Application = PIXI.Application,
    Container = PIXI.Container,
    resources = PIXI.loader.resources,
    Graphics = PIXI.Graphics,
    TextureCache = PIXI.utils.TextureCache,
    Sprite = PIXI.Sprite,
    Text = PIXI.Text,
    TextStyle = PIXI.TextStyle;

let app = new Application({width: 1024, height: 768});
document.body.appendChild(app.view);

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
    draw(){
        /*Pixi loader here
        this.view = new Container();
        app.stage.addChild(this.view);
        проверка отрисована сцена или нет
        лоадинг бар маленький лучше сохранить как локальную переменную диз чтото там с отсылкой на контейнер 
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
    draw(){
        /*Pixi loader here
        container = new Container();
        app.stage.addChild(container);
        */
    }
}

class EndGame extends State{
    constructor(){
        super();
    }
    sign(){
        return "EndGame";
    }
    draw(){
       /*Pixi loader here
        container = new Container();
        app.stage.addChild(container);
        */
    }
}

class GameScreen extends State{
    constructor(){
        super();
    }
    sign(){
        return "GameScreen";
    }
    draw(){
        /*Pixi loader here
        container = new Container();
        app.stage.addChild(container);
        */
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