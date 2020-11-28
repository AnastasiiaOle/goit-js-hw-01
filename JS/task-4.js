let credits = 23580;
const pricePerDroid = 3000;
let totalPrice;

const answer = prompt (`Введите количество дроидов, которое желаете приобрести`)

if (answer === null) {
    alert ('Отменено пользователем!');
} else  {
    totalPrice = answer*pricePerDroid; 

    if (totalPrice > credits ){
        alert  ("Недостаточно средств на счету!");
    } else {
        credits = credits - totalPrice;
        alert  (`Вы купили ${answer} дроидов, на счету осталось ${credits} кредитов`)
    }
} 