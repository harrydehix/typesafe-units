import FlexibleUnit from "../../FlexibleUnit";
import Group from "../../Group";
import siPrefixes from "../variables/siPrefixes";

/**
 * {@link Group} holding all force units.
 */
const force = new Group("force");

force._internal._Editor.add(
    new FlexibleUnit(
        {
            short: ["%0N"],
            long: {
                sg: ["%0newton"],
                pl: ["%0newton"],
            },
        },
        1,
        0,
        "metric",
        [siPrefixes]
    )
);

export default force;
