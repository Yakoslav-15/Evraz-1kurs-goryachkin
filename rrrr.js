let five = document.getElementById('five');
let seven = document.getElementById('seven');

let history_even = document.getElementById('history_even');
let history_three = document.getElementById('history_three');
let history_five = document.getElementById('history_five');
let history_seven = document.getElementById('history_seven');
let history = document.getElementById('history');

function minus10() {
    a = a - 10;
    // возможен короткий вариант a -= 10;
    sp.innerText = a;

    if (a % 2 === 0) {
        chetnoe.innerText = 'Да';
        history_even.innerText = history_even.innerText + ' ' + a;
    }
    else {
        chetnoe.innerText = 'Нет';
    }

    if (a % 3 === 0) {
        three.innerText = 'Да';
        history_three.innerText = history_three.innerText + ' ' + a;
    }
    else {
        three.innerText = 'Нет';
    }

    if (a % 5 === 0) {
        five.innerText = 'Да';
        history_five.innerText = history_five.innerText + ' ' + a;
    }
    else {
        five.innerText = 'Нет';
    }

    if (a % 7 === 0) {
        seven.innerText = 'Да';
        history_seven.innerText = history_seven.innerText + ' ' + a;
    }
    else {
        seven.innerText = 'Нет';
    @@ -46,27 +56,31 @@ function minus1() {

        if (a % 2 === 0) {
            chetnoe.innerText = 'Да';
            history_even.innerText = history_even.innerText + ' ' + a;
        }
        else {
            chetnoe.innerText = 'Нет';
        }

        if (a % 3 === 0) {
            three.innerText = 'Да';
            history_three.innerText = history_three.innerText + ' ' + a;
        }
        else {
            three.innerText = 'Нет';
        }

        if (a % 5 === 0) {
            five.innerText = 'Да';
            history_five.innerText = history_five.innerText + ' ' + a;
        }
        else {
            five.innerText = 'Нет';
        }

        if (a % 7 === 0) {
            seven.innerText = 'Да';
            history_seven.innerText = history_seven.innerText + ' ' + a;
        }
        else {
            seven.innerText = 'Нет';
        @@ -80,27 +94,31 @@ function plus1() {

            if (a % 2 === 0) {
                chetnoe.innerText = 'Да';
                history_even.innerText = history_even.innerText + ' ' + a;
            }
            else {
                chetnoe.innerText = 'Нет';
            }

            if (a % 3 === 0) {
                three.innerText = 'Да';
                history_three.innerText = history_three.innerText + ' ' + a;
            }
            else {
                three.innerText = 'Нет';
            }

            if (a % 5 === 0) {
                five.innerText = 'Да';
                history_five.innerText = history_five.innerText + ' ' + a;
            }
            else {
                five.innerText = 'Нет';
            }

            if (a % 7 === 0) {
                seven.innerText = 'Да';
                history_seven.innerText = history_seven.innerText + ' ' + a;
            }
            else {
                seven.innerText = 'Нет';
            @@ -114,27 +132,31 @@ function plus10() {

                if (a % 2 === 0) {
                    chetnoe.innerText = 'Да';
                    history_even.innerText = history_even.innerText + ' ' + a;
                }
                else {
                    chetnoe.innerText = 'Нет';
                }

                if (a % 3 === 0) {
                    three.innerText = 'Да';
                    history_three.innerText = history_three.innerText + ' ' + a;
                }
                else {
                    three.innerText = 'Нет';
                }

                if (a % 5 === 0) {
                    five.innerText = 'Да';
                    history_five.innerText = history_five.innerText + ' ' + a;
                }
                else {
                    five.innerText = 'Нет';
                }

                if (a % 7 === 0) {
                    seven.innerText = 'Да';
                    history_seven.innerText = history_seven.innerText + ' ' + a;
                }
                else {
                    seven.innerText = 'Нет';