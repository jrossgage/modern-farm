
let output = []

export const harvestPlants = (plants) => {
    for (let plant of plants) {
        if (plant.type === "Corn") {
            let cornHalf = plant.output / 2;

            for (let i = 0; i < cornHalf; i++) {
                output.push(plant)
            }
        }
        else {
            for (let i = 0; i < plant.output; i++) {
                output.push(plant)
            }
        }
    }
    return output;
}
