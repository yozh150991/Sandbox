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
    constructor(name, nextState){
        this.name = name;
        console.log(this.name);
        this.nextState = nextState;
    }
    next() {
      return new this.nextState();
    }
}

class Loading extends State{
    constructor(){
        super('loading', Menu);
    }
    draw(){
        this.view = new Container();
        app.stage.addChild(this.view);

        PIXI.loader
        .add("assets/loader_bar/loader-bg.png")
        .add("assets/loader_bar/loader-bar.png")
        .load(setup.bind(this));

        this.view.visible = true;


        function setup() {
            if (this.view.visible){
                return
            }
            else {
                this.setLoaderBar();
                PIXI.loader
                .add('eagle',  "assets/board/eagle.png")
                .add('leaves',  "assets/board/leaves.png")
                .add('wall_1',  "assets/board/small_wall_1.png")
                .add('wall_2',  "assets/board/small_wall_2.png")
                .add('wall_3',  "assets/board/small_wall_3.png")
                .add('wall_4',  "assets/board/small_wall_4.png")
                .add('wall',  "assets/board/wall.png")
                .add('water',  "assets/board/water.png")
                .add('enemy_blue',  "assets/tanks/enemy_blue.png")
                .add('enemy_red',  "assets/tanks/enemy_red.png")
                .add('enemy_white',  "assets/tanks/enemy_white.png")
                .add('tank',  "assets/tanks/tank.png")
                .add('bonus_immortal',  "assets/bonus/bonus_immortal.png")
                .add('bonus_live',  "assets/bonus/bonus_live.png")
                .add('bonus_slow',  "assets/bonus/bonus_slow.png")
                .add('bonus_speed',  "assets/bonus/bonus_speed.png")
                .add('appear',  "assets/appear.png")
                .add('bullet',  "assets/bullet.png")
                .add('button',  "assets/button.png")
                .add('enemy_bullet',  "assets/enemy_bullet.png")
                .add('explode_small',  "assets/explode_small.png")
                .add('explode',  "assets/explode.png")
                .add('scores',  "assets/scores.png")
                .add('bonus_sound',  "assets/sounds/bonus.wav")
                .add('explode_sound',  "assets/sounds/explode.wav")
                .add('hit_sound',  "assets/sounds/hit.wav")
                .add('lose_sound',  "assets/sounds/lose.wav")
                .add('shot_sound',  "assets/sounds/shot.wav")
                .add('win_sound',  "assets/sounds/win.wav")
                .on("progress", progressBar)
                .load(
                    ()=>{game.nextState}
                );

                function progressBar(loader){
                    loader.width = loaderBar.width*(loader.progress/100);
                }
            }
        }

        function setLoaderBar(){
            this.loaderBg = new Sprite(PIXI.loader.resources["loader-bg"].texture);
            this.loaderBg.position.set(app.width/2, app.width/2 + 100);
            this.loaderBg.anchor.setTo(0.5);
            this.loaderBar = new Sprite(PIXI.loader.resources["loader-bar"].texture);
            this.loaderBg.position.set(app.width/2, this.loaderBg.y);
            this.loaderBar.anchor.setTo(0.5);
            this.view.addChild(this.loaderBg);
            this.view.addChild(this.loaderBar);
        }
    }
}

class Menu extends State{
    constructor(){
        super('Menu', EndGame);
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
        super('endGame', EndGame);
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
    draw(){
        /*Pixi loader here
        container = new Container();
        app.stage.addChild(container);
        */
    }
}

class Game{
    constructor(){
        if (Game.exists){
            return Game.instance;
        }
        Game.instance = this;
        Game.exists = true;
        this.state = new Loading();
        this.state.draw();
    }
      nextState() {
        this.state = this.state.next();
      };
}

let game = new Game();
window.onload = game;