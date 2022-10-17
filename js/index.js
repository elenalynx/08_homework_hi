// Напишіть скрипт, який переводить години в секунди
// Запитати у користувача кількість годин
// Порахувати, скільки секунд у цій кількості годин
// Записати обчислене значення у змінну
// Вивести цю змінну користувачеві через alert

let askHours = 'Enter the number of hours';
let hours;
let seconds;
let answerMessage;

do {
    hours = prompt(askHours);
} while (hours === null || isNaN(+hours) || +hours === 0)

alert(typeof hours);
seconds = hours * 3600;
answerMessage = `At ${hours} hours ${seconds} seconds`;

alert(answerMessage);