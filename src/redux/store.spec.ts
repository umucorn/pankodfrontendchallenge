import store from "./store";

describe("Redux Store", () => {
    it("should create store with Programs reducer", () => {
        const currentState = store.getState();
        expect(currentState).toHaveProperty("programs");
    });
});
