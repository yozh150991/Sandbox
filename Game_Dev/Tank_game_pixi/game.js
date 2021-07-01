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
                
        loader.load(this.setup.bind(this));
                this.view.visible = false;

    }
    progressBar(){
        app.stage.getChildByName('init').getChildByName('ldbar').scale.x = (i / loadingArray.length);
        app.stage.getChildByName('init').getChildByName('ldbar').visible = true;
        i++;
        return i;
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
        this.view.name = 'menu';
        app.stage.addChild(this.view);
        this.view.visible = false;
        
        this.drawMenu();
        this.clickButton();
        //this.setup.bind(this);
        

    }
    drawMenu(){
        this.menu = new Sprite(loader.resources["assets/button.png"].texture);
        this.menu.anchor.set(0.5, 0);
        this.menu.position.set(app.view.width/2, app.view.height - 300);
        this.menu.interactive = true;
        this.view.addChild(this.menu);

        let styleTitle = new TextStyle({
            fontFamily: "Arial",
            fontSize: 75,
            fill: "white"
        });
        this.title = new Text('Game of Tanks', styleTitle);
        this.title.anchor.set(0.5);
        this.title.position.set(app.view.width/2, app.view.height/2-200);
        this.view.addChild(this.title);
        app.renderer.backgroundColor = 0x2C2E68;
        this.view.visible = true;
        app.stage.getChildByName('init').visible = false;
    }

    clickButton(){
        this.menu.on('click', this.setup.bind(this), false);
    }

    setup() {
            game.nextState();
    }
}

class EndGame extends State{
    constructor(){
        super('endGame', Menu);
    }
    draw(){
        this.view = new Container();
        this.view.name = 'EndGame';
        app.stage.addChild(this.view);
        this.view.visible = false;
        
        this.drawScores();
        this.clickButton();
        //this.setup.bind(this);
        

    }
    drawScores(){
        let styleInfo = new TextStyle({
            fontFamily: "Arial",
            fontSize: 20,
            fill: "white"
        });
        let stylePress = new TextStyle({
            fontFamily: "Arial",
            fontSize: 10,
            fill: "white"
        });

        this.scores = new Sprite(loader.resources["assets/scores.png"].texture);
        this.scores.anchor.set(0.5, 0);
        this.scores.position.set(app.view.width/2, 100);
        this.scores.interactive = true;
        this.view.addChild(this.scores);
        this.hitTanks = new Text('Hit tanks' + this.scores.hit, styleInfo);
        this.hitTanks.position.set(200, app.view.height/2);
        this.view.addChild(this.hitTanks);
        this.press = new Text('Press anywhere to continue', stylePress);
        this.press.anchor.set(0.5);
        this.press.position.set(app.view.width/2, app.view.height-50);
        this.view.addChild(this.press);
        this.view.visible = true;
        app.stage.getChildByName('menu').visible = false;
    }

    clickButton(){
        app.view.addEventListener('click', function(event) {
            if (event.pageX > 297 * menuScaleX && event.pageX < 594 * menuScaleX && event.pageY > 500 * menuScaleY && event.pageY < 560 * menuScaleY) {
                console.log('hit');
                //this.view.setup();
            }
            console.log(event.pageX, event.pageY);
        }
        , false);
    }

    setup() {
            game.nextState();
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