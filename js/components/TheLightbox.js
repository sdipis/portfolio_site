export default {
  name: "TheLightboxComp",
  props: ["piece", "portfolioData", "musicPlaying"],
  
    template: `
    <transition name="image-slide">
    <div :class="[piece.size] + ' ' + [piece.type]" @keydown.left="prevImage(); playSound('dist/audio/slide.mp3')" @keydown.right="nextImage(); playSound('dist/audio/slide.mp3')" tabindex="0">

    <div class="lb-image">
    <div class="in-image disableSelect">
    <video preload="meta" controls playsinline v-if="piece.content === 'video'"    @click="playSound('dist/audio/wosh.mp3');" :src='"./" + piece.display +"#t=0.1"'/>

    <img v-else @click="playSound('dist/audio/wosh.mp3'); closeLightBox()" :src='"./"+piece.display'/>

    <ul class="disableSelect">
    <li>
    <a @click="closeLightBox(); playSound('dist/audio/wosh.mp3')">
    <svg class="infoButton" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Menu / Close_LG"> <path id="Vector" d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>        
    </a>
    </li>

    <li>
    <a @click="closeLightBox(); playSound('dist/audio/swoosh.mp3')"
       :href="piece.forward ? 'project.php?id=' + piece.for_id : 'project.php?id=' + piece.id"
       target="_blank"
       :title="'Learn More About ' + piece.title">
      <svg class="infoButton" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><g> <path class="st0" d="M255.992,0.008C114.626,0.008,0,114.626,0,256s114.626,255.992,255.992,255.992 C397.391,511.992,512,397.375,512,256S397.391,0.008,255.992,0.008z M300.942,373.528c-10.355,11.492-16.29,18.322-27.467,29.007 c-16.918,16.177-36.128,20.484-51.063,4.516c-21.467-22.959,1.048-92.804,1.597-95.449c4.032-18.564,12.08-55.667,12.08-55.667 s-17.387,10.644-27.709,14.419c-7.613,2.782-16.225-0.871-18.354-8.234c-1.984-6.822-0.404-11.161,3.774-15.822 c10.354-11.484,16.289-18.314,27.467-28.999c16.934-16.185,36.128-20.483,51.063-4.524c21.467,22.959,5.628,60.732,0.064,87.497 c-0.548,2.653-13.742,63.627-13.742,63.627s17.387-10.645,27.709-14.427c7.628-2.774,16.241,0.887,18.37,8.242 C306.716,364.537,305.12,368.875,300.942,373.528z M273.169,176.123c-23.886,2.096-44.934-15.564-47.031-39.467 c-2.08-23.878,15.58-44.934,39.467-47.014c23.87-2.097,44.934,15.58,47.015,39.458 C314.716,152.979,297.039,174.043,273.169,176.123z"></path> </g> </g></svg></a>
    </li>

    <li><a @click="prevImage(); playSound('dist/audio/slide.mp3')">
    <svg class="infoButton" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M222.927 580.115l301.354 328.512c24.354 28.708 20.825 71.724-7.883 96.078s-71.724 20.825-96.078-7.883L19.576 559.963a67.846 67.846 0 01-13.784-20.022 68.03 68.03 0 01-5.977-29.488l.001-.063a68.343 68.343 0 017.265-29.134 68.28 68.28 0 011.384-2.6 67.59 67.59 0 0110.102-13.687L429.966 21.113c25.592-27.611 68.721-29.247 96.331-3.656s29.247 68.721 3.656 96.331L224.088 443.784h730.46c37.647 0 68.166 30.519 68.166 68.166s-30.519 68.166-68.166 68.166H222.927z"></path></g></svg>
    </a></li>

    <li><a @click="nextImage(); playSound('dist/audio/slide.mp3')">
    <svg class="infoButton" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M799.584 440.059L498.23 111.547c-24.354-28.708-20.825-71.724 7.883-96.078s71.724-20.825 96.078 7.883l400.744 436.859a67.846 67.846 0 0113.784 20.022 68.03 68.03 0 015.977 29.488l-.001.063a68.343 68.343 0 01-7.265 29.134 68.28 68.28 0 01-1.384 2.6 67.59 67.59 0 01-10.102 13.687L592.545 999.061c-25.592 27.611-68.721 29.247-96.331 3.656s-29.247-68.721-3.656-96.331L798.423 576.39H67.963c-37.647 0-68.166-30.519-68.166-68.166s30.519-68.166 68.166-68.166h731.621z"></path></g></svg>
    </a></li>
    </ul>




      </div>
    </div>
  </div>

  
  </transition>
  `,
    data() {
      return {
        textShow: false,
      };
    },
    mounted() {
      // Set initial focus and add event listener for arrow key presses
      this.$el.focus();
      this.$el.addEventListener('keydown', this.handleKeyDown);
    },
  
    beforeDestroy() {
      // Remove event listener when the component is destroyed
      this.$el.removeEventListener('keydown', this.handleKeyDown);
    },
    methods: {
      closeLightBox() {
        this.$emit("close");
        const videoElement = this.$el.querySelector('video');
        if (videoElement) {
          videoElement.pause();
        }
      },
      prevImage() {
        const currentIndex = this.portfolioData.findIndex(item => item.id === this.piece.id);
        const newIndex = (currentIndex - 1 + this.portfolioData.length) % this.portfolioData.length;
        this.$emit("update-piece", this.portfolioData[newIndex]);
      },
      nextImage() {
        const currentIndex = this.portfolioData.findIndex(item => item.id === this.piece.id);
        const newIndex = (currentIndex + 1) % this.portfolioData.length;
        this.$emit("update-piece", this.portfolioData[newIndex]);
      },
      playSound(soundFile) {
        if(this.musicPlaying === true){
        const audio = new Audio(soundFile);
        audio.play();}
      },
      
    },
  };