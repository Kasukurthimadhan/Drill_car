// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.

function carModelsListAlphabetically(data){
    try {
        if(!Array.isArray(data) || data.length ===0){
            throw new Error("No car found in the data")
        }
        
        let cars_models= data.map((model) =>{
            return model.car_model;
        });
        
        return cars_models.sort()


    } catch (error) {
console.error("An error occurred while processing the data:",error)
    }
}

module.exports=carModelsListAlphabetically;
