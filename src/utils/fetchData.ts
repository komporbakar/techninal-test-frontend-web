import axios from "axios";

const url = process.env.NEXT_PUBLIC_APP_URL_NEWSAPI;
const apiKey = process.env.NEXT_PUBLIC_APP_API_KEY_NEWSAPI;

const fetchData = async (params: string) => {
  const response = await axios.get(`${url}?q=${params}`, {
    headers: {
      "X-Api-Key": apiKey,
    },
  });
  const data = response.data;
  return data;
};

export default fetchData;
