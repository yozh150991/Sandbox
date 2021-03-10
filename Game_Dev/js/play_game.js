let imgArr = [];
let drawnArr = [];
function pushImages (){
    for (let i=0; i<document.getElementsByClassName('front').length; i++){
        imgArr.push(document.getElementsByClassName('front')[i]);
    }
}
pushImages();

function draw() {
    var ctx = document.getElementById('canvas').getContext('2d');
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
    // Draw image
    for (let i=0; i<4; i++){
        for (let j=0; j<4; j++){
            let x = 25 + j * 110; 
            let y = 25 + i * 175;
            /*let randomIndex = Math.floor(Math.random()*imgArr.length);
            if (drawnArr.includes(randomIndex)){
                randomIndex = Math.floor(Math.random()*imgArr.length);
            }
            else{
                drawnArr.push(randomIndex);
                ctx.drawImage(imgArr[randomIndex], x, y, 200, 300);
            }*/
            ctx.drawImage(document.getElementById('back'), x, y, 100, 150);
        }
    }
}
let button = document.getElementById('button');
        button.onclick = function(){
            document.getElementById('canvas').classList.toggle('active');
            button.hidden = true;
            draw();
        };
