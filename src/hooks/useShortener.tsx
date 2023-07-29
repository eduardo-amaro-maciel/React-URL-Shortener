import { useState } from "react";
import linkShortener from "../services/bitly";
import { toast } from "react-toastify";
import { Link } from "../App";

export default function useShortener() {
   const [result, setResult] = useState("");

   async function onSubmitLink({ link: userLink }: Link) {
      try {
         const data = await linkShortener(userLink);
         setResult(data.link);
      } catch (error) {
         toast.error("Ocorreu um erro");
      }
   }

   return {
      result,
      onSubmitLink,
   };
}
