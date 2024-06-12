export function notificationStatus(type) {
	switch (type) {
		case "BID_EXPIRE_NORMAL":
			return {
				icon: "uit:calender",
				color: "text-green-600",
			};
		case "BID_EXPIRE_MEDIUM":
			return {
				icon: "fluent:clock-24-regular",
				color: "text-yellow-600",
			};
		case "BID_EXPIRE_URGENT":
			return {
				icon: "mingcute:warning-line",
				color: "text-red-600",
			};
		case "BID_CLOSED_WIN":
			return {
				icon: "mingcute:warning-line",
				color: "text-red-600",
			};
	}
}
