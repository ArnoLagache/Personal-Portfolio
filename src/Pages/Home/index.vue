<template>
    <div>
        <About></About>
        <Career></Career>
		<Skills></Skills>
		<Projects></Projects>
        <Map></Map>
		<Footer></Footer>
    </div>
</template>

<script>

	import About from "@/components/About/";
	import Career from "@/components/Career/";
	import Skills from "@/components/Skills/";
	import Projects from "@/components/Projects/";
	import Map from "@/components/Map/";
	import Footer from "@/components/Footer/";

	export default {
		name: "Home",
		components: {
			About,
			Career,
			Skills,
			Projects,
			Map,
			Footer		
		},
	};

</script>