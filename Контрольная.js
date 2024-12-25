let a = 0
let total = document.getElementById('total')
let bod = document.getElementById('body')

function make11() {
    a = a + 1;
    total.innerText = a;

}

function make12() {
    a = a + 10;
    total.innerText = a;
}

function make1() {
    a = a - 1;
    total.innerText = a;
}

function make10() {
    a = a - 10;
    total.innerText = a;
}

function color1() {
    let body = document.getElementById('body');
    body.style.backgroundColor = 'white'
}

function color2() {
    let body = document.getElementById('body');
    body.style.backgroundColor = 'black'
}

function color3() {
    let body = document.getElementById('body');
    body.style.backgroundColor = 'grey'
}

function color4() {
    let body = document.getElementById('body');
    body.style.backgroundColor = 'goldenrod'
}

function color5() {
    let body = document.getElementById('body');
    body.style.backgroundColor = 'darkblue'
}

