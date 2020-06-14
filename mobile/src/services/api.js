import {create} from "apisauce";

const api = create({
    baseURL: "http://192.168.100.3:3000"
});

api.addResponseTransform(response => {
    if (!response.ok) throw response;
});

export default api;

/*
 * "http://192.168.15.3:3000"
 * "http://192.168.100.3:3000"
 * "http://xxxxxxx:3000"
 * "http://xxxxxxx:3000"
 */
