const ADMIN_PASSWORD = 'jqueryismyjam';


const answer = prompt('Введите пароль');

    if (answer === null) {
        alert('Отменено пользователем!');
    } else if ( answer === 'jqueryismyjam') {
        alert ('Добро пожаловать!');
    } else if (answer !== 'jqueryismyjam') {
        alert ('Доступ запрещен, неверный пароль!');
    }
   

alert(answer);