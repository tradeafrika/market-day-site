import { Gift, Users } from "lucide-react";
import Image from "next/image";
import lady1 from "@/assets/lady1.jpg";

export default function ExperienceDescription() {
  return (
    <div id="features" className=" bg-neutral-100 text-[#0F2A19] h-[850px] p-8">
      <div className="w-full  h-[80px] mb-12 flex items-center mt-8 justify-center text-5xl text-center font-bold">
        <div className="w-[80%]">
          More Than a Market: An Unforgettable Market Experience
        </div>
      </div>

      <main className="grid grid-cols-2 mt-[90px] m-[60px] gap-14">
        <div className="w-full">
          <div className="w-full h-[300px]">
           <img src={lady1.src} alt="ff" className="w-full h-[300px] object-center object-cover" />
          </div>
          <div className="mt-8 space-y-4">
            <span>#Networking</span>
            <h2 className="font-bold text-4xl">Corporate Lounge</h2>

            <p className="mt-6">
              Our dedicated corporate lounge provides the perfect environment
              for B2B networking. We're curating a special vendor mix to
              facilitate connections and opportunites for corporate buyers and
              partners
            </p>
          </div>
        </div>
        <div className="w-full">
          <div className=" w-full h-[300px]">
           <img src={lady1.src} alt="ff" className="w-full h-[300px] object-center object-cover" />

          </div>
          <div className="mt-8 space-y-4">
            <span>#Experiences</span>
            <h2 className="font-bold text-4xl">Engaging Experiences</h2>
            <p className="mt-6">
              Get ready to be entertained and inspired! Our event will feature
              exciting experiences, including fashion showcases, live tech
              demos, product tastings, live music, and illuminating SME
              spotlight pitches
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
