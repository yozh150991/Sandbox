const time = 10000; //ms
const step = 5;

function outNum(num, elem) {
    let a = document.querySelector("#" + elem);
    n = 0;
    let t = Math.round(time/(num/step));
    let interval = setInterval(() => {
        n = n + step;
        if (n == num) {
            clearInterval(interval);
        }
        a.innerHTML = n;
    },
    t);
}

outNum(1000, "out-1");