import { useEffect, useState } from 'react'
import CountdownTimerItem from './countdown-timer'
import { createCountdownTarget, getCountdown } from './utils/timer'

export default function Countdown() {
    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })

    useEffect(() => {
        const target = createCountdownTarget(52) // 52 days from today

        const updateCountdown = () => {
            setCountdown(getCountdown(target))
        }

        // Update immediately on mount
        updateCountdown()

        // Update every second
        const interval = setInterval(updateCountdown, 1000)

        // Cleanup on unmount
        return () => clearInterval(interval)
    }, [])

    // Pads numbers to 2 digits, except days can stay as-is
    const formatNumber = (value: number, pad: boolean = true) =>
        pad ? value.toString().padStart(2, '0') : value.toString()

    return (
        <div>
            <h2 className="font-bold mb-4">Countdown to Market Day</h2>
            <main className="flex space-x-2 rounded-xl p-3 h-[85px] bg-[#063d25]">
                <CountdownTimerItem label="Days" value={formatNumber(countdown.days, false)} />
                <CountdownTimerItem label="Hours" value={formatNumber(countdown.hours)} />
                <CountdownTimerItem label="Minutes" value={formatNumber(countdown.minutes)} />
                <CountdownTimerItem label="Seconds" value={formatNumber(countdown.seconds)} />
            </main>
        </div>
    )
}
