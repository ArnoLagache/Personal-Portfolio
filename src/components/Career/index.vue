<template>
    <b-row>
        <b-col>

            <div class="inside-container">
                <div id="career" class="text-center">
                    <h3>Parcours</h3>
                    
                     <b-row align-h="center">
                        <b-col md="6" v-for="(Career, index) in Careers" :key="index" :class="{rightCareer: index % 2, leftCareer: !(index % 2)}">
                            <p class="date">{{Career.year}}&nbsp;:</p>
                            <p>
                                {{Career.title}}&nbsp;
                                <i v-if="Career.graduated" class="fas fa-graduation-cap" aria-hidden="true"></i>
                                <i v-if="Career.employed" class="fas fa-briefcase" aria-hidden="true"></i>
                            <p/>
                            <p class="city">{{Career.city}}</p>
                        </b-col>
                    </b-row>

                </div>
            </div>

        </b-col>
    </b-row>
</template>

<script>
export default {
    name: 'Career',
        data(){
            return{
                Careers: [
                    {
                        year: '2010',
                        title: 'Lycée Jeanne Hachette - Bac S',
                        city: 'Beauvais',
                        graduated: true, 
                    },
                    {
                        year: '2011 ',
                        title: 'ISEN - Cycle Informatique et Réseaux',
                        city: 'Lille' 
                    },
                    {
                        year: '2012',
                        title: 'FLST - Sciences de l\'Ingénieur',
                        city: 'Lille' 
                    },
                    {
                        year: '2013',
                        title: 'DUT Informatique - Année Spéciale',
                        city: 'Amiens',
                        graduated: true, 
                    },
                    {
                        year: '2015',
                        title: 'Licence Pro. Développement Web et Mobile',
                        city: 'Orléans',
                    },
                    {
                        year: '2016',
                        title: 'DPS les indés - Développeur Front-End',
                        city: 'Lille',
                        employed: true
                    },
                    {
                        year: '2018',
                        title: 'INEAT Conseil - Développement Front-End',
                        city: 'Lille',
                        employed: true
                    },
                    {
                        year: 'Oct. 2018',
                        title: 'Freelance - Intégrateur Web',
                        city: 'Lille',
                        employed: true
                    }                    
                ]
            }
        }
}
</script>

<style lang="scss">
  @import "career";
</style>