export default {
  name: "TheLightboxComp",
  props: ["piece"],
  
    template: `
    
    <div class="dots" :class="[piece.size] + ' ' + [piece.type]">
    <div class="lb-image">
      <img @click="closeLightBox" :src='"dist/" + piece.display'/>

      <div class="link">
      <a @click="closeLightBox" :href='"project.php?id="+piece.id' target="_blank"><button class="btn-shine">More Information...</button></a>
    </div>

    </div>

    <img @click="closeLightBox" class="backButton" src="svg/goback.svg" />


  </div>


    `,
    data() {
      return {
        textShow: false,
      };
    },
    methods: {
      closeLightBox() {
        this.$emit("close");
      },
      toggleTextShow() {
        this.textShow = !this.textShow;
      }
    },
  };