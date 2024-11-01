document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.calculator input[type="button"]');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            switch (this.value) {
                case 'AC':
                    display.value = '';
                    break;
                case 'DE':
                    display.value = display.value.slice(0, -1);
                    break;
                case '=':
                    try {
                        const fixedExpression = display.value.replace(/÷/g, '/');
                        let result = eval(fixedExpression);
                        if (Number.isFinite(result)) {
                            display.value = result;
                        } else {
                            display.value = 'Error';
                        }
                    } catch (e) {
                        display.value = 'Error';
                    }
                    break;
                default:
                    if (display.value === 'Error') display.value = ''; // Reset if there was an error
                    display.value += (this.value === '÷' ? '/' : this.value); // Ensure correct value is added
                    break;
            }
        });
    });
});
