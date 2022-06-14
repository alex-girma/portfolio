export const toggleHiddenWindows = (id) => {
	const ele = document.getElementById(id);
	if (ele === null) return;
	ele.classList.toggle("hidden");
};
export const toggleCSSValue = (id, val) => {
	const ele = document.getElementById(id);
	if (ele === null) return;
	val.map((val) => ele.classList.toggle(val));
};

export const resetCalendarLayout = () => {
	for (let i = 0; i < 12; i++) {
		const calendarMonth = document.getElementById(`calendar__${i + 1}`);
		calendarMonth.classList.remove("hidden", "col-start-1", "col-end-4");
	}
	const todo = document.getElementById("todo");
	todo.classList.add("hidden");
};

export const goToClickedMonth = (month) => {
	const ele = document.getElementById(`calendar__${month}`);
	if (ele === null) return;

	const len = ele.parentElement.childNodes;
	for (let i = 0; i < len.length; i++) {
		len[i].classList.add("hidden");
	}
	ele.classList.remove("hidden");
	ele.classList.add("col-start-1", "col-end-4");

	const todo = document.getElementById("todo");
	if (todo === null) return;

	todo.classList.remove("hidden");
	todo.classList.add("col-start-1", "col-end-4", "row-start-2", "row-end-5");
};
