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
        

        <div class="blurb admin">
           <nav>
           <ul class="menus footerLinks">
              <li><a href="admin/login_form.php" target="_blank">Login</a></li>
              <li><a href="admin/profile.php" target="_blank">Profile</a></li>
              <li><a href="admin/project_list.php" target="_blank">Projects</a></li>
           </ul>
           </nav>
        </div>




  </section>
  
    `
  }