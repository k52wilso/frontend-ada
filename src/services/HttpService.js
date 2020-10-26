
// class for making Http calls
const host = process.env.HTTP_HOST || 'localhost';
const port = process.env.HTTP_PORT || '5000';
const fullhost = `http://${host}:${port}`;
export default class HttpService {
    static get(url) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(`${fullhost}${url}`);
                const data = response.json();
                resolve(data);
            } catch (error) {
                console.log("Unable to complete API request", error);
                reject(error);
            }
        });
    }
    static post(url, query) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(`${fullhost}${url}`, {method: "POST", headers: {
                    'Content-Type': 'application/json',
                  }, body: JSON.stringify(query)});
                const data = response.json();
                resolve(data);
            } catch (error) {
                console.log("Unable to complete API request", error);
                reject(error);
            }
        });
    }
}