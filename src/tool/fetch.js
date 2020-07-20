import { baseUrl } from "../config/env";
/**
 * 
 * @param {string} _url// v1/cities/
 * @param {string} _data //{}
 * @param {string} _type //  GET
 * @param {string} _method //  fetch
 */
const fetch = async (_url="",_data={},_type="GET",_method="fetch") => {
    _url = baseUrl +'/'+ _url;
    _type = _type.toUpperCase();
  
    /**
     * data:{key:value,key:value}
     * GET XXXXX?key=value&key=value
     */
    if (_type == "GET") {
        let datastr = "";
        Object.keys(_data).forEach((key) => {
            datastr += `${key}=${_data[key]}&`;
        })
        if (datastr != "") {
            datastr = datastr.substring(0, datastr.lastIndexOf('&'));
            _url = `${_url}?${datastr}`;
        }
    }
    console.log(_url);
    if (window.fetch&&_method=="fetch") {
        let res = await window.fetch(_url);
        let json = await res.json();
        return json;
    }
  
}
export default fetch;