function addLi() {
    let addElement = document.getElementById('add');
    let input = document.getElementById('name')
    let liElement = document.createElement('li');

    if (input.value === '') {
        alert('Добавь значение')
    }
    else {
        liElement.innerText = input.value;



        addElement.append(liElement);

        input.value = '';
    }
}
