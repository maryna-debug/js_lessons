// Регулярка: слова з 6+ букв, без A/a
let regex = /\b(?!\w*[Aa])[A-Za-z]{6,}\b/g;

// Приклади з умови
console.log("Wonderful =", regex.test("Wonderful")); // true
console.log("Joyful =", regex.test("Joyful"));       // true

console.log("Happiness =", regex.test("Happiness")); // false (є 'a')
console.log("Time =", regex.test("Time"));           // false (менше 6)
console.log("Apple =", regex.test("Apple"));         // false (є 'A')

// Перевірка для одного рядка
let a = "Wonderful, Joyful, Happiness, Time, Task, Apple";
console.log(a.match(regex)); // ["Wonderful", "Joyful"]
