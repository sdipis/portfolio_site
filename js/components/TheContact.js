import TheSocialLinksComponent from "../components/TheSocialLinks.js"
export default {
  name: "TheContactComponent",
  props: ['profileData'],
  components:{
   socialy: TheSocialLinksComponent
  },
mounted() {
  //when page opens, update the topbar to show the page title
  document.querySelector('#dynamicTitle').innerHTML = 
  `
  `;
},

  template: `
      <div id="bCard" class="videoChunk">


      <ul>
         <!-- <li class="disableSelect"><h2 id="bCardName">{{ profileData[0].firstname }} <span>{{ profileData[0].lastname }}</span></h2></li>
          <li class="disableSelect"><h3>{{ profileData[0].bio }}</h3></li>
          <li><h3>{{ profileData[0].email }}</h3></li> -->


          <li>
          <div class="blurb">
          <nav>
    
        <socialy :profile-data="profileData"></socialy>
          </nav>
    
       </div>
          </li>

          <li><h2 class="disableSelect nameTag jumpText">
  <!--<span data-text="S" style="--index: 0;">S</span>
  <span data-text="p" style="--index: 1;">p</span>
  <span data-text="e" style="--index: 2;">e</span>
  <span data-text="n" style="--index: 3;">n</span>
  <span data-text="c" style="--index: 4;">c</span>
  <span data-text="e" style="--index: 5;">e</span>
  <span data-text="r" style="--index: 6;">r</span>-->
  SPENCER
  <span>&nbsp</span>
  <span data-text="D" style="--index: 7;">D</span>
  <span data-text="i" style="--index: 8;">i</span>
  <span data-text="p" style="--index: 9;">p</span>
  <span data-text="i" style="--index: 10;">i</span>
</h2></li>
<li><br><h3><span>{{ profileData[0].bio }}</span></h3></li>

      </ul>

      

      </div>
      
      </div>


  `,

  data() {
    return {
    conShow: false
  }}
}