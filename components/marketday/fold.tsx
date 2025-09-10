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
    <div className="w-full h-[750px] text-[#0F2A19] bg-[#F8FDF9] flex items-center flex-col ">
      <div className="w-[70%] mt-14 space-y-12  text-center flex flex-col items-center justify-center">
        <span className="font-bold justify-center flex h-[30px] space-x-8 items-center">
          <span>CONNECT</span>
          <span className="h-full flex items-center justify-center">
            <Dot />
          </span>
          <span>DISCOVER</span>
          <span className="h-full flex items-center justify-center">
            <Dot />
          </span>
          <span>GROW</span>
        </span>
        <h2 className="mt-[18px] text-6xl font-bold">
          <p>TradeAfrika Market Day:</p>
          <p>Your Marketplace Awaits!</p>
        </h2>
        <h3 className="text-center mt-[24px] w-[80%]">
          Join us for the TradeAfrika Market Day, a vibrant event celebrating
          and showcasing the rich diversity of African businesses and products.
          Whether you're a seasoned entrepreneur looking to expand your reach or
          a curious shopper eager to discover unique treasures, this is the
          place to be
        </h3>

        <div className="flex space-x-7 mt-8">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={formLink}
            className="flex  font-medium rounded-lg  text-white bg-[#038149]  justify-center items-center w-[150px] h-[50px]"
          >
            Register
          </Link>
          <Link
            href="https://wa.me/256726444638"
            target="_blank"
            className="flex rounded-lg font-medium   border border-[#038149] bg-[#b7f0d6]  text-[#038149] justify-center items-center w-[150px] h-[50px]"
          >
            Contact us
          </Link>
        </div>

        <div className="flex space-x-4 mt-8">
          <Countdown />
          <Participant currentValue={currentParticipants} />
        </div>
      </div>
    </div>
  );
}
