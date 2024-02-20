// ==== Problem #2 ====
// The dealer needs the information on the last car in their inventory. Execute a function to find what the make and model of the last car in the inventory is?  Log the make and model into the console in the format of:

function lasrCarDetails(data){
    try {
        if(!Array.isArray(data) || data.length === 0){
            throw new Error("No cars found in the data")
        }

        let lasr_car=data[data.length-1];
    console.log(`Last car is a ${lasr_car.car_make} ${lasr_car.car_model}`);

    } catch (error) {
        console.error("An error occurred while processing the data:",error)
    }
}

module.exports=lasrCarDetails;