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
pixi
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