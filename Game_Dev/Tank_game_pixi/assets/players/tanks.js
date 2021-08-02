export default class Tank extends Container {
    moving = true

    constructor () {
        super()
    }
    create(){
        this.tank = new Sprite(loader.resources["assets/tanks/tank.png"].texture);
        this.tank.anchor.set(0.5);
        this.eventsHadler();
    }

    eventsHadler () {
        window.addEventListener('keydown', e => {
          // if (!this.moving) return
    
          switch (e.key) {
            case 'ArrowUp':
              this.y -= 10
              this.angle = 0
              break
            case 'ArrowRight':
              this.x += 10
              this.angle = 90
              break
            case 'ArrowLeft':
              this.x -= 10
              this.angle = 270
              break
            case 'ArrowDown':
              this.y += 10
              this.angle = 180
              break
            case ' ':
              this.shoot()
          }
        })
      }
}