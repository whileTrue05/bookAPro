//Sukhveer Dhillon
import AllCategories from '../pages/AllCategories';
import {render} from '@testing-library/react';


describe("categories view", () => {
    test("Categories should be visible on all categories page", () => {
        const component = render(<AllCategories />);
        const category_item = component.getAllByLabelText("cat-item");
        expect(category_item.length).toBeGreaterThan(0);

    })

    test("Categories should have images", () => {
        const component = render(<AllCategories />);
        const category_item = component.getAllByLabelText("cat-item-img");

        expect(category_item.length).toBeGreaterThan(0);

    })
})