// updated version for pull request again

// ===============================
// Домашнє завдання №4
// Тема: Перевірка теорії ймовірності
// Автор: Марина Валентир
// ===============================

function checkProbabilityTheory(count) {
  let evenCount = 0; // кількість парних чисел
  let oddCount = 0;  // кількість непарних чисел

  // Генеруємо випадкові числа в діапазоні 100–1000
  for (let i = 0; i < count; i++) {
    const randomNum = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;

    if (randomNum % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }

  // Розрахунок відсотків
  const evenPercent = ((evenCount / count) * 100).toFixed(2);
  const oddPercent = ((oddCount / count) * 100).toFixed(2);

  // Виведення результатів
  console.log("=== Перевірка теорії ймовірності ===");
  console.log(`Кількість згенерованих чисел: ${count}`);
  console.log(`Парних чисел: ${evenCount}`);
  console.log(`Непарних чисел: ${oddCount}`);
  console.log(`Відсоток парних: ${evenPercent}%`);
  console.log(`Відсоток непарних: ${oddPercent}%`);
  console.log("=====================================");
}

// Приклад виклику функції
checkProbabilityTheory(1000);
