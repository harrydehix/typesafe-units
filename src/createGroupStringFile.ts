import fs from "fs";
import units from "./units/units";

const filePath = "../src/GroupString.ts";

fs.writeFileSync(filePath, "export type GroupString =");

const groups = units.groupList();

for (const group of groups) {
    fs.appendFileSync(filePath, ' | "' + group + '"');
}

fs.appendFileSync(filePath, ";");
