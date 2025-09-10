// countdown.ts

export interface Countdown {
    days: number
    hours: number
    minutes: number
    seconds: number
}

/**
 * Create a countdown target based on days from the *current day* (midnight).
 * @param daysFromNow - Number of days from today
 */
export function createCountdownTarget(daysFromNow: number): Date {
    const now = new Date()

    // Start from today's midnight
    const midnightToday = new Date(now.getFullYear(), now.getMonth(), now.getDate())

    // Target is midnight + daysFromNow
    return new Date(midnightToday.getTime() + daysFromNow * 24 * 60 * 60 * 1000)
}

/**
 * Calculate the time left until a target date
 */
export function getCountdown(target: Date): Countdown {
    const now = new Date().getTime()
    const distance = target.getTime() - now

    if (distance <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    return { days, hours, minutes, seconds }
}
