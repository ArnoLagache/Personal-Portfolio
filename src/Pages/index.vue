<template>
    <div>
        <Nav></Nav>
        <Header></Header>
        <router-view></router-view>
    </div>
</template>

<script>

    import Nav from "@/components/Nav/";
    import Header from "@/components/Header/";

    export default {
        name: "Index",
        components: {		
            Nav,
            Header		
        },
    };

</script>