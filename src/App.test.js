import { shallow } from "./enzyme";
import { App } from "./App";
import * as AppContext from "./AppContext";
describe("App test suite", () => {
    test("should display App", () => {
        const contextValues = {
            titles: [],
            setTitles: () => "setTitles",
            setVariables: () => "setVariables"
        };
        jest.spyOn(AppContext, "useAppContext").mockImplementation(() => contextValues);
        const wrapper = shallow(<App />);
        expect(wrapper.find(".app")).toHaveLength(1);
    });
});