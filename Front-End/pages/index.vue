<script setup>
const { requestData, loading } = useApi();
const input = ref({});

const response = ref([]);

const preference = ref("");
const message = ref("");
// async  function login
const SignIn = async () => {
	const params = ref({
		preferences: preference.value,
		latitude: 37.7879732832,
		longitude: -122.4001850499,
	});

	try {
		let temp = await requestData("get", "recommend-food-trucks", {
			params: params,
		});
		temp = JSON.parse(temp);
		response.value = temp.slice(0, 5);
	} catch (err) {
		message.value = err;
	}
};

const isMap = ref(true);

const headers = ref([
	{
		text: "truck_name",
		value: "truck_name",
	},
]);
</script>
<template>
	<div class="px-12 space-y-8 bg-regularBG h-full py-6">
		<div class="flex items-center gap-x-8 justify-between">
			<div
				class="rounded-[25px] w-full shadow-md bg-normalBG flex items-center pe-[20px]"
			>
				<input
					v-model="preference"
					type="text"
					placeholder="Type food type or name"
					class="h-[46px] ps-[20px] pe-[30px] bg-transparent w-full outline-none border-none text-body placeholder:text-body"
				/>
				<Icon name="uil-search" class="text-[18px] text-[#8C90A4]" />
			</div>
			<button
				@click="SignIn"
				type="button"
				class="flex whitespace-nowrap items-center px-[14px] text-sm text-white rounded-md font-semibold bg-primary border-primary h-10 gap-[6px] transition-[0.3s]"
			>
				<Icon name="line-md:loading-twotone-loop" v-if="loading" />
				<span class="m-0">Search Truck</span>
			</button>
		</div>

		<div class="flex gap-x-3 items-center">
			<button
				@click="isMap = true"
				type="button"
				:class="isMap ? 'bg-primary text-white' : '!text-primary'"
				class="flex whitespace-nowrap items-center px-[14px] text-sm text-white rounded-md font-semibold border border-primary h-10 gap-[6px] transition-[0.3s]"
			>
				<span class="m-0">Map View</span>
			</button>

			<button
				@click="isMap = false"
				type="button"
				:class="!isMap ? 'bg-primary text-white' : '!text-primary'"
				class="flex whitespace-nowrap items-center px-[14px] text-sm text-white rounded-md font-semibold border border-primary h-10 gap-[6px] transition-[0.3s]"
			>
				<span class="m-0">List View</span>
			</button>
		</div>

		<div v-if="isMap" class="w-full p-4 rounded-md bg-white">
			<LMap
				style="height: 700px"
				:zoom="12"
				class="h-full"
				:center="[37.7879732832, -122.4001850499]"
				:use-global-leaflet="false"
				ref="mapping"
			>
				<LTileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
					layer-type="base"
					name="OpenStreetMap"
				/>

				<!-- Polyline path -->

				<!-- Start Position Marker -->
				<LMarker
					v-if="response.length > 0"
					v-for="(truck, i) in response"
					:key="i"
					name="start"
					:lat-lng="[truck.Latitude, truck.Longitude]"
				>
					<LIcon
						icon-url="https://img.icons8.com/?size=100&id=7880&format=png&color=8231D3"
						:icon-size="[42, 42]"
					/>

					<LTooltip :options="{ useElementHover: true, interactive: true }">
						<div class="flex gap-x-12">
							<Icon class="text-4xl" name="twemoji:delivery-truck" />

							<div>
								<h2 class="text-gray-600">{{ truck.Applicant }}</h2>
								<h2>{{ truck.FoodItems }}</h2>
							</div>
						</div>
					</LTooltip>
				</LMarker>

				//
			</LMap>
		</div>
		<div class="space-y-6" v-else>
			<div
				class="w-full p-4 flex justify-between rounded-md bg-white"
				v-for="(truck, i) in response"
				:key="i"
			>
				<div class="flex gap-x-4 items-center">
					<Icon class="text-4xl" name="twemoji:delivery-truck" />
					<div>
						<h2 class="text-xl text-gray-600">{{ truck.Applicant }}</h2>
						<h2>{{ truck.FoodItems }}</h2>
					</div>
				</div>
				<span>{{ truck.Status }}</span>
			</div>
		</div>
	</div>
</template>
