// ===============================
// Домашнє завдання 7
// Тема: Регулярні вирази
// Автор: Марина Валентир
// ===============================

// Регулярний вираз:
// знаходить слова з 6+ символів, які НЕ містять літер "A" або "a"
let regex = /^[^Aa]{6,}$/;

// Перевірки (приклади з умови)
console.log("Wonderful =", regex.test("Wonderful")); // true
console.log("Joyful =", regex.test("Joyful"));       // true

console.log("Happiness =", regex.test("Happiness")); // false (є 'a')
console.log("Time =", regex.test("Time"));           // false (менше 6 символів)
console.log("Apple =", regex.test("Apple"));         // false (є 'A')
