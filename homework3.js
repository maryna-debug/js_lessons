function pow(x, y) {
  let result = 1; // початкове значення (бо 1 — нейтральний елемент для множення)
  
  for (let i = 0; i < y; i++) {
    result = result * x; // кожного разу множимо результат на x
  }

  return result;
}

// Приклад перевірки:
console.log(pow(2, 3)); // 8
console.log(pow(5, 2)); // 25
console.log(pow(10, 0)); // 1
