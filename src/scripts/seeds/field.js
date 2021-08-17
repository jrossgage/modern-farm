let plantsInField = [];

export const addPlant = (seed) => {
    if (Array.isArray(seed)) {
        seed.forEach(s => {
            plantsInField.push(s)
        });
    }
    else {
        plantsInField.push(seed);
    }
};

export const usePlants = () => {
    return plantsInField;
};