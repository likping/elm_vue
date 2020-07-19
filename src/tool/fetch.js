import { baserUrl } from "../config/env";
/**
 * 
 * @param {string} url// v1/cities/
 * @param {string} data //{}
 * @param {string} type //  GET
 * @param {string} method //  fetch
 */
const fetch = async (url="",data={},type="GET",method="fetch") => {
    url = baserUrl + url;
    type = type.toUpperCase();
    /**
     * data:{key:value,key:value}
     * GET XXXXX?key=value&key=value
     */
    if (type == "GET") {
        let datastr = "";
        Object.keys(data).forEach((key) => {
            datastr+=`${key}=${datastr[key]}`
        })

    }
}
export default fetch;