import fs from "fs";
import units from "./units/units";
import { UnitString } from "./UnitString";

const filePath = "../src/UnitString.ts";

fs.writeFileSync(filePath, "export type UnitString = ");

const shortUnitStrings = units.possibilities();

for (let j = 0; j < shortUnitStrings.length; j++) {
    const shortUnitString = shortUnitStrings[j];
    const unit = units.unit(shortUnitString as UnitString);
    const unitNotations = unit.computeNotations();
    for (let i = 0; i < unitNotations.length; i++) {
        const notation = unitNotations[i];
        fs.appendFileSync(filePath, '"' + notation + '"');
        if (i + 1 < unitNotations.length) {
            fs.appendFileSync(filePath, " | ");
        }
    }
    if (j + 1 < shortUnitStrings.length) {
        fs.appendFileSync(filePath, " | ");
    }
}

fs.appendFileSync(filePath, ";");
