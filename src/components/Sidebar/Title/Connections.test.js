import { shallow } from "../../../enzyme";
import { Connections } from "./Connections";
import * as AppContext from "../../../AppContext";

const props = {
    connections: [],
    titles: [],
    onClick: () => "clicked"
};
describe("Connections test suite", () => {
    test("should display Connections", () => {
        const contextValues = {
            titles: [],
            activeTitle: {
                id: 1,
                title: "mockTitle"
            }
        };
        jest.spyOn(AppContext, "useAppContext").mockImplementation(() => contextValues);
        const wrapper = shallow(<Connections {...props} />);
        expect(wrapper.find(".connections")).toHaveLength(1);
    });
});