let imgArr = [];
let imgArrSecond = [];
let imgArrFinal = [];
function shuffle(arr) {
    var j, x, i;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
    }
    return arr;
}

function pushImages (){
    for (let i=0; i<document.getElementsByClassName('front').length; i++){
        imgArr.push(document.getElementsByClassName('front')[i]);
    }
    shuffle(imgArr);
}
pushImages();
imgArrSecond = shuffle(imgArr);
imgArrFinal = imgArr.concat(imgArrSecond);

/*function drawFront(elem) {
    var ctx = document.getElementById('canvas').getContext('2d');
    // Draw image
            ctx.drawImage(document.getElementById('front'), x, y, 100, 150);
        }*/

function drawBack() {
    var ctx = document.getElementById('canvas').getContext('2d');
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
    // Draw image
    for (let i=0; i<4; i++){
        for (let j=0; j<4; j++){
            let x = 25 + j * 110; 
            let y = 25 + i * 175;
            ctx.drawImage(document.getElementById('back'), x, y, 100, 150);
        }
    }
}
let button = document.getElementById('button');
        button.onclick = function(){
            document.getElementById('canvas').classList.toggle('active');
            button.hidden = true;
            drawBack();
        };
