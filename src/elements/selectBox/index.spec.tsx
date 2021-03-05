import { render } from "@test";
import '@testing-library/jest-dom'
import selectEvent from "react-select-event";
import { SelectBox } from "./index";

const OPTIONS = [
    { value: undefined, label: 'No Sorting' },
    { value: 'YEAR_DESC', label: 'Year Descending' },
    { value: 'YEAR_ASC', label: 'Year Ascending' },
    { value: 'TITLE_DESC', label: 'Title Descending' },
    { value: 'TITLE_ASC', label: 'Title Ascending' },
];

describe("<SelectBox />", () => {
    it("renders without crashing", () => {
        const component = render(
            <SelectBox
                options={[
                    {
                        label: 'Test',
                        value: 1,
                    }
                ]}    
            />
        );

        expect(component).toBeTruthy();
    });

    it("has the selected value in form", async () => {
        const { getByRole, getByLabelText } = render(
            <form role="form">
              <label htmlFor="sorting">Sorting</label>
              <SelectBox options={OPTIONS} name="sort" inputId="sorting" />
            </form>
          );

          expect(getByRole("form")).toHaveFormValues({ sort: "" });
          
          await selectEvent.select(getByLabelText("Sorting"), "Year Descending");
          expect(getByRole("form")).toHaveFormValues({ sort: "YEAR_DESC" });
    });

    it("successfully reacts", async () => {       
        const handleChange = jest.fn();
 
        const { getByLabelText } = render(
            <form role="form">
              <label htmlFor="sorting">Sorting</label>
              <SelectBox options={OPTIONS} name="sort" inputId="sorting" onChange={handleChange} />
            </form>
          );
         
          await selectEvent.select(getByLabelText("Sorting"), "Year Descending");
          expect(handleChange).toHaveBeenCalled();
    });
});
