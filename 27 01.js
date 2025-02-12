function addLi() {
    let addElement = document.getElementById('add');
    let input = document.getElementById('name')
    let input2 = document.getElementById('name2')
    if (input.value === '') {
        alert('Добавь значение')
    }
    else {
        if (input2.value === '') {
            alert('Добавь количество повторов')
        }
        else {
            for (let i = 0; i < +input2.value; i++) {
                let liElement = document.createElement('li');
                liElement.innerText = input.value;
                addElement.append(liElement);
            }
            input.value = '';
        }
    }
}

function addLi2() {
    let add2Element = document.getElementById('add2');
    let input3 = document.getElementById('name3')
    let input4 = document.getElementById('name4')
    if (input3.value === '') {
        alert('Добавь значение')
    }
    else {
        if (input4.value === '') {
            alert('Добавь количество повторов')
        } else {
            for (let i = 0; i < +input4.value; i++) {
                let liElement = document.createElement('li');
                liElement.innerText = input3.value;
                add2Element.append(liElement);
            }
            input3.value = '';
        }
    }
}




