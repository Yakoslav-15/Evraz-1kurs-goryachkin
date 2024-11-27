function clearDiv() {
    console.log('Введите очистку дива')
    let div = document.getElementById('clear')
    div.innerText = ''
}
function change2() {
    let a = prompt('Введите новый текст')
    console.log(a)


    let span = document.getElementById('change')
    span.innerText = a
}