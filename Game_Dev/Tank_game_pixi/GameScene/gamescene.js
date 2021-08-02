import { cellSize } from "../config/config";
import { mapmatrix } from "../maps/map_0";
import Tank from "../assets/players/tanks";

export class Battlefield {
    constructor(){
        this.view = new Container();
        this.view.name = 'battle';
        app.stage.addChild(this.view);

        //this.create();
    }
    create(){
        for (let i = 0; i < mapmatrix.length; i++) {
            for (let j = 0; j < mapmatrix[i].length; j++) {
                let cellName = `${mapmatrix[i][j]}`
        
                if (cellName === '0') continue
                if (cellName === '1'){
                    this.cell = new Sprite(loader.resources["assets/board/wall.png"].texture);
                    this.cell.position.set(cellSize * j, cellSize * i);
                    this.cell.height = cellSize;
                    this.cell.width = cellSize;
                    this.view.addChild(this.cell);
                }

                if (cellName === '2'){
                    this.cell.ul = new Sprite(loader.resources["assets/board/small_wall_1.png"].texture);
                    this.cell.ul.height = cellSize/2;
                    this.cell.ul.width = cellSize/2;
                    this.cell.ul.position.set(cellSize * j, cellSize * i)
                    this.view.addChild(this.cell.ul)
                    this.cell.ur = new Sprite(loader.resources["assets/board/small_wall_2.png"].texture);
                    this.cell.ur.height = cellSize/2;
                    this.cell.ur.width = cellSize/2;
                    this.cell.ur.position.set(cellSize * j + cellSize/2, cellSize * i)
                    this.view.addChild(this.cell.ur)
                    this.cell.ll = new Sprite(loader.resources["assets/board/small_wall_3.png"].texture);
                    this.cell.ll.height = cellSize/2;
                    this.cell.ll.width = cellSize/2;
                    this.cell.ll.position.set(cellSize * j, cellSize * i + cellSize/2)
                    this.view.addChild(this.cell.ll)
                    this.cell.lr = new Sprite(loader.resources["assets/board/small_wall_4.png"].texture);
                    this.cell.lr.height = cellSize/2;
                    this.cell.lr.width = cellSize/2;
                    this.cell.lr.position.set(cellSize * j + cellSize/2, cellSize * i + cellSize/2)
                    this.view.addChild(this.cell.lr)
                }

                if (cellName === '6'){
                    this.cell = new Tank();
                    this.cell.height = cellSize/2;
                    this.cell.width = cellSize/2;
                    this.cell.position.set(cellSize * j, cellSize * i)
                    this.view.addChild(this.cell)
                }
            }
        }
    }
}