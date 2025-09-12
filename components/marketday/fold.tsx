"use client";

import Link from "next/link";
import Countdown from "./countdown";
import Participant from "./participant";
import { useState } from "react";
import { Dot } from "lucide-react";
import { formLink } from "./utils/form-link";
import VendorBuyer from "./vendorbuyer";

export default function Fold() {
  const [currentParticipants, setParticipants] = useState<string>("20+");

  return (
    <div className="w-full  text-[#0F2A19] bg-[#F8FDF9] flex items-center flex-col px-4">
      <div className="w-full md:w-[70%] mt-12 space-y-8 text-center flex flex-col items-center">
        {/* CONNECT DISCOVER GROW */}
        <span className="font-bold flex flex-wrap justify-center gap-4 items-center text-sm sm:text-base">
          <span>CONNECT</span>
          <Dot />
          <span>DISCOVER</span>
          <Dot />
          <span>GROW</span>
        </span>

        {/* Heading */}
        <h2 className=" leading-[1.2]  text-[72px] tracking-[-0.03em] sm:text-5xl md:text-6xl font-bold ">
          <p>TradeAfrika Market Day:</p>
          <p>Your Marketplace Awaits!</p>
        </h2>

        {/* Subheading */}
        <h3 className=" leading-[1.5] max-w-2xl text-[18px] sm:text-base md:text-lg text-gray-700">
          Join us for the TradeAfrika Market Day, a vibrant event celebrating
          and showcasing the rich diversity of African businesses and products.
          Whether you're a seasoned entrepreneur looking to expand your reach or
          a curious shopper eager to discover unique treasures, this is the
          place to be.
        </h3>

        {/* Buttons */}
        <VendorBuyer/>

        {/* Countdown + Participants */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 items-center">
          <Countdown />
          <Participant currentValue={currentParticipants} />
        </div>
      </div>
    </div>
  );
}
