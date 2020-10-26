import { shallow } from "../../../enzyme";
import { Search } from "./Search";
describe("Search test suite", () => {
    test("should display search", () => {
        const wrapper = shallow(<Search />);
        expect(wrapper.find(".search")).toHaveLength(1);
    });
});