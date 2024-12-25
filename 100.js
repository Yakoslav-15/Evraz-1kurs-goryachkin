
        function checkEvenness() {
        const number = document.getElementById('numberInput').value;
        const resultText = document.getElementById('result');
        if (number.trim() === "") {
        resultText.textContent = "Пожалуйста, введите число!";
        return;
    }

        const num = parseInt(number, 10);
        if (isNaN(num)) {
        resultText.textContent = "Введено не число. Попробуйте снова.";
    } else {
        if (num % 2 === 0) {
        resultText.textContent = `Число чётное.`;
    } else {
        resultText.textContent = `Число нечётное.`;
    }
    }
    }
