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
  <svg class="titleArrow noMobile" version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <path clip-rule="evenodd" d="M32,16.009c0-0.267-0.11-0.522-0.293-0.714 l-9.899-9.999c-0.391-0.395-1.024-0.394-1.414,0c-0.391,0.394-0.391,1.034,0,1.428l8.193,8.275H1c-0.552,0-1,0.452-1,1.01 s0.448,1.01,1,1.01h27.586l-8.192,8.275c-0.391,0.394-0.39,1.034,0,1.428c0.391,0.394,1.024,0.394,1.414,0l9.899-9.999 C31.894,16.534,31.997,16.274,32,16.009z" fill-rule="evenodd" id="Arrow_Forward"/>
  </svg>
  <h2 class="noMobile">[dip-ee]</h2>
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