function getDayName(dateStr, locale) {
	let date = new Date(dateStr);
	return date.toLocaleDateString([locale, "en-EN"], {
		weekday: "long",
		day: "numeric",
		month: "long",
	});
}

export default getDayName;
