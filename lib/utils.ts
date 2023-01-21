import { format } from "date-fns"

export const formatDate = (dateStr: string) => {
    return format(new Date(dateStr), 'MMM d, yyyy')
}

export const capitalize = (str: string) => {
    return str.charAt(0).charAt(0).toUpperCase() + str.slice(1)
}

export const readingTime = (text: string) => {
    const wpm = 200
    const words = text.trim().split(/\s+/).length
    const time = Math.ceil(words/wpm)
    return time
}