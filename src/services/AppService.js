import HttpService from "./HttpService";
// service for interaction between App and Http calls
export default class AppService {
    static getSpecificTitle(nodeId) {
        return new Promise(async (resolve, reject) => {
            try {
                const [title] = await HttpService.get(`/nodes/${nodeId}`);
                resolve(title);
            } catch (error) {
                console.log("Unable to complete request to get specific title", error);
                reject(error);
            }
        });
    }
    static async getTitles(dispatch) {
        try {
            const titles = await HttpService.get("/nodes");
            dispatch(titles);
        } catch (error) {
            console.log("Unable to complete request to get titles", error);
        }
    }
    static async getVariables(dispatch) {
        try {
            const variables = await HttpService.get("/variables");
            dispatch(variables);
        } catch (error) {
            console.log("Unable to complete request to get variables", error);
        }
    }
    static search(query) {
        return new Promise(async (resolve, reject) => {
            try {
                const titles = await HttpService.post("/nodes/search", {query});
                resolve(titles);
            } catch (error) {
                console.log("Unable to complete request to for query", error);
                reject(error);
            }
        });
    }
}