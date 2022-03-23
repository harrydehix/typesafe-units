import Collection from "../Collection";

import mass from "./groups/mass";
import pressure from "./groups/pressure";
import temperature from "./groups/temperature";
import time from "./groups/time";
import length from "./groups/length";
import area from "./groups/area";
import digital from "./groups/digital";
import speed from "./groups/speed/speed";
import energy from "./groups/energy";
import volume from "./groups/volume";
import current from "./groups/current";
import voltage from "./groups/voltage";
import partsPer from "./groups/partsPer";
import force from "./groups/force";
import power from "./groups/power";

/**
 * _typesafe-units_ default {@link Collection} holding all supported units. Currently it's the only
 * available unit collection.
 *
 * Log the collection to the console to get an overview of all supported units.
 * @example
 * ```typescript
 * import units from "typesafe-units";
 *
 * console.log(units);
 * ```
 *
 */
const units = new Collection();

units._internal._Editor.add(
    length,
    mass,
    pressure,
    time,
    area,
    temperature,
    digital,
    speed,
    energy,
    volume,
    current,
    voltage,
    power,
    partsPer,
    force
);

export default units;
