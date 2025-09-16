import Image from "next/image";
import placeholder1 from "@/assets/placholder-1.png"

export default function AttendComponent() {
  return (
    <div className="text-[#0F2A19] p-6 md:p-12">
      {/* Heading */}
      <div className="w-full flex items-center justify-center text-3xl sm:text-4xl md:text-5xl font-bold mb-12">
        Why Attend?
      </div>

      {/* Main Content */}
      <main className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <h2 className="font-bold text-2xl sm:text-4xl md:text-5xl">
            For Vendors: Showcase Your Passion
          </h2>

          <p className="mt-6 text-sm sm:text-base md:text-lg leading-relaxed">
            Are you a small business owner, artisan, or creative entrepreneur?
            The TradeAfrika Market Day provides the perfect platform to connect
            directly with a passionate audience ready to support local and
            African-owned businesses. Secure your spot and:
          </p>

          <ul className="space-y-3 mt-6 text-sm sm:text-base md:text-lg list-disc pl-5">
            <li>Boost Your Brand: Increase visibility and connect with new customers.</li>
            <li>Generate Sales: Sell your products directly and grow your revenue.</li>
            <li>Network: Connect with fellow entrepreneurs and build valuable relationships.</li>
          </ul>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <div className="w-full max-w-sm">
            <Image src={placeholder1} alt="Vendor showcasing" className="rounded-xl object-cover" />
          </div>
        </div>
      </main>
    </div>
  );
}
