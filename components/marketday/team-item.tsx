import { Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface TeamItemProps {
  imageSrc: string;
  name: string;
  role: string;
  linkedInURL: string;
  mailURL: string;
}

export default function TeamItem(props: TeamItemProps) {
  return (
    <div className="border-2 border-neutral-300 flex flex-col items-center justify-center text-center w-full max-w-xs sm:max-w-sm md:max-w-md p-4 rounded-xl shadow-sm">
      <Image
        unoptimized
        src={props.imageSrc}
        alt={props.name}
        className="object-cover rounded-full object-center mt-2"
        width={180}
        height={180}
      />
      <h3 className="font-bold text-lg sm:text-xl md:text-2xl text-black mt-5">
        {props.name}
      </h3>
      <span className="text-neutral-700 mt-2 text-sm sm:text-base">
        {props.role}
      </span>

      <div className="flex gap-4 mt-4 mb-6">
        <Link
          href={props.linkedInURL}
          target="_blank"
          className="text-white p-3 rounded-full bg-[#038149] hover:bg-[#026b3a] transition"
        >
          <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
        </Link>
        <Link
          href={`mailto:${props.mailURL}`}
          target="_blank"
          className="text-white p-3 rounded-full bg-[#038149] hover:bg-[#026b3a] transition"
        >
          <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
        </Link>
      </div>
    </div>
  );
}
