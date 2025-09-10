import Link from "next/link";
import { formLink } from "./utils/form-link";

export default function RegisterItem() {
  return (
    <div className="bg-[#038149] text-white w-full h-[400px] flex items-center justify-center flex-col">
      <div className="w-[50%] text-center space-y-8 flex items-center justify-center flex-col mt-9">
        <h2 className="text-5xl font-bold w-[80%]">
          Register Now to Join the Experience!
        </h2>
        <p className="mt-6">
          Ready to be a part of the TradeAfrika Market Day?{" "}
          <span className="font-bold">Spaces are limited</span>, so register
          today to secure your spot as a vendor or let us know you'll be joining
          us a buyer
        </p>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={formLink}
          className="flex mt-5 rounded-lg  bg-white text-[#038149]  justify-center items-center w-[150px] h-[50px]"
        >
          Register
        </Link>
      </div>
    </div>
  );
}
