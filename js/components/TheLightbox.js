export default {
  name: "TheLightboxComp",
  props: ["piece"],
  
    template: `
    
    <div class="dots" :class="[piece.size] + ' ' + [piece.type]">
    <div class="lb-image">
      <img @click="closeLightBox" :src='"dist/" + piece.display'/>
    </div>
    <div class="lb-text bevel diag">
      <h2 class="lb-title">{{ piece.title }}</h2>
      <a :href='"project_detail.php?id="+piece.id'>Learn More</a>
      <a :href='"admin/edit_project_form.php?id="+piece.id'>Edit</a>
      <hr>
      <h3 v-show="!textShow" class="lb-subtitle">{{ piece.description }}</h3>
      <br>
      <h3 v-show="!textShow" class="lb-subtitle">{{ piece.moreinfo }}</h3>
      <div class="link">
        <button @click="goBackward" class="btn-shine">Previous</button>
        <button @click="goForward" class="btn-shine">Next</button>
        <img @click="closeLightBox" class="backButton" src="svg/goback.svg" />
      </div>
    </div>
  </div>

    `,
    data() {
      return {
        textShow: false,
      };
    },
    watch: {
      piece(newPiece) {
        console.log("Piece prop changed:", newPiece);
        // Add logic to update the image or other content based on newPiece
        this.piece.display = newPiece.display; // Assuming 'display' is the property representing the image source
        //whenever a new piece gets loaded, it gets passed as newPiece
      },
    },
    methods: {
      closeLightBox() {
        this.$emit("close");
      },
      toggleTextShow() {
        this.textShow = !this.textShow;
      },
      goBackward() {
        const prevIndex = (this.currentIndex - 1 + this.portfolioData.length) % this.portfolioData.length;
        this.$emit("navigate", prevIndex);
        this.$emit("updatePiece", this.portfolioData[prevIndex]);
      },
    
      goForward() {
        const nextIndex = this.currentIndex < this.portfolioData.length - 1 ? this.currentIndex + 1 : 0;
        this.$emit("navigate", nextIndex);
        this.$emit("updatePiece", this.portfolioData[nextIndex]);
      },
    },
  };