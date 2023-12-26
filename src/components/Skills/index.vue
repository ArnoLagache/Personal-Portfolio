<template>
    <b-row>
        <b-col id="intro-anchor">

            <div class="inside-container bg-light-grey">
				<div id="skills" class="text-center">

					<h3>Compétences</h3>

					<div class="accordion" role="tablist">
						<b-card no-body>
							<b-card-header class="bg-white" header-tag="header" role="tab" block v-b-toggle.accordion-1 variant="info">
								<i class="fas fa-star"></i>Expérimenté
							</b-card-header>
							<b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
								<b-card-body>
									<ul>
                                        <li v-for="(expSkill, index) in Experimented" :key="index">
                                            <img :src="expSkill.imgURL" :alt="expSkill.imgAlt">
                                            <span class="title">{{expSkill.title}}</span>
                                        </li>
                                    </ul>
								</b-card-body>
							</b-collapse>
						</b-card>

						<b-card no-body>
							<b-card-header class="bg-white" header-tag="header" role="tab" block v-b-toggle.accordion-2 variant="info">
								<i class="fas fa-star-half-alt"></i>Bon Niveau
							</b-card-header>
							<b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
								<b-card-body>
									<ul>
                                        <li v-for="(medSkill, index) in Medium" :key="index">
                                            <img :src="medSkill.imgURL" :alt="medSkill.imgAlt">
                                            <span class="title">{{medSkill.title}}</span>
                                        </li>
                                    </ul>
								</b-card-body>
							</b-collapse>
						</b-card>

						<b-card no-body>
							<b-card-header class="bg-white" header-tag="header" role="tab" block v-b-toggle.accordion-3 variant="info">
								<i class="far fa-star"></i>Junior
							</b-card-header>
							<b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
								<b-card-body>
									<ul>
										<li v-for="(juniorSkill, index) in Junior" :key="index">
                                            <img :src="juniorSkill.imgURL" :alt="juniorSkill.imgAlt">
                                            <span class="title">{{juniorSkill.title}}</span>
                                        </li>									
                                    </ul>
								</b-card-body>
							</b-collapse>
						</b-card>
					</div>
					
				</div>
			</div>

        </b-col>
    </b-row>
</template>

<script>
export default {
    name: 'Skills',
    data(){
        return{
            Experimented: [
                {
                    imgURL: require('@/assets/images/logos/html5-logo.png'),
                    imgAlt: 'HTML 5',
                    title: 'HTML 5'
                },
                {
                    imgURL: require('@/assets/images/logos/css3-logo.png'),
                    imgAlt: 'CSS 3',
                    title: 'CSS 3'
                },
                {
                    imgURL: require('@/assets/images/logos/sass-logo.png'),
                    imgAlt: 'Sass',
                    title: 'Sass'
                },
                {
                    imgURL: require('@/assets/images/logos/tailwind-logo.png'),
                    imgAlt: 'Tailwind CSS',
                    title: 'Tailwind'
                },
                {
                    imgURL: require('@/assets/images/logos/bootstrap-logo.jpg'),
                    imgAlt: 'Bootstrap',
                    title: 'Bootstrap'
                },
                /*
                {
                    imgURL: require('@/assets/images/logos/materializecss-logo.png'),
                    imgAlt: 'MaterializeCSS',
                    title: 'MaterializeCSS'
                },
                */
            ],
            Medium: [
                {
                    imgURL: require('@/assets/images/logos/wordpress-logo.png'),
                    imgAlt: 'WordPress',
                    title: 'WordPress'
                },
                {
                    imgURL: require('@/assets/images/logos/git-logo.png'),
                    imgAlt: 'git',
                    title: 'Git'
                },
                {
                    imgURL: require('@/assets/images/logos/photoshop-logo.svg'),
                    imgAlt: 'Photoshop',
                    title: 'Photoshop'
                },
                {
                    imgURL: require('@/assets/images/logos/davinci.png'),
                    imgAlt: 'DaVinci Resolve',
                    title: 'DaVinci Resolve'
                },
            ],
            Junior: [
                {
                    imgURL: require('@/assets/images/logos/VueJS-logo.svg'),
                    imgAlt: 'Vue.js',
                    title: 'Vue.js'
                },
                {
                    imgURL: require('@/assets/images/logos/js-logo.png'),
                    imgAlt: 'JS',
                    title: 'JS'
                },
                {
                    imgURL: require('@/assets/images/logos/jquery-logo.gif'),
                    imgAlt: 'jQuery',
                    title: 'jQuery'
                },                
            ]
        }
    }
}
</script>

<style lang="scss">
  @import "skills";
</style>