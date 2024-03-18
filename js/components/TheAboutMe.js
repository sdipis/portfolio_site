export default {
  name: "TheAboutComponent",
  props: ['profileData'],
  template: `
  <div id="bCard" class="videoChunk">
  <div class="about-page">
      <div class="textBox disableSelect" v-for="(box, index) in textBoxes" :key="index" v-show="selectedIndex === index">
        <p v-html="box.content"></p>
      </div>
      <div class="aboutDots">
      <span class="dot" v-for="(box, index) in textBoxes" :key="index" @click="selectTextBox(index)" :class="{ active: selectedIndex === index }"></span>
    </div>
      </div>
      
  </div>
  `,
  mounted() {
    //when page opens, update the topbar to show the page title
    document.querySelector('.gridHead').classList.add('paused');
    document.querySelector('#dynamicTitle').innerHTML = 
    `
    <svg class="titleArrow noMobile" version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path clip-rule="evenodd" d="M32,16.009c0-0.267-0.11-0.522-0.293-0.714 l-9.899-9.999c-0.391-0.395-1.024-0.394-1.414,0c-0.391,0.394-0.391,1.034,0,1.428l8.193,8.275H1c-0.552,0-1,0.452-1,1.01 s0.448,1.01,1,1.01h27.586l-8.192,8.275c-0.391,0.394-0.39,1.034,0,1.428c0.391,0.394,1.024,0.394,1.414,0l9.899-9.999 C31.894,16.534,31.997,16.274,32,16.009z" fill-rule="evenodd" id="Arrow_Forward"/>
    </svg>
    <h2 class="noMobile">About Me</h2>
    `;
    //add swiping functionality for touch screen users
    const aboutDots = document.querySelector('.about-page');
    aboutDots.addEventListener('touchstart', this.handleTouchStart);
    aboutDots.addEventListener('touchmove', this.handleTouchMove);
  },
  destroyed(){
    document.querySelector('.gridHead').classList.remove('paused');
    //add swiping functionality for touch screen users
    const aboutDots = document.querySelector('.about-page');
    aboutDots.removeEventListener('touchstart', this.handleTouchStart);
    aboutDots.removeEventListener('touchmove', this.handleTouchMove);
  },
  methods:{
    handleTouchStart(event) {
      console.log('swipe detected');
      this.touchStartX = event.touches[0].clientX;
    },
    handleTouchMove(event) {
      if (!this.touchStartX) return;

      const touchEndX = event.touches[0].clientX;
      const deltaX = touchEndX - this.touchStartX;
      const sensitivity = 500; // Adjust this value as needed

      if (Math.abs(deltaX) > sensitivity) {
        if (deltaX > 0) {
          // Swipe right
          this.selectTextBox(Math.max(0, this.selectedIndex - 1));
        } else {
          // Swipe left
          this.selectTextBox(Math.min(this.textBoxes.length - 1, this.selectedIndex + 1));
        }
        this.touchStartX = null;
      }
    },
    selectTextBox(index) {
      this.selectedIndex = index;
    }
  },
  watch: {
    profileData(newData) {
      this.profileData.nickname = newData.nickname;
    },
  },

  data() {
    return {
    aboutShow: false,
    textBoxes: [
      { content: `
          As a versatile interactive media developer, I thrive on the dynamic interplay between technology and design. Leveraging frameworks like <span>React</span>, <span>Vue</span>, and <span>Lumen</span> allows me to craft engaging digital experiences that connect with diverse audiences.
          <br><br>My skill set spans a broad spectrum, encompassing <span>graphic design</span>, <span>3D design</span>, <span>motion design</span>, <span>marketing</span>, and <span>web development</span>.
          <br><br>Driven by a passion for innovation and guided by creativity, I approach each project with a commitment to pushing boundaries and delivering <span>quality work</span>. I continuously seek to expand my expertise, ensuring adaptability and effectiveness in the ever-changing digital landscape.
      ` },
      { content: `
          With <span>years of experience</span> in both web development and graphic design, I bring a dynamic, quick-learning, and hardworking approach to every project. 
          <br><br>Renowned for <span>efficiency</span> and <span>reliability</span>, I thrive in fast-paced environments where I leverage my diverse skill set to deliver exceptional results. 
          My dedication to staying ahead of industry trends ensures continuous enhancement of my abilities, providing clients with innovative solutions that exceed expectations. 
          <br><br>Whether crafting compelling websites or creating captivating visuals, I am <span>committed to excellence</span> in every aspect of my work.
      ` },
      // Add more text boxes as needed
    ],
    touchStartX: null,
    selectedIndex: 0
  }}
}