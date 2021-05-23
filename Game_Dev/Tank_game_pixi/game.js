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

PIXI.loader
    .add(["assets/loader_bar/loader-bg.png",
          "assets/loader_bar/loader-bar.png",  
          "assets/board/eagle.png",
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
          "assets/sounds/win.wav",
  ])
    .on("progress", loadProgressHandler)
    .load(setup);

  function loadProgressHandler(loader) {
    
  }

function setup() {

    loadingScene = new Container();
    menuScene = new Container();
    endGameScene = new Container();
    gameScene = new Container();

    app.stage.addChild(loadingScene);
  }