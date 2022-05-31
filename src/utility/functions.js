export const resetCalendarLayout = () => {
	const ele = document.getElementById("calendar");
	ele.classList.toggle("hidden");
	for (let i = 0; i < 12; i++) {
		const calendarMonth = document.getElementById(`calendar__${i + 1}`);
		calendarMonth.classList.remove("hidden", "col-start-1", "col-end-4");
	}
	const todo = document.getElementById("todo");
	todo.classList.add("hidden");
};

export const goToClickedMonth = () => {
	for (let i = 0; i < 12; i++) {
		const calendarMonth = document.getElementById(`calendar__${i + 1}`);
		calendarMonth.classList.remove("hidden", "col-start-1", "col-end-4");
	}
	const todo = document.getElementById("todo");
	todo.classList.add("hidden");
};
