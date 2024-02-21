export default {
    name: "TheThumbnailComponent",
    props: ["piece"],
    template: `
      <transition appear name="fade-slide">
        <div @click="showmydata" class="bio-panel" :id="[piece.title]" :class="[piece.type]">
          <div class="p_avatar">
            <img :src='"dist/" + piece.display'>
            <div class="thumbButtons"></div>
          </div>
        </div>
      </transition>
    `,
    methods: {
        showmydata() {
            this.$emit("showdata", this.piece);
            // console.log("Data being shown!!");
          },
    },
  };
  