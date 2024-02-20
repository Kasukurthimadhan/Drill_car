// ==== Problem #1 ====
// The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car. Then log the car's year, make, and model in the console log in the format of:


function carWithAnIdOf_33(data, idToFind) {
    try {
        if (!Array.isArray(data)) {
            throw new Error("Invalid data. Expected an array.");
        }

        if (typeof idToFind !== 'number') {
            throw new Error("Invalid ID. Expected a number.");
        }

        for (let car of data) {
            if (car.id === idToFind) {
                console.log(`Car ${idToFind} is a ${car.car_year} ${car.car_make} ${car.car_model}`);
            }
        }
    } catch (error) {
        console.error("An error occurred while processing the data:", error);
    }
}

module.exports=carWithAnIdOf_33
