import TitlebarMarketDay from "@/components/marketday/titlebar";
import Fold from "../components/marketday/fold";
import Partners from "../components/marketday/partner";
import AttendComponent from "@/components/marketday/attend-component";
import BuyersTake from "@/components/marketday/buyers-take";
import RegisterItem from "@/components/marketday/register2";
import Footer from "@/components/marketday/footer";
import ExperienceDescription from "@/components/marketday/description";

export default function MarketDay() {
  return (
    <div className="bg-[#F8FDF9] text-[#0F2A19]">
      <TitlebarMarketDay />
      <main className="">
        <Fold />
        <Partners />
        <AttendComponent />
        <BuyersTake />
        <RegisterItem />
        <ExperienceDescription />
        <Footer />
      </main>
    </div>
  );
}
