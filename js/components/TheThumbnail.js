export default {
    name: "TheThumbnailComponent",
    props: ["piece"],
    template: `
      <transition appear name="fade-slide">
        <div @click="showmydata" class="bio-panel" :class="[piece.type]">
          <div class="p_avatar">
            <img :src='"dist/" + piece.display'>
            <div class="thumbButtons"></div>
          </div>
        </div>
      </transition>
    `,
    data() {
      return {
        message: "This is a piece of Spencer's portfolio",
      };
    },
    methods: {
        showmydata() {
            this.$emit("showdata", this.piece);
            this.$emit("update-current-index", this.piece.id); // Emit an event to update currentIndex
            console.log("Data being shown!!");
          },
    },
  };
  