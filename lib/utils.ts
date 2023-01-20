import { format } from "date-fns"

export const formatDate = (dateStr: string) => {
    return format(new Date(dateStr), 'MMM d, yyyy')
}

export const capitalize = (str: string) => {
    return str.charAt(0).charAt(0).toUpperCase() + str.slice(1)
}