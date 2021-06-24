let Application = PIXI.Application,
    Container = PIXI.Container,
    resources = PIXI.loader.resources,
    Graphics = PIXI.Graphics,
    TextureCache = PIXI.utils.TextureCache,
    Sprite = PIXI.Sprite,
    Text = PIXI.Text,
    loader = new PIXI.Loader(),
    TextStyle = PIXI.TextStyle;

const loadingArray = ["assets/board/eagle.png",
                    "assets/board/leaves.png",
                    "assets/board/small_wall_1.png",
                    "assets/board/small_wall_2.png",
                    "assets/board/small_wall_3.png",
                    "assets/board/small_wall_4.png",
                    "assets/board/wall.png",
                    "assets/board/water.png",
                    "assets/tanks/enemy_blue.png",
                    "assets/tanks/enemy_red.png",
                    "assets/tanks/enemy_white.png",
                    "assets/tanks/tank.png",
                    "assets/bonus/bonus_immortal.png",
                    "assets/bonus/bonus_live.png",
                    "assets/bonus/bonus_slow.png",
                    "assets/bonus/bonus_speed.png",
                    "assets/appear.png",
                    "assets/bullet.png",
                    "assets/button.png",
                    "assets/enemy_bullet.png",
                    "assets/explode_small.png",
                    "assets/explode.png",
                    "assets/scores.png",
                    "assets/sounds/bonus.wav",
                    "assets/sounds/explode.wav",
                    "assets/sounds/hit.wav",
                    "assets/sounds/lose.wav",
                    "assets/sounds/shot.wav",
                    "assets/sounds/win.wav"];
let i = 1;


let app = new Application({width: 1024, height: 768});
document.body.appendChild(app.view);

class State {
    constructor(name, nextState){
        let ldBar;
        this.name = name;
        console.log(this.name);
        this.nextState = nextState;
    }
    next() {
        return new this.nextState();
    }
}


class Init extends State{
    constructor(){
        super('init', Loading);
    }
    draw(){
        this.view = new Container();
        this.view.name = 'init';
        app.stage.addChild(this.view);

        loader
        .add("assets/loader_bar/loader-bg.png")
        .add("loadbar", "assets/loader_bar/loader-bar.png")
        .load(this.setup.bind(this));

        this.view.visible = false;
    }
    setup() {
        if (this.view.visible){
            return
        }
        else {
            this.setLoaderBar();
            this.view.visible = true;
            game.nextState();
        }
    }

    setLoaderBar(){
        this.loaderBg = new Sprite(loader.resources["assets/loader_bar/loader-bg.png"].texture);
        this.loaderBg.anchor.set(0.5);
        this.loaderBg.position.set(app.view.width/2, app.view.height-100);
        this.loaderBar = new Sprite(loader.resources["loadbar"].texture);
        this.loaderBar.anchor.set(0.5);
        this.loaderBar.position.set(this.loaderBg.position.x, this.loaderBg.position.y);
        this.loaderBar.name = 'ldbar';
        this.loaderBar.visible = false;
        console.log(this.loaderBar);

        this.view.addChild(this.loaderBg);
        this.view.addChild(this.loaderBar);
        return this.loaderBar;
    }
}
class Loading extends State{
    constructor(){
        super('loading', Menu);
    }
    draw(){
        this.view = new Container();
        this.view.name = 'load';
        app.stage.addChild(this.view);
        

        loader
                .add(loadingArray)
                .onLoad.add(() => this.progressBar());
                
        //loader.load(this.setup.bind(this));
                this.view.visible = false;

    }
    progressBar(){
        console.log(app.stage.getChildByName('init').getChildByName('ldbar'));
        app.stage.getChildByName('init').getChildByName('ldbar').width = app.stage.getChildByName('init').getChildByName('ldbar').width*(i / loadingArray.length);
        app.stage.getChildByName('init').getChildByName('ldbar').visible = true;
        console.log(i);
        console.log (i / loadingArray.length);
        i++;
        return i;
        //каунтер с кол-вом елементов массива
    }

    setup() {
        if (this.view.visible){
            return
        }
        else {
            this.view.visible = true;
            game.nextState();
        }
    }
}

class Menu extends State{
    constructor(){
        super('Menu', EndGame);
    }
    draw(){
        this.view = new Container();
        app.stage.addChild(this.view);

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
                .load(setup.bind(this));

                function progressBar(loader){
                    loader.width = loaderBar.width*(loader.progress/100);
                }

        this.view.visible = true;


        function setup() {
            if (this.view.visible){
                return
            }
            else {
                ()=>{game.nextState}
            }
        }
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
        this.state = new Init();
        this.state.draw();
    }
      nextState() {
        this.state = this.state.next();
        this.state.draw();
      };
}

let game = new Game();
window.onload = game;