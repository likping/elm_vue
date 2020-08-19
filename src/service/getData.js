import fetch from "../tool/fetch.js";
export const cityGuess = () => fetch("v1/cities", {
    type: "guess"
});
export const hotCity = () => fetch("v1/cities", {
    type: "hot"
});
export const groupCity = () => fetch("v1/cities", {
    type:"group"
})
export const searchPlace = (cityid, keyword) => fetch("v1/pois", {
    type: "search",
    city_id:cityid,
    keyword:keyword
});
export const poisPlace = (geohash) => fetch(`v2/pois/${geohash}`);
export const msiteFoodTypes = geohash => fetch("v2/index_entry", {
    geohash,
    group_type: '1',
    "flags[]":"F"
})
