export const tableData = [
	{
		id: 1,
		Request_Type: "project",
		Name: "Name 1",
		Request_Id: "REQ001",
		Total_Item: 5,
		Total_Price: 50.25,
		Delivered: "Yes",
		remaining: 2,
		Status: "Pending",
		Action: "Pending",
	},
	{
		id: 2,
		Request_Type: "personal",
		Name: "Name 2",
		Request_Id: "REQ002",
		Total_Item: 8,
		Total_Price: 75.5,
		Delivered: "No",
		remaining: 3,
		Status: "Pending",
		Action: "Pending",
	},
	{
		id: 3,
		Request_Type: "returning",
		Name: "Name 2",
		Request_Id: "REQ002",
		Total_Item: 8,
		Total_Price: 75.5,
		Delivered: "No",
		remaining: 3,
		Status: "completed",

		Action: "Pending",
	},
	{
		id: 4,
		Request_Type: "project",
		Name: "Name 2",
		Request_Id: "REQ002",
		Total_Item: 8,
		Total_Price: 75.5,
		Delivered: "No",
		remaining: 3,
		Status: "progress",

		Action: "Processing",
	},
	{
		id: 5,
		Request_Type: "project",
		Name: "Name 2",
		Request_Id: "REQ002",
		Total_Item: 8,
		Total_Price: 75.5,
		Delivered: "No",
		remaining: 3,
		Status: "completed",

		Action: "Processing",
	},
];

export const headers = [
	{
		value: "Request_Type",
		text: "Request Type",
		sortable: true,
	},
	{
		value: "Name",
		text: "Name",
		sortable: true,
	},
	{
		value: "Request_Id",
		text: "Request Id",
		sortable: true,
	},
	{
		value: "Total_Item",
		text: "Total Item",
		sortable: true,
	},
	{
		value: "Total_Price",
		text: "Total Price",
		sortable: true,
	},
	{
		value: "Delivered",
		text: "Delivered",
		sortable: true,
	},
	{
		value: "remaining",
		text: "remaining",
		sortable: true,
	},
	{
		value: "Status",
		text: "Status",
		sortable: true,
	},
	{
		value: "Action",
		text: "Action",
		sortable: true,
	},
];
