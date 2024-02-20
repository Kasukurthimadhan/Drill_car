// ==== Problem #6 ====
// A buyer is interested in seeing only BMW and Audi cars within the inventory.  Execute a function and return an array that only contains BMW and Audi cars.  Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.

function containBmeAndAudiCars(data){
    try {
        if(!Array.isArray(data) || data.length === 0){
            throw new Error("No cars found in the data")
        }
        let cars_list_bmw_audi=[];
        for(let car of data){
            if(car.car_make=="BMW" || car.car_make=="Audi"){
                cars_list_bmw_audi.push(car)
            }
        }

        return (JSON.stringify(cars_list_bmw_audi, null, 2));
    } catch (error) {
        console.error("An error occurred while processing the data:",error)
    }
}

module.exports=containBmeAndAudiCars;