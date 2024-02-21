// ==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.


function carsAreOlderThanTheYear2000(data){
    try {
        if(!Array.isArray(data) || data.length ===0){
            throw new Error("No cars are older than the year 2000 in the data")
        }
        let cars=data.filter((car) => car<2000);
        console.log(cars.length);
        return cars
    } catch (error) {
        console.error("An error occurred while processing the data:",error)
    }
}

module.exports=carsAreOlderThanTheYear2000;


