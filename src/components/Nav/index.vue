<template>
	<b-row>
		<b-col>
			<div id="nav-container">

				<nav id="main-nav" :class="isShrink?'shrink':'' " align="right">					
					<div id="social-links">
						<a class="txt-white" href="https://www.linkedin.com/in/arnaud-lagache-8744a0204" target="_blank"><i class="fab fa-linkedin"></i></a>
						<a class="txt-white" href="https://github.com/ArnoLagache" target="_blank"><i class="fab fa-github-square"></i></a>
					</div>
				</nav>

				<Burger :class="isShrink?'shrink':'' "></Burger>

				<Sidebar :class="isShrink?'shrink':'' ">
					<ul class="sidebar-panel-nav">
						<li><router-link to="/" class="txt-white">Home</router-link></li>
						<!--<li><router-link to="/contact" class="txt-white">Contact</router-link></li>-->
						<li><a class="txt-white" href="./LAGACHE_Arnaud_CV.pdf" target="_blank">CV <i class="fas fa-file-download"></i></a></li>
					</ul>
				</Sidebar>
				
			</div>
		</b-col>
	</b-row>
</template>

<script>

import Burger from './Burger';
import Sidebar from './Sidebar';


export default {
	name: "Nav",
	components: {
		Burger,
		Sidebar,
	},
	data(){
		return {
			isShrink: false
		}
	},
	mounted() {
		this.$nextTick( ()=> {
			window.addEventListener("scroll", ()=> {

				if (document.documentElement.scrollTop >= 150){
					this.isShrink = true
				}
				else{
					this.isShrink = false
				}

			});
		});
	},
};
</script>

<style lang="scss">
  @import "nav";
  @import "burger";
  @import "sidebar";
</style>