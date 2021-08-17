console.log("Welcome to the main module")
import { createPlan } from "./plan.js"
import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
import { addPlant } from "./field.js";
import { usePlants } from "./field.js";
import { plantSeeds } from "./tractor.js";
import { plantsInField } from "./field.js"
import { harvestPlants } from "./harvester.js";
import { Catalog } from "./catalog.js";

const yearlyPlan = createPlan();
console.log(yearlyPlan);

const testCorn = createCorn();
console.log(testCorn);

const testPotato = createPotato();
console.log(testPotato);

const testSoybean = createSoybean();
console.log(testSoybean);

addPlant(testCorn);
addPlant(testPotato);
addPlant(testSoybean);


const field = usePlants();

console.log(field);

const harvest = harvestPlants(field);
console.log("harvester", harvest);

const element = document.querySelector(".container")

element.innerHTML += Catalog(harvest);



