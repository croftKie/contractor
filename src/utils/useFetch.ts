import axios from "axios";
import { API_KEY } from "../../config.js";
export async function useFetch(query: string, page: number) {
  const options = {
    method: "GET",
    url: "https://jsearch.p.rapidapi.com/search",
    params: {
      query: `${query} in UK`,
      page: `${page}`,
      num_pages: "1",
      remote_jobs_only: "true",
      employment_types: "CONTRACTOR",
      country: "GB",
    },
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };
  console.log(page);
  console.log(options.params);
  try {
    const { data } = await axios.request(options);
    return data.data;
  } catch (error) {
    console.error(error);
  }
}
