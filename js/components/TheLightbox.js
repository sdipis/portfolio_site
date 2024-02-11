export default {
    name: "TheLightboxComp",
    props: ["piece", "pieces", "currentIndex"], // Update prop name here
    template: `
      <div v-show="piece" class="dots" :class='[piece.size] + " " + [piece.type]'>
      <div class="lb-image">
      <a :href='"project_detail.php?id=" + piece.id'>
        <img @click="closeLightBox" :src='"dist/" + piece.display' />
      </a>
    </div>

        <div class="link">
          <h2 @click="goBack">BACK</h2>
          <h2 @click="goForward">FORWARD</h2>
        </div>
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
      goBack() {
        console.log(this.currentIndex);
          this.$emit("changeIndex", -1);
      },
      goForward() {
            console.log(this.currentIndex);

            this.$emit("changeIndex", 1);
      },
    },
  };

  

//   I need piece to = pieces[currentIndex]

//   pieces is an array fetched from the dataminer using php
  