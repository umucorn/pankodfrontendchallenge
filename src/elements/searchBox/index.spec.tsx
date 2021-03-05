import { fireEvent, render } from "@test";
import { SearchBox } from "./index";

describe("<SearchBox />", () => {
    it("renders without crashing", () => {
        const component = render(<SearchBox />);
        expect(component).toBeTruthy();
    });

    it("successfully reacts", () => {
        const handleChange = jest.fn();
        const { getByPlaceholderText, rerender } = render(
          <SearchBox onChange={handleChange} />
        );

        const input = getByPlaceholderText("Search...") as HTMLInputElement;

        expect(input.value).toBe("");
        fireEvent.change(input, { target: { value: "12" } });
        expect(handleChange).toHaveBeenCalledTimes(1);
        rerender(<SearchBox onChange={handleChange} />);
        expect(input.value).toBe("12");
      });
});
