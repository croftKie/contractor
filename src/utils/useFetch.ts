import axios from "axios";
import { API_KEY } from "../../config.js";
export async function useFetch(query: string) {
  const options = {
    method: "GET",
    url: "https://jsearch.p.rapidapi.com/search",
    params: {
      query: query,
      page: "1",
      num_pages: "1",
    },
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  try {
    const { data } = await axios.request(options);
    return data.data;
  } catch (error) {
    console.error(error);
  }
}
