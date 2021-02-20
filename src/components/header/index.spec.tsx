import { render } from "@test";
import "@testing-library/jest-dom/extend-expect";

import { Header } from "./index";
import styles from './index.module.scss';

describe("<Header />", () => {
    it("renders without crashing", () => {    
        render(<Header />);
    });

    it("hamburger button opens the menu on click", () => {
        const header = render(<Header />);
        const menuToggleButton = header.getByRole("button");
        const navigationMenu = header.getByTestId("header-navigation-menu");
        menuToggleButton.click();
        expect(navigationMenu).toHaveClass(styles.headerNavMenuOpen);
    });

    it("hamburger button closes the menu when user clicks twice", () => {
        const header = render(<Header />);
        const menuToggleButton = header.getByRole("button");
        const navigationMenu = header.getByTestId("header-navigation-menu");
        menuToggleButton.click();
        menuToggleButton.click();
        expect(navigationMenu).not.toHaveClass(styles.headerNavMenuOpen);
    });
});
