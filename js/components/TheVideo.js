export default {
  data() {
    return {
      isPlaying: false,
      isVideoReady: false,
    };
  },
  mounted() {
    const video = this.$refs.videoRef;

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

  <video ref="videoRef" src="videos/intro_video.mp4" autoplay playsinline>
  
  </video>
  <h2 v-if="!isPlaying" class="pausedText disableSelect">PAUSED</h2>
  <div v-if="!isPlaying" class="pausedBG"></div>

  </div>
  `,
};