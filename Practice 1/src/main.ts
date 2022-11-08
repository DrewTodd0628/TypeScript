
const reverse_E = document.querySelector(".reverse") as Element;
const fibonacci_E = document.querySelector(".fibonacci") as Element;
const palindrome_E = document.querySelector(".palindrome") as Element;
const leapYear_E = document.querySelector(".leap-year") as Element;
const primeNumber_E = document.querySelector(".prime-number") as Element;


const reverseString = (str: string): string => {
    const strArray: string[] = str.split("");
    const newArray: string[] = [];

    strArray.forEach((item) => {
        newArray.unshift(item);
    })
    return newArray.join('');
}

const fibonacci = (): void => {
    const newArray: number[] = [];
    newArray.push(0);
    newArray.push(1);

    let a: number = 0;
    let b: number = 1;
    let tmp: number = 0;

    for (let i: number = 0; i<11; i++) {
        tmp = a + b;
        a = b;
        b = tmp;
        newArray.push(b);
    }
    fibonacci_E.innerHTML = newArray.join(', ');
}

const palindrome = (str: string): void => {
    const reversed: string = reverseString(str);

    palindrome_E.innerHTML =  str + " is a palindrome? " + (reversed === str ? "true" : "false");
}

const leapYear = (year: number): void => {
    const by4: number = year % 4;
    const by100: number = year % 100;
    const by400: number = year % 400;
    let isLeapYear: boolean = false;

    if (by4 === 0 && by100 !== 0) {
        isLeapYear = true;
    } else if (by400 === 0) {
        isLeapYear = true;
    }
    leapYear_E.innerHTML = year + " is a leap year? " + isLeapYear;
}

const primeNum = (num: number): void => {
    let prime: boolean = true;

    if (num > 1) {
        for (let i: number = 2; i<num; i++) {
            if (num % i === 0) {
                prime = false;
                break;
            }
        }
    } else {
        prime = false;
    }
    primeNumber_E.innerHTML = num + " is prime? " + prime;
}



reverse_E.innerHTML = "A B C" + " = " + reverseString("A B C");
fibonacci();
palindrome("tattarrattat");
leapYear(2024);
primeNum(59)