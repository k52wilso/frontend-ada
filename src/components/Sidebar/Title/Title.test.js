import { shallow } from "../../../enzyme";
import { Title } from "./Title";
import * as AppContext from "../../../AppContext";

const props = {
    t: {
        id: 1,
        title: "title"
    },
    onClick: () => "clicked"
};
describe("Title test suite", () => {
    test("should display Title", () => {
        const contextValues = {
            titles: [],
            activeTitle: {
                id: 1,
                title: "mockTitle"
            }
        };
        jest.spyOn(AppContext, "useAppContext").mockImplementation(() => contextValues);
        const wrapper = shallow(<Title {...props} />);
        expect(wrapper.find(".title")).toHaveLength(1);
    });
});