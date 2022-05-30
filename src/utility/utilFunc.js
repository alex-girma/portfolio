export function getDate(dateStr, locale) {
	let date = new Date(dateStr);
	return date.toLocaleDateString([locale, "en-EN"], {
		weekday: "long",
		day: "numeric",
		month: "long",
	});
}

export function getDayName(dateStr, locale) {
	let date = new Date(dateStr);
	return date.toLocaleDateString([locale, "en-EN"], {
		weekday: "long",
	});
}
export function getMonthName(dateStr, locale) {
	let date = new Date(dateStr);
	return date.toLocaleDateString([locale, "en-EN"], {
		month: "long",
	});
}
