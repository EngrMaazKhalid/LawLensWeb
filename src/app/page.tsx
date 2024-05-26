import Image from "next/image";
import { images } from "../../constants"
export default function Home() {
  return (
   <div className="flex flex-col items-center justify-center h-screen px-2 text-white ">
    <h1 className="text-5xl font-bold mb-10 ">LawLens</h1>
    <div className="flex space-x-2 text-center">
      <div>
      <div className="flex flex-col items-center justify-center mb-5">
    <Image src={images.ham} alt="logo" className="w-min h-20" />
    <h2 className="text-2xl font-psemibold mt-3">Ask Anything about Law</h2>
   </div>
   <div className="space-y-2">
    <p className="p-4 bg-gray-700 rounded-lg max-w-[300px]">Get instant answers to your legal questions with our AI chatbot trained on Pakistan's laws</p>
    <p className="p-4 bg-gray-700 rounded-lg max-w-[300px]">Explore legal clarity with expert guidance for easy legal advice and support.</p>
    </div>
    </div>
    </div>
   </div>
  );
}
