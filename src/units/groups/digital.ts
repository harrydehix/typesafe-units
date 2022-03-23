import FlexibleUnit from "../../FlexibleUnit";
import Group from "../../Group";
import siPrefixes from "../variables/siPrefixes";
import iecPrefixes from "../variables/iecPrefixes";

/**
 * {@link Group} holding all digital units.
 */
const digital = new Group("digital");

digital._internal._Editor.add(
    new FlexibleUnit(
        {
            short: ["%0B"],
            long: {
                sg: ["%0byte"],
                pl: ["%0bytes"],
            },
        },
        8,
        0,
        "bytes",
        [siPrefixes.subcopy("k").combine(iecPrefixes)]
    ),
    new FlexibleUnit(
        {
            short: ["%0b"],
            long: {
                sg: ["%0bit"],
                pl: ["%0bits"],
            },
        },
        1,
        0,
        "bits",
        [siPrefixes.subcopy("k").combine(iecPrefixes)]
    )
);

export default digital;
