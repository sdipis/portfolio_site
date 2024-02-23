export default {
    name: "TheThumbnailComponent",
    props: ["piece"],
    template: `<div @click="showmydata" class="bio-panel tooltip" :id="[piece.title]" :class="[piece.type]">
    <p class="tooltiptext">{{piece.title}}</p>
    <img :src='"dist/" + piece.display'>

    </div>`,
    methods: {
        showmydata() {
            this.$emit("showdata", this.piece);
            // console.log("Data being shown!!");
          },
    },
  };
  