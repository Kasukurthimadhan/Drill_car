// ==== Problem #4 ====
// The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.

function allCarYears(data){
    try {
        if(!Array.isArray(data) || data.length ===0){
            throw new Error("No car years found in the data")
        }
        let car_years=[];
        for(let cars of data){
            car_years.push(cars.car_year)
        }
        return car_years
    } catch (error) {
        console.error("An error occurred while prcessing the data:",error)
    }
}

module.exports=allCarYears;