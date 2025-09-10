import { CupSoda } from "lucide-react";
import PartnerItem from "./partner-item";


export default function Partners() {
    return (
        <div id="partners" className="h-[150px] bg-[#F8FDF9] flex items-center justify-between p-12">
            <div className="font-bold">Used by the world's leading companies</div>
            <div className="flex space-x-14 font-bold">
                <PartnerItem content="CocaCola">
                    <span>
                        <CupSoda/>
                    </span>
                </PartnerItem>
                   <PartnerItem content="CocaCola">
                    <span>
                        <CupSoda/>
                    </span>
                </PartnerItem>
                  <PartnerItem content="CocaCola">
                    <span>
                        <CupSoda/>
                    </span>
                </PartnerItem>
                  <PartnerItem content="CocaCola">
                    <span>
                        <CupSoda/>
                    </span>
                </PartnerItem>
               
               
            </div>
        </div>
    )
}