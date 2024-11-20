function changeText() {
    let changeDom = document.getElementById('change')
    let change = prompt('Введите новый текст')
    console.log(change)
    changeDom.innerText = change
}
