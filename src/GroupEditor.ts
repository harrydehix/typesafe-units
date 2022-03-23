import Collection from "./Collection";
import FlexibleUnit from "./FlexibleUnit";
import Group from "./Group";
import Unit from "./Unit";

/**
 * Editor of a {@link Group}.
 */
export default class GroupEditor {
    /**
     * Creates a group editor.
     * @hidden
     * @param group
     */
    constructor(private group: Group) {
        this.group = group;
    }

    /**
     * Adds the given units to the related group.
     * @param units units to add
     */
    add(...units: (FlexibleUnit | Unit)[]) {
        const hasCollection = this.group.collection !== Collection.None;
        for (const unit of units) {
            if (unit instanceof FlexibleUnit) {
                // Handling "Flexible Units" differently (actually a flexible unit is just an object holding an array of common units, therefore it's array is added)
                this.add(...unit._units);
            } else {
                // Set the units group
                unit.group = this.group;

                // Mapping the unit to it's notations
                const keys = unit.computeNotations();
                for (const key of keys) {
                    this.group._internal._units().set(key, unit);
                    if (hasCollection)
                        this.group.collection._internal._setUnit(key, unit);
                }
            }
        }
    }
}
