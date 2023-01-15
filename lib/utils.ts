import { format } from "date-fns"

export const formatDate = (dateStr: string) => {
    return format(new Date(dateStr), 'MMM d, yyyy')
}