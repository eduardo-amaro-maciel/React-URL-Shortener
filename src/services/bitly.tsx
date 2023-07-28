import axios from "axios";

type BitlyResponse = {
   created_at: string;
   id: string;
   link: string;
   long_url: string;
   archived: boolean;
   references: {
      group: string;
   };
};

const BITLY_URL = import.meta.env.VITE_BITLY_URL;
const BITLY_TOKEN = import.meta.env.VITE_BITLY_TOKEN;

const bitly = axios.create({
   baseURL: BITLY_URL,
   headers: {
      Authorization: `Bearer ${BITLY_TOKEN}`,
      "Content-Type": "application/json",
   },
});

export default async function linkShortener(link: string) {
   const response = await bitly.post<BitlyResponse>("/shorten", {
      long_url: link,
      domain: "bit.ly",
   });

   return response.data;
}
