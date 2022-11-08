"use strict";
const reverse_E = document.querySelector(".reverse");
const fibonacci_E = document.querySelector(".fibonacci");
const palindrome_E = document.querySelector(".palindrome");
const leapYear_E = document.querySelector(".leap-year");
const primeNumber_E = document.querySelector(".prime-number");
const reverseString = (str) => {
    const strArray = str.split("");
    const newArray = [];
    strArray.forEach((item) => {
        newArray.unshift(item);
    });
    return newArray.join('');
};
const fibonacci = () => {
    const newArray = [];
    newArray.push(0);
    newArray.push(1);
    let a = 0;
    let b = 1;
    let tmp = 0;
    for (let i = 0; i < 11; i++) {
        tmp = a + b;
        a = b;
        b = tmp;
        newArray.push(b);
    }
    fibonacci_E.innerHTML = newArray.join(', ');
};
const palindrome = (str) => {
    const reversed = reverseString(str);
    palindrome_E.innerHTML = str + " is a palindrome? " + (reversed === str ? "true" : "false");
};
const leapYear = (year) => {
    const by4 = year % 4;
    const by100 = year % 100;
    const by400 = year % 400;
    let isLeapYear = false;
    if (by4 === 0 && by100 !== 0) {
        isLeapYear = true;
    }
    else if (by400 === 0) {
        isLeapYear = true;
    }
    leapYear_E.innerHTML = year + " is a leap year? " + isLeapYear;
};
const primeNum = (num) => {
    let prime = true;
    if (num > 1) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                prime = false;
                break;
            }
        }
    }
    else {
        prime = false;
    }
    primeNumber_E.innerHTML = num + " is prime? " + prime;
};
reverse_E.innerHTML = "A B C" + " = " + reverseString("A B C");
fibonacci();
palindrome("tattarrattat");
leapYear(2024);
primeNum(59);
