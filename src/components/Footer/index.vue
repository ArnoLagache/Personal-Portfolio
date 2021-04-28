<template>
	<b-row>
		<b-col>
            <div class="inside-container bg-dark-blue text-center">
                <footer>
                    <p class="txt-light-grey">Made with <i class="fas fa-heart"></i> with <a href="https://vuejs.org/" target="_blank" class="txt-light-grey">Vue.js</a></p>
                    <p class="txt-light-grey">{{author}} - {{currentYear}}</p>
                </footer>
            </div>			
		</b-col>
	</b-row>
</template>

<script>

export default {
	name: "Footer",
    data(){
        return{
            author: 'LAGACHE Arnaud',
            currentYear: new Date().getFullYear(),
        }
    },
};
</script>

<style lang="scss">
  @import "footer";
</style>