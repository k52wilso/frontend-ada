import { shallow } from "../../enzyme";
import { Details } from "./Details";
import * as AppContext from "../../AppContext";

const props = {
    variable: {
        name: "name",
        scope: "global"
    }
};
describe("Details test suite", () => {
    test("should display Details", () => {
        const contextValues = {
            activeTitle: {
                id: 1,
                title: "mockTitle"
            }
        };
        jest.spyOn(AppContext, "useAppContext").mockImplementation(() => contextValues);
        const wrapper = shallow(<Details {...props} />);
        expect(wrapper.find(".details")).toHaveLength(1);
    });
});