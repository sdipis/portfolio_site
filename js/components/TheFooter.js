import TheSocialLinksComponent from "../components/TheSocialLinks.js"
import TheSiteLinksComponent from "./TheSiteLinks.js"
export default {
    name: "TheFooterComponent",
    props: ['profileData'],
    components:{
     socialy: TheSocialLinksComponent,
     sitey: TheSiteLinksComponent
    },
  
    template: `
        <section class="gridFooter bevel diag">
        <div class="blurb">
<!-- <socialy :profile-data="profileData"></socialy> -->
<sitey></sitey>
        </div>




  </section>
  
    `
  }