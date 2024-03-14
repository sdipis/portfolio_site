export default {
  name: "TheAboutComponent",
  props: ['profileData'],
  mounted() {
    //when page opens, update the topbar to show the page title
    document.querySelector('.gridHead').classList.add('paused');
    document.querySelector('#dynamicTitle').innerHTML = 
    `
    <svg class="titleArrow" version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path clip-rule="evenodd" d="M32,16.009c0-0.267-0.11-0.522-0.293-0.714 l-9.899-9.999c-0.391-0.395-1.024-0.394-1.414,0c-0.391,0.394-0.391,1.034,0,1.428l8.193,8.275H1c-0.552,0-1,0.452-1,1.01 s0.448,1.01,1,1.01h27.586l-8.192,8.275c-0.391,0.394-0.39,1.034,0,1.428c0.391,0.394,1.024,0.394,1.414,0l9.899-9.999 C31.894,16.534,31.997,16.274,32,16.009z" fill-rule="evenodd" id="Arrow_Forward"/>
    </svg>
    <h2>About Me</h2>
    `;
  },
  destroyed(){
    document.querySelector('.gridHead').classList.remove('paused');

  },
  template: `

      <div id="bCard" class="videoChunk">

      <div class="about-page">


      <h2 class="onlyMobile popBoxTitle">About Me</h2>

      <div class="textBox">
      <p>
      My name is Spencer Dipi! I am a dynamic individual with a passion for creativity and innovation. 
      <br><br>Bringing extensive expertise in graphic design and web development, I see myself not only as a professional but as a visionary in the realm of interactive, and digital media.
      <br><br>With a cool blend of technical expertise and an entrepreneurial mindset, I believe I am a valuable asset to any team in the ever-evolving landscape of design and technology.
      </p>

      <p>
      My name is Spencer Dipi! I am a dynamic individual with a passion for creativity and innovation. 
      <br><br>Bringing extensive expertise in graphic design and web development, I see myself not only as a professional but as a visionary in the realm of interactive, and digital media.
      </p>

      <div id="dynamicTitle" class="dynamicTitleMobile">
      <h2></h2>
      </div>

      </div>

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