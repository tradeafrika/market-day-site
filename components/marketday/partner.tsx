import { CupSoda } from "lucide-react";
import PartnerItem from "./partner-item";

export default function Partners() {
  return (
    <div
      id="partners"
      className="bg-[#F8FDF9] flex flex-col md:flex-row items-center justify-between p-6 md:p-12 gap-6"
    >
      {/* Title */}
      <div className="font-bold text-center md:text-left">
        Our 
      </div>

      {/* Logos */}
      <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-14 font-bold">
        <PartnerItem content="CocaCola">
          <CupSoda />
        </PartnerItem>
        <PartnerItem content="CocaCola">
          <CupSoda />
        </PartnerItem>
        <PartnerItem content="CocaCola">
          <CupSoda />
        </PartnerItem>
        <PartnerItem content="CocaCola">
          <CupSoda />
        </PartnerItem>
      </div>
    </div>
  );
}
