import { shallow } from "../../../enzyme";
import { Variable } from "./Variable";

const props = {
    variable: {
        name: "name",
        scope: "global"
    }
};
describe("Variable test suite", () => {
    test("should display Variable", () => {
        const wrapper = shallow(<Variable {...props} />);
        expect(wrapper.find(".variable")).toHaveLength(1);
    });
});