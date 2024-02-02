console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

basket = [];

function addItem(item) {
    basket.push(item);
    return true;
    console.log(`Basket is ${basket}`);
}

addItem('item');

function listItems() {
    for(let item of basket){
        console.log(item);
    }
}

listItems();

function empty() {
    basket.length = 0;
    console.log(listItems);
}

empty();

var maxItems = 5;

function isFull() {
    if (basket.length < maxItems) {
        return false;
    }
    else if (basket.length >= maxItems) {
        return true;
    }
}

isFull();










// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
