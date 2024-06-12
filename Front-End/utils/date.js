export function divideDateRange(start, end, parts) {
	const duration = end - start; // Calculate the duration of the date range

	const interval = Math.floor(duration / parts); // Duration of each part in milliseconds

	const result = [];
	let currentDate = new Date(start);
	let nextDate = new Date(currentDate.getTime() + interval);

	for (let i = 0; i < parts; i++) {
		result.push([new Date(currentDate), new Date(nextDate.getTime() - 1)]);
		currentDate = new Date(nextDate);
		nextDate = new Date(nextDate.getTime() + interval);
	}

	// Adjust the last part to include any remaining milliseconds
	result[parts - 1][1] = new Date(end);

	return result.map((r) => r[0].toUTCString());
}
