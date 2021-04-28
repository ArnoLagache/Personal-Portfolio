<template>
	<b-row>
		<b-col>
			<div class="map-container bg-dark-grey text-center">
				<h3 class="txt-white">Où me trouver</h3>
				<div id="map"></div>
			</div>
		</b-col>
	</b-row>
</template>

<script>

import gmapsInit from "../../gmaps.js";

export default {
	name: "Map",
	async mounted() {
		try {
			const google = await gmapsInit();
			const myLatLng = { lat: 50.6341809, lng: 3.0487116 };
			const map = new google.maps.Map(document.getElementById("map"), {
				center: myLatLng,
				zoom: 13,
			});
			new google.maps.Marker({
				position: myLatLng,
				map,
				title: "Lille",
			});
		} catch (error) {
			console.error(error);
		}
	},
};

</script>

<style lang="scss">
  @import "map";
</style>