import Link from "next/link";
import { formLink } from "./utils/form-link";

export default function RegisterItem() {
  return (
    <div className="bg-[#038149] text-white w-full py-16 px-6 flex items-center justify-center">
      <div className="max-w-3xl text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Register Now to Join the Experience!
        </h2>

        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          Ready to be a part of the TradeAfrika Market Day?{" "}
          <span className="font-bold">Spaces are limited</span>, so register
          today to secure your spot as a vendor or let us know you'll be joining
          us as a buyer.
        </p>

        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={formLink}
          className="inline-flex mt-4 hover:text-white hover:bg-orange-400  rounded-lg bg-white text-[#038149] font-medium justify-center items-center px-6 py-3"
        >
          Book Your Stall Now
        </Link>
      </div>
    </div>
  );
}
