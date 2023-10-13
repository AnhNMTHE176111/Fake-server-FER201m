const price = (123).toString();
let newPrice = '';
let j = 1;
for (let index = price.length - 1; index >= 0; index--) {
    newPrice = price.charAt(index) + newPrice;
    if (j === 3 && index !== 0) {
        newPrice = '.' + newPrice;
        j = 0;
    }
    j++;
}

const a = 123456;
const b = a.toLocaleString('en-US');
console.log('price: ' + b);
console.log('newPrice: ' + newPrice);