export function getLocalIsoDateTime(date: Date): string{
    const isoDate = getLocalIsoDate(date);
    const isoTime = getLocalIsoTime(date);
    return `${isoDate}T${isoTime}`;
}

function getLocalIsoDate(date: Date): string {
    const year = date.getFullYear();
    const month = formatDatePart(date.getMonth() + 1);
    const day = formatDatePart(date.getDate());

    return `${year}-${month}-${day}`;
}

function getLocalIsoTime(date: Date): string {
    const hours = formatDatePart(date.getHours());
    const minutes = formatDatePart(date.getMinutes());

    return `${hours}:${minutes}`;
}

const formatDatePart = (number): string => {
    return number < 10 ? `0${number}` : `${number}`;
};

/**
 * Creates a DateTimeFormat formatter for a specific timezone
 */
function createTimezoneFormatter(timezone: string, includeSeconds = false) {
    const options: Intl.DateTimeFormatOptions = {
        timeZone: timezone,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    };

    if (includeSeconds) {
        options.second = "2-digit";
    }

    return new Intl.DateTimeFormat("en-US", options);
}

/**
 * Parses DateTimeFormat parts into a structured object
 * Iterates through parts array once for efficiency
 */
function parseDateTimeParts(parts: Intl.DateTimeFormatPart[]) {
    const result = {
        year: 0,
        month: 0,
        day: 0,
        hour: 0,
        minute: 0,
    };

    for (const part of parts) {
        switch (part.type) {
            case "year":
                result.year = parseInt(part.value);
                break;
            case "month":
                result.month = parseInt(part.value);
                break;
            case "day":
                result.day = parseInt(part.value);
                break;
            case "hour":
                result.hour = parseInt(part.value);
                break;
            case "minute":
                result.minute = parseInt(part.value);
                break;
        }
    }

    return result;
}

/**
 * Converts a datetime-local string to Unix timestamp in a specific timezone
 * @param dateTimeLocal - DateTime string in format "YYYY-MM-DDTHH:mm"
 * @param timezone - IANA timezone (e.g., "America/New_York") or undefined for browser timezone
 * @returns Unix timestamp in milliseconds
 */
export function parseLocalDateTimeInTimezone(dateTimeLocal: string, timezone: string | undefined): number {
    if (!timezone) {
        // Fallback to browser's local timezone if none specified
        return new Date(dateTimeLocal).valueOf();
    }

    // Parse the datetime-local string
    const [datePart, timePart] = dateTimeLocal.split("T");
    const [year, month, day] = datePart.split("-").map(Number);
    const [hours, minutes] = timePart.split(":").map(Number);

    // Create a formatter for the target timezone
    const formatter = createTimezoneFormatter(timezone, true);

    // Strategy: We need to find the UTC timestamp that, when formatted in the target timezone,
    // gives us the desired local time. We'll use an iterative approach.

    // Start with an approximate UTC time (treating input as UTC)
    const utcTime = Date.UTC(year, month - 1, day, hours, minutes, 0);

    // Get what this UTC time looks like in the target timezone
    const parts = formatter.formatToParts(new Date(utcTime));
    const formatted = parseDateTimeParts(parts);

    // Calculate the offset between what we got and what we want
    const targetTime = new Date(year, month - 1, day, hours, minutes, 0).getTime();
    const formattedTime = new Date(formatted.year, formatted.month - 1, formatted.day, formatted.hour, formatted.minute, 0).getTime();
    const offset = targetTime - formattedTime;

    // Adjust the UTC time by the offset
    return utcTime + offset;
}

/**
 * Converts a Unix timestamp to datetime-local string format in a specific timezone
 * @param timestamp - Unix timestamp in milliseconds
 * @param timezone - IANA timezone (e.g., "America/New_York") or undefined for browser timezone
 * @returns DateTime string in format "YYYY-MM-DDTHH:mm"
 */
export function formatTimestampInTimezone(timestamp: number, timezone: string | undefined): string {
    if (!timezone) {
        // Fallback to browser's local timezone if none specified
        return getLocalIsoDateTime(new Date(timestamp));
    }

    const date = new Date(timestamp);
    const formatter = createTimezoneFormatter(timezone);
    const parts = formatter.formatToParts(date);
    const parsed = parseDateTimeParts(parts);

    return `${parsed.year}-${formatDatePart(parsed.month)}-${formatDatePart(parsed.day)}T${formatDatePart(parsed.hour)}:${formatDatePart(parsed.minute)}`;
}
