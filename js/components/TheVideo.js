export default {
  data() {
    return {
      isPlaying: false,
      isVideoReady: false,
    };
  },
  mounted() {
    const video = this.$refs.videoRef;
    document.querySelector('#dynamicTitle').innerHTML = 
    `
    <svg class="titleArrow" version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path clip-rule="evenodd" d="M32,16.009c0-0.267-0.11-0.522-0.293-0.714 l-9.899-9.999c-0.391-0.395-1.024-0.394-1.414,0c-0.391,0.394-0.391,1.034,0,1.428l8.193,8.275H1c-0.552,0-1,0.452-1,1.01 s0.448,1.01,1,1.01h27.586l-8.192,8.275c-0.391,0.394-0.39,1.034,0,1.428c0.391,0.394,1.024,0.394,1.414,0l9.899-9.999 C31.894,16.534,31.997,16.274,32,16.009z" fill-rule="evenodd" id="Arrow_Forward"/>
    </svg>
    <h2>Gottem</h2>
    `;

    // Listen for the 'canplaythrough' event to ensure the video is ready to play
    video.addEventListener('canplaythrough', () => {
      this.isVideoReady = true;

      // Programmatically trigger a click after the video has loaded
      this.toggleVideo();
    });
  },
  methods: {
    toggleVideo() {
      if (this.isVideoReady) {
        const video = this.$refs.videoRef;
        if (this.isPlaying) {
          video.pause();
        } else {
          video.play();
        }
        this.isPlaying = !this.isPlaying;
      }
    },
  },
  template: `
  <div id="bCard" class="videoChunk" @click="toggleVideo" style="position: relative;">

  <video preload="metadata"   ref="videoRef" src="videos/intro_video.mp4#t=0.1" autoplay playsinline>
  
  </video>
  <h2 v-if="!isPlaying" class="pausedText disableSelect">PAUSED</h2>
  <div v-if="!isPlaying" class="pausedBG"></div>

  </div>
  `,
};