import { useState } from "react";
import linkShortener from "../services/bitly";
import { toast } from "react-toastify";

export default function useShortener() {
   const [link, setLink] = useState("");
   const [result, setResult] = useState("");

   async function onSubmitLink() {
      try {
         const data = await linkShortener(link);
         setResult(data.link);
      } catch (error) {
         toast.error("Ocorreu um erro");
      }
   }

   return {
      link,
      setLink,
      result,
      setResult,
      onSubmitLink,
   };
}
