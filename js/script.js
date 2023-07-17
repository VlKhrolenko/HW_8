// Напишите функцию isPrime(). Она принимает число и возвращает true, если число является простым, и false в ином случае.
//
//     Простое число — целое положительное число, имеющее ровно два различных натуральных делителя — единицу и самого себя.
//     Например, 7 — простое число, потому что делится без остатка только на 1 и на себя. 2017 — другое простое число.
//
//     Используйте цикл for .
//
// Примеры:
//
//     isPrime(1); // false
// isPrime(7); // true
// isPrime(10); // false


const nam = +prompt('Введите число');
function isPrime (num) {
    let check
    for (let i = 2; i < num; i++){
        let answer = num / i;
        if (Number.isInteger(answer) === true){
            check = false; break
        }else{
            check = true;
        }
    } return check
}

console.log(isPrime(nam))