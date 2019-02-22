'use strict';
console.log('1-ое задание. Код даёт такие результаты, потому что в выражениях используются постфиксные и префиксные инкрементирование. Т. е. увеличение числа на еденицу после выполнения выражения или в момент выполнения выражения.');
console.log('2- ое задание. x = 5, потому что a *=2 - это сокращенная запись a = a * 2. ');

var a = prompt('Enter a: ');
var b = prompt('Enter b: ');

if (a >= 0 && b >= 0) {
    console.log('3-ее задание. ' + a + ' - ' + b + ' = ' + (a - b));
    }  
else if (a < 0 && b < 0) {
    console.log('3-ее задание. ' + a + ' * ' + b + ' = ' + (a * b));
    }
else if ((a < 0 && b >= 0) || (a >= 0 && b < 0)) {
    console.log('3-ее задание. ' + a + ' + ' + b + ' = ' + (parseInt(a) + parseInt(b)));
    }

var switcher = function() {
    var a = parseInt(Math.random() * 16);
    console.log('4-ое задание. a = ' + a);
    switch (a) {
        case 0: console.log('0123456789101112131415'); break;
        case 1: console.log('123456789101112131415'); break;
        case 2: console.log('23456789101112131415'); break;
        case 3: console.log('3456789101112131415'); break;
        case 4: console.log('456789101112131415'); break;
        case 5: console.log('56789101112131415'); break;
        case 6: console.log('6789101112131415'); break;
        case 7: console.log('789101112131415'); break;
        case 8: console.log('89101112131415'); break;
        case 9: console.log('9101112131415'); break;
        case 10: console.log('101112131415'); break;
        case 11: console.log('1112131415'); break;
        case 12: console.log('12131415'); break;
        case 13: console.log('131415'); break;
        case 14: console.log('1415'); break;
        case 15: console.log('15'); break;
        }
    }

switcher();

console.log('5-ое задание. sum(x, y), subtr(x, y),  div(x, y), mult(x, y);');
var sum = function(x, y) {
    return x + ' + ' + y + ' = ' + (parseInt(x) + parseInt(y));
    }
var div = function(x, y) {
    return x + ' / ' + y + ' = ' + (x / y);
    }
var subtr = function(x, y) {
    return x + ' - ' + y + ' = ' + (x - y);
    }
var mult = function(x, y) {
    return x + ' * ' + y + ' = ' + (x * y);;
    }

var mathOperation = function(arg1, arg2, op) {
    switch(op) {
        case 'sum': 
            console.log('6-ое задание. Операция sum ' + sum(arg1, arg2)); 
            break;
        case 'div': 
            console.log('6-ое задание. Операция div ' + div(arg1, arg2)); 
            break;
        case 'subtr': 
            console.log('6-ое задание. Операция subtr ' + subtr(arg1, arg2)); break;
        case 'mult': 
            console.log('6-ое задание. Операция mult ' + mult(arg1, arg2)); 
            break;
        default: 
            console.log('Операции "' + op + '" не существует.');
        }
    }

var operation = prompt('Выберите операцию из списка - sum, div, subtr, mult: ');
mathOperation(a, b, operation);

console.log('7-ое задание. 0 не равен null. 0 - это число. null - специальный тип данных означающий "ничего" или "пусто".');

console.log('Я не могу выполнить 8-ое задание. Я не понимаю как рекурсия может участвовать в возведение в степень. Объясните, пожалуйста.');