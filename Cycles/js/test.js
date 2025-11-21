 let autoBrand = "ТАВРІЯ";
let accelerateСar;
switch (autoBrand) {
    case "Audi":
        accelerateСar = function () {
            let audiSpeedIndex = 100;
            console.log("Розганяємо авто до 150км: " + audiSpeedIndex * 1.5);
        }
        break;
    case "ТАВРІЯ":
        accelerateСar = function () {
            let audiSpeedIndex = 0;
            console.log("Розганяємо авто до 150км")
            for (let i = 0; i < 60; i += 10) {
                audiSpeedIndex += i;
                console.log(audiSpeedIndex);
            }
        }
        break;
}

accelerateСar();