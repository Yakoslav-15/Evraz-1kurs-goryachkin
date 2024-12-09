let a = 0
let total = document.getElementById('total')
let bod = document.getElementById('body')

function make() {
    a = 0;
    total.innerText = a;
    bod.style.backgroundColor = 'black';
    bod.style.color = 'white';
}

function make2() {
    a = 1;
    total.innerText = a;
    bod.style.backgroundColor = 'white';
    bod.style.color = 'black';
}

function make3() {
    a = 2;
    total.innerText = a;
    bod.style.backgroundColor = 'blue';
    bod.style.color = 'white';
}

function make4() {
    a = 5;
    total.innerText = a;
    bod.style.backgroundColor = 'green';
    bod.style.color = 'white';
}

function make5() {
    a = a + 1;
    total.innerText = a;

    if (a === 0) {
        bod.style.backgroundColor = 'black';
        bod.style.color = 'white';
    }
    else if (a === 1) {
        bod.style.backgroundColor = 'white';
        bod.style.color = 'black';
    }

    else if (a === 2)
    {
        bod.style.backgroundColor = 'blue';
        bod.style.color = 'white';
    }

    else if (a === 5)
    {
        bod.style.backgroundColor = 'green';
        bod.style.color = 'white';
    }
}

function make6() {
    a = a - 1;
    total.innerText = a;

    if (a === 0) {
        bod.style.backgroundColor = 'black';
        bod.style.color = 'white';
    }
    else if (a === 1) {
        bod.style.backgroundColor = 'white';
        bod.style.color = 'black';
    }

    else if (a === 2)
    {
        bod.style.backgroundColor = 'blue';
        bod.style.color = 'white';
    }

    else if (a === 5)
    {
        bod.style.backgroundColor = 'green';
        bod.style.color = 'white';
    }

    if (a % === 0){
        bod.style.backgroundColor ='red'
            bod.style.color= 'black'
    }
    else if (a % === 1){
        bod.style.backgroundColor='yellow'
        bod.style.color='black'
    }
}























