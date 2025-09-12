import Link from "next/link";
import { formLink, formLink2 } from "./utils/form-link";

export default function VendorBuyer() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 ">
      <div>
        <span className="font-bold">As a Vendor </span>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={formLink}
          className="flex mt-4 font-medium rounded-lg text-white bg-[#038149] hover:bg-[#b7f0d6] hover:text-[#038149] transition  border border-[#038149]  justify-center items-center px-6 py-3"
        >
          Book Your Booth Now
        </Link>
      </div>

      <div>
        <span className="font-bold">As a Buyer</span>
        <Link
          href={formLink2}
          target="_blank"
          className="flex mt-4  rounded-lg font-medium hover:bg-[#b7f0d6]   bg-transparent transition border border-[#038149]  text-[#038149] justify-center items-center px-6 py-3"
        >
          Reserve Your Spot
        </Link>
      </div>
    </div>
  );
}
