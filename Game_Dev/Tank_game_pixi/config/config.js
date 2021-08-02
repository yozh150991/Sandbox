export let Application = PIXI.Application,
    Container = PIXI.Container,
    resources = PIXI.loader.resources,
    Graphics = PIXI.Graphics,
    TextureCache = PIXI.utils.TextureCache,
    Sprite = PIXI.Sprite,
    Text = PIXI.Text,
    loader = new PIXI.Loader(),
    TextStyle = PIXI.TextStyle,

    GameConfig = {
        width: 1000, 
        height: 800
    },

    cellSize = 40;