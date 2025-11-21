var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
};

// Послуги можуть додаватися пізніше
services["Розбити скло"] = "200 грн";

// Метод для розрахунку загальної вартості
function price() {
    let sum = 0;
    for (let key in services) {
        // Витягуємо лише число з рядка "60 грн"
        let value = parseInt(services[key]);
        sum += value;
    }
    return sum + " грн";
}

// Метод для мінімальної ціни
function minPrice() {
    let prices = Object.values(services).map(p => parseInt(p));
    return Math.min(...prices) + " грн";
}

// Метод для максимальної ціни
function maxPrice() {
    let prices = Object.values(services).map(p => parseInt(p));
    return Math.max(...prices) + " грн";
}

// Перевірка роботи
console.log("Загальна вартість:", price());
console.log("Мінімальна ціна:", minPrice());
console.log("Максимальна ціна:", maxPrice());
