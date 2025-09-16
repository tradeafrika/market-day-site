import { Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface TeamItemProps {
  imageSrc: string;
  name: string;
  role: string;
  linkedInURL:string;
  mailURL:string;
}

export default function TeamItem(props: TeamItemProps) {
  return (
    <div className="  border-neutral-300 border-2 flex flex-col items-center justify-center  text-center max-w-sm ">
      <Image unoptimized  src={props.imageSrc} alt={props.name} className="object-contain rounded-full object-center mt-2" width={200} height={200} />
      <h3 className="font-bold text-[20px] text-black mt-5">
        {props.name}
      </h3>
      <span className="text-neutral-700 mt-2 text-[15px] ">
        {props.role}
      </span>
      

      <div className="flex mt-4 mb-6">
        <Link href={props.linkedInURL} target="_blank" className="text-white   p-3 text-sm rounded-full bg-[#038149] hover:text-white mr-4">
          <Linkedin  />
        </Link>
        <Link href={`mailto:${props.mailURL}`} target="_blank" className="text-white  p-3 text-sm rounded-full bg-[#038149] hover:text-white mr-4">
          <Mail />
        </Link>
      </div>
    </div>
  );
}
