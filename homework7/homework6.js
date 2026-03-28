var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru" // Нам такі не підходять
    },
];

// ====== РЕГУЛЯРНИЙ ВИРАЗ ======
// 1–2 слова (латиниця/цифри), можуть бути розділені крапкою
// Домен тільки gmail.com або yahoo.com

let emailRegex = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/;


// Фільтруємо валідні адреси
let validEmails = arr.filter(item => emailRegex.test(item.email));

console.log("Довірені email:");
console.log(validEmails);
