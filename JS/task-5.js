let deliveryCountry = prompt(`Введите страну доставки`);
let cost;
switch(deliveryCountry) {
    case 'китай':
        cost = 100;
        deliveryCountry = "Китай";
        console.log(`Доставка в ${deliveryCountry} будет стоить ${cost} кредитов`);
        break;
    case 'чили':
        cost = 250;
        deliveryCountry = "Чили";
        console.log(`Доставка в ${deliveryCountry} будет стоить ${cost} кредитов`);
        break;
    case 'австралия':
        cost = 170;
        deliveryCountry = "Австралию";
        console.log(`Доставка в ${deliveryCountry} будет стоить ${cost} кредитов`);
        break;
    case 'индия':
        cost = 80;
        deliveryCountry = "Индию";
        console.log(`Доставка в ${deliveryCountry} будет стоить ${cost} кредитов`);
        break;
    case 'ямайка':
        cost = 120;
        deliveryCountry = "Ямайку";
        console.log(`Доставка на ${deliveryCountry} будет стоить ${cost} кредитов`);
        break;
    default:
        console.log(`В вашей стране доставка не доступна`);
}