const basket1 = {custumer:'New',
                'items':[
                {name:'bread',price:100, discount:0.5},
                {name:'butter',price:200, discount:0.2},
                {name:'milk',price:300, discount:0.4}]};
const basket2 = {custumer:'John',
                'items':[
                {name:'bread',price:100, discount:0.2},
                {name:'butter',price:200, discount:0.4},
                {name:'milk',price:300, discount:0.3}]};

function getTotalPrice(basket) {
    let total = 0;
    for (const item of basket.items) {
        total += item.price;
    }
    return total;
}

function getDiscount(basket) {
    let discount = 0;
    for (const item of basket.items) { 
        discount += (item.price * item.discount); // description: add the discount of each item to the total discount
    }
    return discount;
}

function getFinalPrice(basket) {
    return getTotalPrice(basket) - getDiscount(basket);
}

function results(basket) {
    console.log(`name: ${basket.custumer}`);
    console.log(`total: ${getTotalPrice(basket).toFixed(2)}`);
    console.log(`discount: ${getDiscount(basket).toFixed(2)}`);
    console.log(`final price: ${getFinalPrice(basket).toFixed(2)}\n`);
}

results(basket1);
results(basket2);



