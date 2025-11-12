node -v
 
function squareAreaCalculation() {
    let a = prompt("Ввести сторону квадрату"); // Нечиста функція через побічний ефект
    let result = a * a;
    console.log(result);  // Нечиста функція через побічний ефект
}
