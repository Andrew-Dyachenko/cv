type DateTimeOptions = {
	year?: number;
	month?: number;
	day?: number;
	hour?: number;
	timezoneOffset?: number; // в минутах
};

const getFormattedDateTime = (options?: DateTimeOptions): string => {
	const {
		year = new Date().getFullYear(),
		month = new Date().getMonth() + 1,
		day = new Date().getDate(),
		hour = new Date().getHours(),
		timezoneOffset = 0,
	} = options || {};

	const now = new Date(year, month - 1, day, hour);

	// Adjust for timezone offset
	const adjustedNow = new Date(now.getTime() - timezoneOffset * 60 * 1000);

	// Convert to ISO string with timezone offset
	const isoString = adjustedNow
		.toISOString()
		.replace("Z", `+${String(timezoneOffset / 60).padStart(2, "0")}:00`);

	return isoString;
};

export default getFormattedDateTime;

// Usage examples

// For the current date and time from GMT+4
// const currentDateTimeGMT4 = getFormattedDateTime({ timezoneOffset: 60 * 4 });

// For the specified date and time from GMT-7
// const specificDateTime = getFormattedDateTime({
// 	year: 2023,
// 	month: 1,
// 	day: 1,
// 	hour: 7,
// 	timezoneOffset: 60 * -7,
// });

// console.log(currentDateTimeGMT4); // => 2024-02-29T12:00:00.000+04:00
// console.log(specificDateTime); // => 2023-01-01T10:00:00.000+-7:00
