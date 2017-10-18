const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.0829;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

var bank_balance = 303.91;
var amount = 0;

function calculateTax(amount) {
    return amount * TAX_RATE;
}

function formatoAmount(amount) {
    return '$' + amount.toFixed(2);
}

// keep buying like the good little consumer you are
while (amount < SPENDING_THRESHOLD) {
    // buy that PHONE
    amount += PHONE_PRICE;

    // maybe something shiny
    if (amount < SPENDING_THRESHOLD) {
        amount += ACCESSORY_PRICE;
    }
}

// now you pay the taxman
amount += calculateTax(amount);

console.log(
    'Your purchase: ' + formatoAmount(amount)
);

// you got moneys for this?
if (amount > bank_balance) {
    console.log(
        'You can\'t afford this. You Broke :('
    );
}