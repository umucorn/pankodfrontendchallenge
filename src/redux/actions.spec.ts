import { searchValueChange, sortingChange } from "./actions";

describe("Redux Actions", () => {
    describe("Programs Actions", () => {

        it("searchValueChange should return searchValueChange.type", () => {
            const action = searchValueChange("new value");
            expect(action.type).toBe(searchValueChange.type);
        });

        it("sortingChange should return sortingChange.type", () => {
            const action = sortingChange({
                sortKey: "yearRelease",
                sortOrder: 'asc',
            });
            expect(action.type).toBe(sortingChange.type);
        });

    });
});
