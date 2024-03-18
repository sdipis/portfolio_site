import TheSocialLinksComponent from "../components/TheSocialLinks.js"
export default {
    name: "TheFooterComponent",
    props: ['profileData'],
    components:{
     socialy: TheSocialLinksComponent
    },
  
    template: `
        <section class="gridFooter bevel diag">
        <div class="blurb">
<nav>
<socialy :profile-data="profileData"></socialy>
</nav>
        </div>
        

        <div class="blurb">
           <nav>
           <ul class="menus footerLinks">
              <li><a href="./premix" target="_blank">Pre-Mix Calculator</a></li>
              <li><a href="./GTA" target="_blank">GPT</a></li>
              <li><a href="#" target="_blank">Merch</a></li>

           </ul>
           </nav>
        </div>




  </section>
  
    `
  }