export function getDate(dateStr, locale) {
	if (isNaN(Date.parse(dateStr))) return;
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

export function createArray(toFill, startSkip, endSkip) {
	const arr = [];
	if (startSkip > 0) {
		for (let i = 0; i < startSkip; i++) {
			arr.push("\u00a0");
		}
	}
	for (let i = 0; i < toFill; i++) {
		arr.push(i + 1);
	}
	if (endSkip > 0) {
		for (let i = 0; i < endSkip; i++) {
			arr.push("\u00a0");
		}
	}
	return arr;
}
