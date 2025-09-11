import Image from "next/image";
import lady1 from "@/assets/lady1.jpg";

export default function ExperienceDescription() {
  return (
    <div
      id="features"
      className="bg-neutral-100 text-[#0F2A19] px-6 md:px-12 py-16"
    >
      {/* Heading */}
      <div className="w-full mb-12 flex items-center justify-center text-center">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold max-w-4xl leading-tight">
          More Than a Market: An Unforgettable Market Experience
        </h2>
      </div>

      {/* Content */}
      <main className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {/* Item 1 */}
        <div className="w-full">
          <div className="w-full h-[250px] sm:h-[300px]">
            <Image
              src={lady1}
              alt="Corporate networking"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="mt-6 space-y-4">
            <span className="text-sm font-medium text-[#038149]">
              #Networking
            </span>
            <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl">
              Corporate Lounge
            </h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              Our dedicated corporate lounge provides the perfect environment
              for B2B networking. We're curating a special vendor mix to
              facilitate connections and opportunities for corporate buyers and
              partners.
            </p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="w-full">
          <div className="w-full h-[250px] sm:h-[300px]">
            <Image
              src={lady1}
              alt="Engaging experiences"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="mt-6 space-y-4">
            <span className="text-sm font-medium text-[#038149]">
              #Experiences
            </span>
            <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl">
              Engaging Experiences
            </h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              Get ready to be entertained and inspired! Our event will feature
              exciting experiences, including fashion showcases, live tech
              demos, product tastings, live music, and illuminating SME
              spotlight pitches.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
