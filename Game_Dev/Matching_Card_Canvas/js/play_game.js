let imgArr = [];
let imgArrSecond = [];
let imgArrFinal = [];
let ArrSelected = [];
let indexSelected = []

let canvas = document.getElementById('canvas');
let canvasLeft = canvas.offsetLeft + canvas.clientLeft;
let canvasTop = canvas.offsetTop + canvas.clientTop;
let ctx = canvas.getContext('2d');

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

function drawFront(elem, elemX, elemY) {
    // Draw image
            ctx. clearRect(elemX, elemY, 100, 150);
            ctx.drawImage(imgArrFinal[elem], elemX, elemY, 100, 150);
            ArrSelected.push(imgArrFinal[elem]);
        }

function resetCard(elem) {
    // Draw back again
        if (elem == 0) {
            elemX = 25;
            elemY = 25;
        }
        if (elem == 1) {
            elemX = 135;
            elemY = 25;
        }
        if (elem == 2) {
            elemX = 245;
            elemY = 25;
        }
        if (elem == 3) {
            elemX = 355;
            elemY = 25;
        }
        if (elem == 4) {
            elemX = 25;
            elemY = 200;
        }
        if (elem == 5) {
            elemX = 135;
            elemY = 200;
        }
        if (elem == 6) {
            elemX = 245;
            elemY = 200;
        }
        if (elem == 7) {
            elemX = 355;
            elemY = 200;
        }
        if (elem == 8) {
            elemX = 25;
            elemY = 375;
        }
        if (elem == 9) {
            elemX = 135;
            elemY = 375;
        }
        if (elem == 10) {
            elemX = 245;
            elemY = 375;
        }
        if (elem == 11) {
            elemX = 355;
            elemY = 375;
        }
        if (elem == 12) {
            elemX = 25;
            elemY = 550;
        }
        if (elem == 13) {
            elemX = 135;
            elemY = 550;
        }
        if (elem == 14) {
            elemX = 245;
            elemY = 550;
        }
        if (elem == 15) {
            elemX = 355;
            elemY = 550;
        }
        ctx. clearRect(elemX, elemY, 100, 150);
        ctx.drawImage(document.getElementById('back'), elemX, elemY, 100, 150);
        }
        
function compareSelect(){
    if (ArrSelected[0] === ArrSelected[1]){
        ArrSelected = [];
        indexSelected = [];
        console.log('true');
    }
    else {
        ArrSelected = [];
        indexSelected.forEach(function (elem){
            resetCard(elem);
        });
        indexSelected = [];
        console.log('false');
    }
}

function drawBack() {
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
    // Draw image
    for (let i=0; i<4; i++){
        for (let j=0; j<4; j++){
            let x = 25 + j * 110; 
            let y = 25 + i * 175;
            ctx.drawImage(document.getElementById('back'), x, y, 100, 150);
        }
    }
    ctx.save();
}
let button = document.getElementById('button');
        button.onclick = function(){
            document.getElementById('canvas').classList.toggle('active');
            button.hidden = true;
            drawBack();
        };
function playGame(){
    canvas.addEventListener('click', function(event) {
        clickX = event.pageX - canvasLeft,
        clickY = event.pageY - canvasTop + 66;
        if (clickX > 25 && clickX < 125 && clickY > 25 && clickY < 175) {
            drawFront(0, 25, 25);
            indexSelected.push(0);
        }
        if (clickX > 25 + 110 * 1 && clickX < 25 + 110 * 1 + 100 && clickY > 25 + 175 * 0 && clickY < 25 + 175 * 0 + 150) {
            drawFront(1, 135, 25);
            indexSelected.push(1);
        }
        if (clickX > 25 + 110 * 2 && clickX < 25 + 110 * 2 + 100 && clickY > 25 + 175 * 0 && clickY < 25 + 175 * 0 + 150) {
            drawFront(2, 245, 25);
            indexSelected.push(2);
        }
        if (clickX > 25 + 110 * 3 && clickX < 25 + 110 * 3 + 100 && clickY > 25 + 175 * 0 && clickY < 25 + 175 * 0 + 150) {
            drawFront(3, 355, 25);
            indexSelected.push(3);
        }
        if (clickX > 25 + 110 * 0 && clickX < 25 + 110 * 0 + 100 && clickY > 25 + 175 * 1 && clickY < 25 + 175 * 1 + 150) {
            drawFront(4, 25, 200);
            indexSelected.push(4);
        }
        if (clickX > 25 + 110 * 1 && clickX < 25 + 110 * 1 + 100 && clickY > 25 + 175 * 1 && clickY < 25 + 175 * 1 + 150) {
            drawFront(5, 135, 200);
            indexSelected.push(5);
        }
        if (clickX > 25 + 110 * 2 && clickX < 25 + 110 * 2 + 100 && clickY > 25 + 175 * 1 && clickY < 25 + 175 * 1 + 150) {
            drawFront(6, 245, 200);
            indexSelected.push(6);
        }
        if (clickX > 25 + 110 * 3 && clickX < 25 + 110 * 3 + 100 && clickY > 25 + 175 * 1 && clickY < 25 + 175 * 1 + 150) {
            drawFront(7, 355, 200);
            indexSelected.push(7);
        }
        if (clickX > 25 + 110 * 0 && clickX < 25 + 110 * 0 + 100 && clickY > 25 + 175 * 2 && clickY < 25 + 175 * 2 + 150) {
            drawFront(8, 25, 375);
            indexSelected.push(8);
        }
        if (clickX > 25 + 110 * 1 && clickX < 25 + 110 * 1 + 100 && clickY > 25 + 175 * 2 && clickY < 25 + 175 * 2 + 150) {
            drawFront(9, 135, 375);
            indexSelected.push(9);
        }
        if (clickX > 25 + 110 * 2 && clickX < 25 + 110 * 2 + 100 && clickY > 25 + 175 * 2 && clickY < 25 + 175 * 2 + 150) {
            drawFront(10, 245, 375);
            indexSelected.push(10);
        }
        if (clickX > 25 + 110 * 3 && clickX < 25 + 110 * 3 + 100 && clickY > 25 + 175 * 2 && clickY < 25 + 175 * 2 + 150) {
            drawFront(11, 355, 375);
            indexSelected.push(11);
        }
        if (clickX > 25 + 110 * 0 && clickX < 25 + 110 * 0 + 100 && clickY > 25 + 175 * 3 && clickY < 25 + 175 * 3 + 150) {
            drawFront(12, 25, 550);
            indexSelected.push(12);
        }
        if (clickX > 25 + 110 * 1 && clickX < 25 + 110 * 1 + 100 && clickY > 25 + 175 * 3 && clickY < 25 + 175 * 3 + 150) {
            drawFront(13, 135, 550);
            indexSelected.push(13);
        }
        if (clickX > 25 + 110 * 2 && clickX < 25 + 110 * 2 + 100 && clickY > 25 + 175 * 3 && clickY < 25 + 175 * 3 + 150) {
            drawFront(14, 245, 550);
            indexSelected.push(14);
        }
        if (clickX > 25 + 110 * 3 && clickX < 25 + 110 * 3 + 100 && clickY > 25 + 175 * 3 && clickY < 25 + 175 * 3 + 150) {
            drawFront(15, 355, 550);
            indexSelected.push(15);
        }
        if (ArrSelected.length == 2){
            setTimeout(() => {
                compareSelect()
            }, 500);
            }
    }, false);
}
playGame();