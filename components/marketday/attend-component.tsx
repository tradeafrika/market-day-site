import Image from "next/image";
import lady1 from "@/assets/lady1.jpg"

export default function AttendComponent() {
    return (
        <div className=" text-[#0F2A19] border-black h-[750px] p-8">
            <div className="w-full h-[80px] flex items-center mt-8 justify-center text-5xl font-bold">Why Attend?</div>
            <main className="grid grid-cols-2 m-[80px]">
                <div className="">
                    <h2 className="font-bold text-5xl">For Vendors: Showcase Your Passion</h2>

                    <p className="mt-6">
                        Are you a small business owner, artisan, or creative entrepreneurship? The TradeAfrika Market
                        Day provides the perfect platform to connect directly with a passionate audience ready to
                        support local and african-owned business . Secure your spot and:
                    </p>

                    <div className=" space-y-3 mt-8">
                        <li>Boost Your Brand: Increase visibility and connect with new customers</li>
                        <li>Generate Sales: Sell your products directly and grow your revenue.</li>
                        <li>Network: Connect with fellow entrepreneurs and build valuable relationships.</li>
                    </div>
                </div>
                <div className="flex items-center justify-center ">

                    <div className=" h-[400px] w-[350px]">
                        <Image src={lady1} alt="ss"  width={350} height={400}  />
                    </div>
                </div>
            </main>
        </div>
    )
}
