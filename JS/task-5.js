const deliveryCountry = prompt (`Введите страну доставки`);
let cost;


switch (deliveryCountry) {
​
    case 'китай':
        cost = 100;
        const deliveryCountry = "Китай";
        console.log(`Доставка в ${deliveryCountry} будет стоить ${cost} кредитов`);
        break;
    
    case 'чили':
        cost = 250;
        const deliveryCountry = "Чили";
        console.log(`Доставка в ${deliveryCountry} будет стоить ${cost} кредитов`);
        break;
    
    case 'австралия':
        cost = 170;
        const deliveryCountry = "Австралию";
        console.log(`Доставка в ${deliveryCountry} будет стоить ${cost} кредитов`);
        break;
    
    case 'индия':
        cost = 80;
        const deliveryCountry = "Индию";
        console.log(`Доставка в ${deliveryCountry} будет стоить ${cost} кредитов`);
        break;
    
    case 'ямайка':
        cost = 120;
        const deliveryCountry = "Ямайку";
        console.log(`Доставка на ${deliveryCountry} будет стоить ${cost} кредитов`);
        break;
    
    default:
        console.log(`В вашей стране доставка не доступна`);
    
}