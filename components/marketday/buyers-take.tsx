import Image from "next/image";
import lady1 from "@/assets/lady1.jpg"


export default function BuyersTake() {
  return (
    <div className="  text-[#0F2A19] h-[700px] p-8">
      <main className="grid grid-cols-2 m-[80px]">
        <div className="flex items-center justify-center ">
          <div className=" h-[400px] w-[350px]">
            <Image src={lady1} alt="ss" width={350} height={400} />
          </div>
        </div>
        <div className="">
          <h2 className="font-bold text-5xl">
            For Buyers: Discover Unique Treasures
          </h2>

          <p className="mt-6">
            Come and explore a curated selection of authentic, high-quality
            goods from various African vendors. Find everything from handcrafted
            jewelry and bespoke fashion to organic beauty products and delicious
            food. By attending, you'll be:
          </p>

          <div className=" space-y-3 mt-8">
            <li>
              Finding One-of-a-Kind Items: Shop for unique products you won't
              find anywhere else
            </li>
            <li>
              Supporting Local Businesses: Your purchases directly help African
              entrepreneurs thrive
            </li>
            <li>
              Enjoying a Fun-Filled Day: Experience a lively atmosphere with
              great music and amazing people
            </li>
          </div>
        </div>
      </main>
    </div>
  );
}
