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
        message: "I am a function in vue object",
      };
    },
    methods: {
      showmydata() {
        this.$emit("showdata", this.piece);
        console.log("Data being shown!!");
      },
    },
  };
  