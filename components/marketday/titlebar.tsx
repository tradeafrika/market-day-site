import Link from 'next/link'
import { formLink } from './utils/form-link'

export default function TitlebarMarketDay() {
    return (
        <div className="flex bg-[#038149] text-white pl-12 pr-12 w-full h-[72px] items-center justify-between">
            <nav className='font-bold space-x-6 text-sm'>
                <Link href="/">HOME</Link>
                <Link href="#partners">PARTNERS</Link>
                <Link href="#features">FEATURES</Link>

            </nav>
            <div className='font-bold mr-20 text-xl'>TradeAfrika</div>
            <div className=''>
                <Link href={formLink}  target="_blank" rel="noopener noreferrer"  className="rounded-xl  text-[#038149] bg-white w-[80px] h-[40px]  flex justify-center items-center">
                    Join
                </Link>
            </div>
        </div>
    )
}
