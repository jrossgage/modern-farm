import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
import { addPlant } from "./field.js";

export const plantSeeds = (plan) => {
    let seed = {};
    plan.map(row => {
        row.forEach(plant => {
            if (plant.type === "Asparagus") {
                seed = createAsparagus();
            }
            if (plant.type === "Corn") {
                seed = createCorn();
            }
            if (plant.type === "Potato") {
                seed = createPotato();
            }
            if (plant.type === "Soybean") {
                seed = createSoybean();
            }
            if (plant.type === "Sunflower") {
                seed = createSunflower();
            }
            if (plant.type === "Wheat") {
                seed = createWheat();
            }
            addPlant(seed);
        });
    })
}