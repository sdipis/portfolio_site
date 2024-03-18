export default {
  name: "TheThumbnailComponent",
  props: ["piece", "musicPlaying"],
  data() {
    return {
      loading: true // Initialize loading state
    };
  },
  computed: {
    gridColumn() {
      return this.calculateColumn(this.piece);
    },
    gridRow() {
      return this.calculateRow(this.piece);
    },
  },
  template: `
    <div
      class="disableSelect bio-panel tooltip"
      :id="[piece.title]"
      :class="[piece.type]"
      :style="{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }"
    >
      <!-- Loader -->
      <div v-if="loading" class="loaderWrapperThumb">
      <div class="loader">
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="shadow"></div>
    <div class="shadow"></div>
    <div class="shadow"></div>
</div>
      
      </div>

      <a :href='"project.php?id="+piece.id' target="_blank" :title='"Learn More About "+piece.title'>
        <p class="tooltiptext noMobile">{{piece.title}}</p>
      </a>

      <video autoplay preload="meta" muted loop playsinline v-if="piece.content === 'video'"  :src=' piece.display' @click="showmydata(); playSound('dist/audio/woosh.mp3')" ></video>
      <img v-else  :src=' piece.display' @click="showmydata(); playSound('dist/audio/woosh.mp3')" />
    </div>
  `,
  methods: {
    showmydata() {
      this.$emit("showdata", this.piece);
      this.playSound;
    },
    playSound(soundFile) {
      if (this.musicPlaying === true) {
        const audio = new Audio(soundFile);
        audio.play();
      }
    },
    calculateColumn(piece) {
      return 1;
    },
    calculateRow(piece) {
      switch (piece.type) {
        case "design-large":
          return "span 1";
        case "design":
          return "span 4";
        case "design-wide":
          return "span 1";
        case "design-mid":
          return "span 2";
        default:
          return "span 1";
      }
    },
    getComponentType(type) {
      // Return the component type based on piece.type
      return type === "video" ? "video" : "img";
    },
  },
  mounted() {
    // Simulate loading delay (remove this in production)
    // setTimeout(() => {
      this.loading = false; // Set loading to false after the component is mounted
    // }, 50000); // Adjust the delay as needed
  }
};
