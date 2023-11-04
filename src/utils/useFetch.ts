import axios from "axios";

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
      "X-RapidAPI-Key": "265d17cc4dmsh63aa91656fc0546p13b5b7jsne954c82ce26a",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
