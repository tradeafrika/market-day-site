import { Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#038149] text-white">
      {/* Top */}
      <div className="flex flex-col h-[] md:flex-row items-center justify-between px-6 md:px-16 py-10 gap-6">
        <span className="font-bold text-2xl sm:text-3xl">TradeAfrika</span>

        <div className="flex space-x-6 text-white">
          <Link href="https://www.instagram.com/tradeafrikamarketplace?igsh=MXVteGNyNXVqNGNkaA%3D%3d&utm_source=qr" aria-label="Instagram">
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
        <div className="flex items-center w-[80%] border-t border-white/40 justify-center py-6 px-4 text-center">
          <span className="font-medium text-xs sm:text-sm">
            &copy; 2025 TradeAfrika. All rights reserved.{" "}
            <a href="/" className="underline hover:text-gray-200">
              Privacy Policy
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
