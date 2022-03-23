import FlexibleUnit from "../../FlexibleUnit";
import Group from "../../Group";
import Unit from "../../Unit";
import siPrefixes from "../variables/siPrefixes";

/**
 * {@link Group} holding all mass units.
 */
const mass = new Group("mass");

mass._internal._Editor.add(
    new FlexibleUnit(
        {
            short: ["%0g"],
            long: {
                sg: ["%0gram", "%0gramme"],
                pl: ["%0gram", "%0grams"],
            },
        },
        1,
        0,
        "metric",
        [siPrefixes]
    ),
    new FlexibleUnit(
        {
            short: ["%0mt"],
            long: {
                sg: ["%0metric ton"],
                pl: ["%0metric tons"],
            },
        },
        1e6,
        0,
        "metric",
        [siPrefixes.subcopy("da")]
    ),
    new Unit(
        {
            short: ["t"],
            long: {
                sg: ["ton", "short ton"],
                pl: ["tons", "short tons"],
            },
        },
        907_184.74,
        0,
        "imperial"
    ),
    new Unit(
        {
            short: ["oz", "oz av"],
            long: {
                sg: ["ounce", "avoirdupois ounce"],
                pl: ["ounces", "avoirdupois ounces"],
            },
        },
        28.349523125,
        0,
        "imperial"
    ),
    new Unit(
        {
            short: ["lb", "lb av"],
            long: {
                sg: ["pound", "avoirdupois pound", "pound-mass"],
                pl: ["pounds", "avoirdupois pounds"],
            },
        },
        453.59237,
        0,
        "imperial"
    )
);

export default mass;
