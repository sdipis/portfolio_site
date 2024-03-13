export default {
  name: "TheAboutComponent",
  props: ['profileData'],
  created() {
    //log recieved data on component create event
    // console.log('Received profileData:', this.profileData);
},

  template: `

      <div id="bCard"  class="videoChunk">
      <h2 class="popPageTitle">About</h2>

      <div class="contact-page about-page">

      <ul>
      <li><p>
      My name is Spencer Dipi! I am a dynamic individual with a passion for creativity and innovation. 
      <br><br>Bringing extensive expertise in graphic design and web development, I see myself not only as a professional but as a visionary in the realm of interactive, and digital media.
      <br><br>With a cool blend of technical expertise and an entrepreneurial mindset, I believe I am a valuable asset to any team in the ever-evolving landscape of design and technology.
      </p></li>
      </ul>

      </div>

      <div class="contact-page about-page">

      <ul>
      <li><p>
      My name is Spencer Dipi! I am a dynamic individual with a passion for creativity and innovation. 
      <br><br>Bringing extensive expertise in graphic design and web development, I see myself not only as a professional but as a visionary in the realm of interactive, and digital media.
      <br><br>With a cool blend of technical expertise and an entrepreneurial mindset, I believe I am a valuable asset to any team in the ever-evolving landscape of design and technology.
      </p></li>
      </ul>

      </div>
      </div>


  `,

  watch: {
    profileData(newData) {
      this.profileData.nickname = newData.nickname;
    },
  },

  data() {
    return {
    aboutShow: false
  }}
}