import axios from "axios";
const apiUrl = "https://youtube-v31.p.rapidapi.com";
const options = {
    method: "GET",
    url: apiUrl,
    params: {
        regionCode: "ID",
        maxResults: "50",
    },
    headers: {
        "X-RapidAPI-Key": "10607f9d8fmshdea17245cd01e00p1c10a7jsn8da053023bb0",
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
};
export const fetchApi = async (param) => {
    try {
        const { data } = await axios.get(`${apiUrl}/${param}`, options);
        return await data;
    } catch (error) {
        return console.log(error.message);
    }
};
