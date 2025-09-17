import { Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#038149] p-7 text-white">
      {/* Top */}
      <div className="flex flex-col space-y-4 h-[] px-6 md:px-16 py-10 gap-6 border border-neutral-400">
        <span className="font-bold text-2xl sm:text-3xl">TradeAfrika</span>

        <div>
          <h2 className="font-bold mb-2 ">Address:</h2>
          <span>National ICT Hub P.O. BOX 7817, Kampala,Uganda</span>
        </div>
        <div className="flex flex-col">
          {/* <h2 className="font-bold mb-3">Contact:</h2>
          <Link href={`tel:+256-763-157-289`} className="underline">
            +256-763-157-289
          </Link> */}
          <Link href={`mailto:tradeafrika0@gmail.com`} className="underline">
            tradeafrika0@gmail.com
          </Link>
        </div>

        <div className="flex space-x-6 text-white">
          <Link
            href="https://www.instagram.com/tradeafrikamarketplace?igsh=MXVteGNyNXVqNGNkaA%3D%3d&utm_source=qr"
            aria-label="Instagram"
          >
            <Instagram />
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://x.com/trade_afrika"
            aria-label="Twitter"
          >
            <Twitter />
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://wwww.linkedin.com/company/afritrade-b2b-digital-marketplace"
            aria-label="LinkedIn"
          >
            <Linkedin />
          </Link>
        </div>
      </div>

      {/* Divider + Bottom */}
      <div className="flex items-center justify-center w-full">
        <div className="flex items-center w-full  justify-between py-6 px-4 text-center">
          <span className="font-medium text-xs sm:text-sm">
            &copy; 2025 TradeAfrika. All rights reserved.{" "}
          </span>

          <div className="flex space-x-8 mt-3">
            <a href="/" className="underline hover:text-gray-200">
              Privacy Policy
            </a>
            <a href="/" className="underline hover:text-gray-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
