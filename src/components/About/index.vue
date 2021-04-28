<template>
	<b-row>
		<b-col id="intro-anchor">
			<div class="inside-container bg-light-grey">
				<div id="about" class="text-center">
					<h3>à propos</h3>

					<p><i class="fas fa-birthday-cake"></i> Né le {{ dateOfBirth }}</p>
					<p><i class="fas fa-home"></i> Habite à {{town}}</p>
					<p><i class="fas fa-laptop"></i> {{jobTitle}}</p>
					<p><i class="fas fa-biking"></i> {{hobby01}}</p>
					<p><i class="fas fa-video"></i> {{hobby02}}</p>
					<p><i class="fas fa-camera"></i> {{hobby03}}</p>
					<p><i class="fas fa-music"></i> {{hobby04}}</p>
				</div>
			</div>
		</b-col>
	</b-row>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
		dateOfBirth: "1er Avril",
		town: "Lille",
		jobTitle: "Développeur Front-End (depuis Janvier 2016)",
		hobby01: "Amoureux du vélo (surtout le pignon fixe)",
		hobby02: "Prises de vues en drone",
		hobby03: "Ne sort jamais sans un appareil photo",
		hobby04: "Guitariste du Dimanche",
    };
  },
};
</script>

<style lang="scss">
@import "about";
</style>