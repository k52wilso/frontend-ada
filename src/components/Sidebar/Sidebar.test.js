import { shallow } from "../../enzyme";
import { Sidebar } from "./Sidebar";
import * as AppContext from "../../AppContext";
describe("Sidebar test suite", () => {
    test("should display Sidebar", () => {
        const contextValues = {
            titles: [],
            setActiveTitle: () => "setActiveTitle",
            setSearchTerm: () => "setSearchTerm"
        };
        jest.spyOn(AppContext, "useAppContext").mockImplementation(() => contextValues);
        const wrapper = shallow(<Sidebar />);
        expect(wrapper.find(".sidebar")).toHaveLength(1);
    });
});