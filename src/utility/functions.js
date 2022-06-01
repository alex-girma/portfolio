export const resetCalendarLayoutClickedDatebar = () => {
	const ele = document.getElementById("calendar");
	ele.classList.toggle("hidden");
	for (let i = 0; i < 12; i++) {
		const calendarMonth = document.getElementById(`calendar__${i + 1}`);
		calendarMonth.classList.remove("hidden", "col-start-1", "col-end-4");
	}
	const todo = document.getElementById("todo");
	todo.classList.add("hidden");
};

export const resetCalendarLayoutClickedInput = () => {
	for (let i = 0; i < 12; i++) {
		const calendarMonth = document.getElementById(`calendar__${i + 1}`);
		calendarMonth.classList.remove("hidden", "col-start-1", "col-end-4");
	}
	const todo = document.getElementById("todo");
	todo.classList.add("hidden");
};

export const goToClickedMonth = (month) => {
	const ele = document.getElementById(`calendar__${month}`);
	const len = ele.parentElement.childNodes;
	for (let i = 0; i < len.length; i++) {
		len[i].classList.add("hidden");
	}
	ele.classList.remove("hidden");
	ele.classList.add("col-start-1", "col-end-4");

	const todo = document.getElementById("todo");
	todo.classList.remove("hidden");
	todo.classList.add("col-start-1", "col-end-4", "row-start-2", "row-end-5");
};
