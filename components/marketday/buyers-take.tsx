import Image from "next/image";
import placeholder2 from "@/assets/placeholder-2.png"

export default function BuyersTake() {
  return (
    <div className="text-[#0F2A19] p-6 md:p-12">
      <main className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="flex justify-center order-1 md:order-none">
          <div className="w-full max-w-sm">
            <Image src={placeholder2} alt="Buyer browsing" className="rounded-xl object-cover" />
          </div>
        </div>

        {/* Text */}
        <div>
          <h2 className="font-bold text-2xl sm:text-4xl md:text-5xl">
            For Buyers: Discover Unique Treasures
          </h2>

          <p className="mt-6 text-sm sm:text-base md:text-lg leading-relaxed">
            Come and explore a curated selection of authentic, high-quality
            goods from various African vendors. Find everything from handcrafted
            jewelry and bespoke fashion to organic beauty products and delicious
            food. By attending, you'll be:
          </p>

          <ul className="space-y-3 mt-6 text-sm sm:text-base md:text-lg list-disc pl-5">
            <li>Finding One-of-a-Kind Items: Shop for unique products you won't find anywhere else.</li>
            <li>Supporting Local Businesses: Your purchases directly help African entrepreneurs thrive.</li>
            <li>Enjoying a Fun-Filled Day: Experience a lively atmosphere with great music and amazing people.</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
