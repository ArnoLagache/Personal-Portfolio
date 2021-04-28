<template>
    <b-row>
        <b-col>
            <div class="inside-container bg-white">
                <div id="header" class="text-center">

                    <b-img :src="profilePic" class="circle" fluid :alt="picAlt"></b-img>
                    <h1 class="txt-dark-grey">{{ title }}, {{ age }}&nbsp;ans</h1>
                    <h2 class="txt-dark-grey">{{ job }}</h2>

                    <a href="#intro-anchor" class="txt-dark-grey"><i class="fas fa-angle-double-down"></i></a>

                </div>
            </div>
        </b-col>
    </b-row>
</template>

<script>
export default {
    name: 'Header',  
    data(){
        return{
            profilePic: require('@/assets/images/profil_pic.jpg'),
            picAlt: 'Profile picture',
            name: 'Lagache',
            surname: 'Arnaud',
            job: 'développeur front-end',
            DoB: '1992',
            currentYear: new Date().getFullYear(),
        }
    },
    computed: {
        title: function(){
            return this.name + ' ' + this.surname
        },
        age: function(){
            return (this.currentYear - this.DoB)
        }      
    }
}
</script>

<style lang="scss">
  @import "header";
</style>