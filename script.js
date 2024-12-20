//  Задание 1  ------------------------------------------------------

function greet() {
    console.log("Привет, мир!");
}

greet();


//  Задание 2  ------------------------------------------------------

function sayHello(name = "Гость") {
    console.log(`Привет, ${name}!`);
}

sayHello("Жанибек");
sayHello("Борис");
sayHello("Арайлым");
sayHello("Илон");
sayHello();


//  Задание 3  ------------------------------------------------------

let sum = function(num1, num2) {
    return num1 + num2;
}

console.log( sum(15, 32) ) // Выводит в консоль 47
console.log( sum(3, 8) ) // Выводит в консоль 11


//  Задание 4  ------------------------------------------------------

let isEven = function(num) {
    return (num%2==0)?true:false
}

console.log(isEven(5))  //  false
console.log(isEven(8))  //  true
console.log(isEven("12"))  //  true


//  Задание 5  ------------------------------------------------------

function max(num1, num2) {
    if (num1 == num2) return "Числа равны";
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }
}

console.log(max(2,5))  //  5
console.log(max(10,9))  //  10
console.log(max("7",6))  //  "7"
console.log(max(13,13))   //  "Числа равны"


//  Задание 6  ------------------------------------------------------

let getInitials = function(name, surname) {
    return `${name[0]}.${surname[0]}.`;
}

console.log(getInitials("Михаил", "Горбачев"))  //  М.Г.
console.log(getInitials("Жанибек", "Сейтжанов"))  //  Ж.С.
console.log(getInitials("John", "Lennon"))  //  J.L.


//  Задание 7  ------------------------------------------------------

let square = function(num) {
    return num * num;
}

let cube = function(num) {
    return square(num) * num;
}

console.log(square(5)) // 25
console.log(cube(2)) // 8
console.log(cube("4")) // 64


//  Задание 8  ------------------------------------------------------

let summ = (num1, num2) => num1 + num2

console.log( sum(22, 8) ) // Выводит в консоль 30
console.log( sum(3, 5) ) // Выводит в консоль 8


//  Дополнительное задание  -----------------------------------------

// Ниже рекурсивная функция
let getFactorial = num => (num == 1)?1:(num * getFactorial(num - 1))

console.log(getFactorial(1))
console.log(getFactorial(2))
console.log(getFactorial(3))
console.log(getFactorial(4))
console.log(getFactorial(5))