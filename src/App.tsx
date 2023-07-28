import { FaLink } from "react-icons/fa6";
import { HiOutlineExternalLink } from "react-icons/hi";
import useShortener from "./hooks/useShortener";
import clipboard from "./utils/clipboard";

export default function App() {
   const { link, setLink, result, onSubmitLink } = useShortener();

   return (
      <div className="relative bg-[#F8F5F2] text-[#232323] m-auto flex flex-col items-center justify-center h-screen bg-layout min-h-screen">
         <div className="max-w-[688px] flex flex-col">
            <div className="flex flex-1  flex-col items-center justify-center pb-9 w-full">
               <h1 className="font-bold text-8xl text-center w-full m-0 pb-0 leading-[90px]">
                  Link shortener website
               </h1>
               <h2 className="text-3xl text-center max-w-[600px] w-full font-medium text-[#078080] mt-5">
                  Enter your url in the input field below to shorten them.
               </h2>
            </div>

            <div className="flex flex-col items-center w-full">
               <div className="flex flex-row items-center mb-8 content-center w-full relative">
                  <div className="w-full relative">
                     <input
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                        type="url"
                        placeholder="Enter your URL"
                        className="m-0 text-lg outline-0 w-full h-[50px] pl-[50px] border-solid border-[#232323] border-[3px]"
                        name="input"
                     />
                     <FaLink className="text-[#F45D48] absolute top-3 left-4 text-2xl" />
                  </div>
                  <button
                     onClick={onSubmitLink}
                     className="text-[#F8F5F2] w-[150px] h-[50px] border-solid border-[#232323] border-l-0 border-[3px] p-0 bg-[#078080] m-0 text-lg font-bold cursor-pointer px-3 hover:bg-[#026060]"
                  >
                     Shorten
                  </button>
               </div>

               <div className="flex flex-row items-center content-center w-full">
                  <div className="w-full relative">
                     <input
                        type="url"
                        value={result}
                        className="m-0 text-lg outline-0 w-full h-[50px] pl-[50px] border-solid border-[#232323] border-[3px]"
                        name="output"
                        readOnly
                     />
                     <HiOutlineExternalLink className="text-[#F45D48] absolute top-3 left-4 text-2xl" />
                  </div>
                  <button
                     onClick={() => clipboard(result)}
                     className="text-[#F8F5F2] w-[150px] h-[50px] p-0 bg-[#078080] border-l-0 border-solid border-[#232323] border-[3px] m-0 text-lg font-bold cursor-pointer px-3 hover:bg-[#026060]"
                  >
                     Copy
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}
