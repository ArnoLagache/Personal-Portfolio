<template>
    <b-row>
        <b-col>
            <div class="inside-container bg-white text-center">
                <div id="projects">
                    <h3>Quelques projets</h3>
                    <b-row>

                        <b-col sm="12" md="4">
                            <h4>Sites Web</h4>
                            <div>
                                <b-card-group deck>

                                    <b-card v-for="(website, index) in websites" :key="index">
                                        <div class="card-img">
                                            <b-img :src="website.imgURL" fluid :alt="website.imgAlt"></b-img>
                                        </div>
                                        <b-card-text>
                                            <a :href="website.link" target="_blank" class="bg-dark-blue txt-white"><i class="fas fa-angle-double-right"></i></a>
                                            <h5>{{website.title}}</h5>
                                            <p>{{website.description}}</p>
                                            <ul>
                                                <li v-for="techno in website.technos" :key="techno">{{techno}}</li>
                                            </ul>
                                        </b-card-text>
                                    </b-card>

                                </b-card-group>
                            </div>
                        </b-col>

                        <b-col sm="12" md="4">
                            <h4>Landing Pages</h4>
                            <div>
                                <b-card-group deck>

                                    <b-card v-for="(landing, index) in landings" :key="index">
                                        <div class="card-img">
                                            <b-img :src="landing.imgURL" fluid :alt="landing.imgAlt"></b-img>
                                        </div>
                                        <b-card-text>
                                            <h5>{{landing.title}}</h5>
                                            <p>{{landing.description}}</p>
                                            <ul>
                                                <li v-for="techno in landing.technos" :key="techno">{{techno}}</li>
                                            </ul>
                                        </b-card-text>
                                    </b-card>

                                </b-card-group>
                            </div>
                        </b-col>
                        
                        <b-col sm="12" md="4">
                            <h4>Newsletters</h4>
                            <div>
                                <b-card-group deck>

                                    <b-card v-for="(newsletter, index) in newsletters" :key="index">
                                        <div class="card-img">
                                            <b-img :src="newsletter.imgURL" fluid :alt="newsletter.imgAlt"></b-img>
                                        </div>
                                        <b-card-text>
                                            <h5>{{newsletter.title}}</h5>
                                            <p>{{newsletter.description}}</p>
                                            <ul>
                                                <li v-for="techno in newsletter.technos" :key="techno">{{techno}}</li>
                                            </ul>
                                        </b-card-text>
                                    </b-card>

                                </b-card-group>
                            </div>
                        </b-col> 

                    </b-row>
                </div>
            </div>
        </b-col>
    </b-row>
</template>

<script>
export default {
    name: 'Projects',
    data(){
        return{

            websites: [
                {
                    title: 'DPS les indés', 
                    imgURL: require('@/assets/images/projects/site/site_dps.jpg'),
                    imgAlt: 'Site Agence DPS',
                    link: 'https://agencedps.com', 
                    description: 'Refonte de site', 
                    technos: ['WordPress avec thème custom "Sage"', 'Responsive Design']
                },
                {
                    title: 'SNCF Réseau', 
                    imgURL: require('@/assets/images/projects/site/sncf.jpg'), 
                    imgAlt: 'Site SNCF Réseau',
                    link : 'https://www.sncf-reseau.com/fr',
                    description: 'Refonte de site', 
                    technos: ['Drupal avec thème custom', 'Responsive Design', 'Framework CSS']                    
                }
            ],

            landings: [
                {
                    title: 'SUZUKI S-CROSS', 
                    imgURL: require('@/assets/images/projects/landing/landing_suzuki.jpg'),
                    imgAlt: 'Landing Suzuki S-Cross',
                    description: 'Création d\'une landing page pour présenter le nouveau Suzuki S-Cross', 
                    technos: ['HTML, CSS', 'Responsive Design']
                },
                {
                    title: 'Nocibé', 
                    imgURL: require('@/assets/images/projects/landing/landing_nocibe.jpg'),
                    imgAlt: 'Landing Nocibé',
                    description: 'Création d\'une landing page pour une vente Nocibé', 
                    technos: ['HTML, CSS', 'jQuery', 'Responsive Design']
                }
            ],

            newsletters: [
                {
                    title: 'Camif', 
                    imgURL: require('@/assets/images/projects/newsletter/news_camif.jpg'),
                    imgAlt: 'Newsletter CAMIF',
                    description: 'Newsletter pour le client CAMIF', 
                    technos: ['HTML, CSS', 'Responsive Design']
                },
                {
                    title: 'Suzuki', 
                    imgURL: require('@/assets/images/projects/newsletter/news_suzuki.jpg'),
                    imgAlt: 'Newsletter Suzuki',
                    description: 'Newsletter pour le client SUZUKI', 
                    technos: ['HTML, CSS', 'Responsive Design']
                },
                {
                    title: 'Devianne', 
                    imgURL: require('@/assets/images/projects/newsletter/news_devianne.jpg'),
                    imgAlt: 'Newsletter Devianne',
                    description: 'Newsletter pour le client Devianne', 
                    technos: ['HTML, CSS', 'Responsive Design']
                },
            ]
        }
    },
}
</script>

<style lang="scss">
  @import "projects";
</style>