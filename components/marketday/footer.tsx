import { Instagram, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
    return (
        <div className=' bg-[#038149] text-white '>
            <div className="flex items-center justify-between pt-12  m-16">
                <span className='font-bold text-3xl '>TradeAfrika</span>
                <div className="text-white flex space-x-5 items-center justify-center">
                    <Link href={"/"}>

                    <Instagram />
                    </Link>
                    <Twitter />
                    <Linkedin />
                </div>
            </div>
            <div className='w-full flex items-center justify-center'>
                <div className="border border-r-transparent border-l-transparent border-b-transparent  border-t-white w-[90%] p-12 flex items-center justify-center">
                    <span className='font-medium text-sm'>
                        &copy; 2025 TradeAfrika. All rights Reserved. <a href="/">Privacy Policy</a>
                    </span>
                </div>
            </div>
        </div>
    )
}
