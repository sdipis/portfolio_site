export default {
  name: "TheThumbnailComponent",
  props: ["piece", "musicPlaying"],
  computed: {
    gridColumn() {
      // Calculate the desired column position based on your logic
      // Example: return a number based on piece properties
      return this.calculateColumn(this.piece);
    },
    gridRow() {
      // Calculate the desired row position based on your logic
      // Example: return a number based on piece properties
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
      <a :href='"project.php?id="+piece.id' target="_blank" :title='"Learn More About "+piece.title'>
        <p class="tooltiptext">{{piece.title}}</p>
      </a>
      <img
        @click="showmydata(); playSound('dist/audio/woosh.mp3')"
        loading="lazy"
        :src='"dist/" + piece.display'
        :style="{ gridColumn: gridColumn, gridRow: gridRow }"
      />
    </div>
  `,
  methods: {
    showmydata() {
      this.$emit("showdata", this.piece);
      // console.log("Data being shown!!");
      this.playSound;
    },
    playSound(soundFile) {
      if (this.musicPlaying === true) {
        const audio = new Audio(soundFile);
        audio.play();
      }
    },
    calculateColumn(piece) {
      // Implement your logic to calculate the column position
      // Example: return a number based on piece properties
      return 1;
    },
    calculateRow(piece) {
      // Implement your logic to calculate the row position
      // Example: return a number based on piece properties
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
      }},
  },
};
