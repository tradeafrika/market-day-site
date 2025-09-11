"use client";

import Link from "next/link";
import Countdown from "./countdown";
import Participant from "./participant";
import { useState } from "react";
import { Dot } from "lucide-react";
import { formLink } from "./utils/form-link";

export default function Fold() {
  const [currentParticipants, setParticipants] = useState<string>("20+");

  return (
    <div className="w-full min-h-screen text-[#0F2A19] bg-[#F8FDF9] flex items-center flex-col px-4">
      <div className="w-full md:w-[70%] mt-14 space-y-8 text-center flex flex-col items-center">
        {/* CONNECT DISCOVER GROW */}
        <span className="font-bold flex flex-wrap justify-center gap-4 items-center text-sm sm:text-base">
          <span>CONNECT</span>
          <Dot />
          <span>DISCOVER</span>
          <Dot />
          <span>GROW</span>
        </span>

        {/* Heading */}
        <h2 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
          <p>TradeAfrika Market Day:</p>
          <p>Your Marketplace Awaits!</p>
        </h2>

        {/* Subheading */}
        <h3 className="mt-4 max-w-2xl text-sm sm:text-base md:text-lg text-gray-700">
          Join us for the TradeAfrika Market Day, a vibrant event celebrating
          and showcasing the rich diversity of African businesses and products.
          Whether you're a seasoned entrepreneur looking to expand your reach or
          a curious shopper eager to discover unique treasures, this is the
          place to be.
        </h3>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={formLink}
            className="flex font-medium rounded-lg text-white bg-[#038149] hover:bg-transparent hover:text-[#038149] transition  border border-[#038149]  justify-center items-center px-6 py-3"
          >
            Register
          </Link>
          <Link
            href="https://wa.me/256726444638"
            target="_blank"
            className="flex rounded-lg font-medium hover:bg-transparent transition border border-[#038149] bg-[#b7f0d6] text-[#038149] justify-center items-center px-6 py-3"
          >
            Contact us
          </Link>
        </div>

        {/* Countdown + Participants */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 items-center">
          <Countdown />
          <Participant currentValue={currentParticipants} />
        </div>
      </div>
    </div>
  );
}
