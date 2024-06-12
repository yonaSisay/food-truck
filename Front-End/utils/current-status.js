export function currentStatus(close_status, bid_status) {
	if (close_status !== "UNDEFINED") {
		switch (close_status) {
			case "WIN":
				return {
					name: "Win",
					color: "bg-green-50 border-green-600 text-green-600",
				};
			case "FAILED":
				return {
					name: "Failed",
					color: "bg-red-50 border-red-600 text-red-600",
				};
			case "REJECTED":
				return {
					name: "Rejected",
					color: "bg-red-50 border-red-600 text-red-600",
				};
		}
	} else {
		switch (bid_status) {
			case "POST":
				return {
					name: "In Review",
					color: "bg-gold-50 border-gold-600 text-gold-700",
				};
			case "ACCEPTED":
				return {
					name: "Accepted",
					color: "bg-green-50 border-green-600 text-green-600",
				};
			case "PREPARATION":
				return {
					name: "Preparation",
					color: "text-white bg-yellow-500 !border-none",
				};
			case "FINANCIAL_FOLLOWUP":
				return {
					name: "Financial Followup",
					color: "bg-green-700  !border-none text-white",
				};
			case "TECHNICAL_FOLLOWUP":
				return {
					name: "Technical Followup",
					color: "bg-red-900 !border-none text-white",
				};
		}
	}
}
