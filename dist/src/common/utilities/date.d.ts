export declare function getLocalIsoDateTime(date: Date): string;
/**
 * Converts a datetime-local string to Unix timestamp in a specific timezone
 * @param dateTimeLocal - DateTime string in format "YYYY-MM-DDTHH:mm"
 * @param timezone - IANA timezone (e.g., "America/New_York") or undefined for browser timezone
 * @returns Unix timestamp in milliseconds
 */
export declare function parseLocalDateTimeInTimezone(dateTimeLocal: string, timezone: string | undefined): number;
/**
 * Converts a Unix timestamp to datetime-local string format in a specific timezone
 * @param timestamp - Unix timestamp in milliseconds
 * @param timezone - IANA timezone (e.g., "America/New_York") or undefined for browser timezone
 * @returns DateTime string in format "YYYY-MM-DDTHH:mm"
 */
export declare function formatTimestampInTimezone(timestamp: number, timezone: string | undefined): string;
