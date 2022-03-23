import Collection from "./Collection";
import Group from "./Group";

/**
 * Editor of a {@link Collection}.
 */
export default class CollectionEditor {
    /**
     * Creates a collection editor.
     * @hidden
     * @param collection
     */
    constructor(private collection: Collection) {
        this.collection = collection;
    }

    /**
     * Adds all passed unit groups to the collection.
     * @param groups the unit group's to add
     */
    add(...groups: Group[]) {
        for (const group of groups) {
            group.collection = this.collection;
            this.collection._internal._groups().set(group.name, group);

            const unitMap = group._internal._units();
            unitMap.forEach((unit, key) => {
                this.collection._internal._units().set(key, unit);
            });
        }
    }
}
