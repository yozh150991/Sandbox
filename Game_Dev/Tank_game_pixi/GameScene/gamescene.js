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
                    this.cell_ul = new Sprite(loader.resources["assets/board/small_wall_1.png"].texture);
                    this.cell_ul.height = cellSize/2;
                    this.cell_ul.width = cellSize/2;
                    this.cell_ul.position.set(cellSize * j, cellSize * i)
                    this.view.addChild(this.cell_ul)
                    this.cell_ur = new Sprite(loader.resources["assets/board/small_wall_2.png"].texture);
                    this.cell_ur.height = cellSize/2;
                    this.cell_ur.width = cellSize/2;
                    this.cell_ur.position.set(cellSize * j + cellSize/2, cellSize * i)
                    this.view.addChild(this.cell_ur)
                    this.cell_ll = new Sprite(loader.resources["assets/board/small_wall_3.png"].texture);
                    this.cell_ll.height = cellSize/2;
                    this.cell_ll.width = cellSize/2;
                    this.cell_ll.position.set(cellSize * j, cellSize * i + cellSize/2)
                    this.view.addChild(this.cell_ll)
                    this.cell_lr = new Sprite(loader.resources["assets/board/small_wall_4.png"].texture);
                    this.cell_lr.height = cellSize/2;
                    this.cell_lr.width = cellSize/2;
                    this.cell_lr.position.set(cellSize * j + cellSize/2, cellSize * i + cellSize/2)
                    this.view.addChild(this.cell_lr)
                }
                if (cellName === '7'){
                    this.cell = new Sprite(loader.resources["assets/board/eagle.png"].texture);
                    this.cell.position.set(cellSize * j, cellSize * i);
                    this.cell.height = cellSize;
                    this.cell.width = cellSize;
                    this.view.addChild(this.cell);
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