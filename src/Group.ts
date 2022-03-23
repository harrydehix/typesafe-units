import { inspect } from "util";
import Collection from "./Collection";
import GroupEditor from "./GroupEditor";
import { GroupString } from "./GroupString";
import Unit from "./Unit";
import { UnitString } from "./UnitString";

/**
 * A group combines units of one quantity. Units of one group are convertible into each other.
 * A group is always part of one single {@link Collection}.
 */
export default class Group {
    /**
     * @hidden
     */
    public static None = new Group("none" as GroupString);

    /**
     * The units of the group.
     */
    private units = new Map<UnitString, Unit>();

    /**
     * The group's collection.
     */
    collection: Collection = Collection.None;

    /**
     * The group's name. Is unique.
     */
    name: GroupString;

    /**
     * @hidden
     */
    readonly _internal = {
        /**
         * Returns the group's unit map. Only used internally.
         * @returns the groups unit map
         */
        _units: () => {
            return this.units;
        },

        /**
         * Internally used group editor to create unit groups.
         */
        _Editor: new GroupEditor(this),
    };

    /**
     * Returns a string array containing the short names of all units of this group.
     * @returns a string array containing the short names of all units of this group.
     */
    possibilities() {
        const units: Unit[] = [];
        const keys: UnitString[] = [];
        this.units.forEach((unit, key) => {
            if (!units.includes(unit)) {
                units.push(unit);
                keys.push(key);
            }
        });
        return keys;
    }

    /**
     * Creates a new group.
     * @param name the group's unique name
     * @hideconstructor
     * @hidden
     */
    constructor(name: GroupString) {
        this.name = name;
    }

    /**
     * Returns the group as human-readable string.
     * @returns the group as string
     */
    toString() {
        let result = `Group '${this.name}' [\n  `;
        const possibilities = this.possibilities();
        for (let i = 0; i < possibilities.length; i++) {
            result += possibilities[i];
            if (i + 1 === possibilities.length) result += "\n";
            else if ((i + 1) % 12 === 0) result += ",\n  ";
            else result += ", ";
        }
        result += "]";
        return result;
    }

    /**
     * @hidden
     */
    [inspect.custom](depth: any, options: any) {
        let result = `Group `;
        result += options.stylize(`'${this.name}'`, "string");
        result += ` [\n  `;
        const possibilities = this.possibilities();
        for (let i = 0; i < possibilities.length; i++) {
            result += options.stylize(possibilities[i], "special");
            if (i + 1 === possibilities.length) result += "\n";
            else if ((i + 1) % 12 === 0) result += ",\n  ";
            else result += ", ";
        }
        result += "]";
        return result;
    }
}
