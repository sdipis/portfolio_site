export default {
    name: "TheLightboxComp",

    props: ["piece"],
  
    template: `
    
    <div class="dots"  :class='[piece.size]+" "+[piece.type]'>

    <div class="lb-image">
    <img @click="closeLightBox" :src='"dist/" + piece.display'/></div>


    <div class="lb-text bevel diag" >
    <h2 class="lb-title">{{ piece.title }}</h2>
    <a :href='"project_detail.php?id="+piece.id'>Learn More</a>
    <hr>
    <h3 v-show="!textShow" class="lb-subtitle">{{ piece.description }}</h3>
    <div class="link">
</div>

    </div>
    
    </div>

    `,

    methods:{
        closeLightBox(){
            this.$emit("close")
        },

        toggleTextShow(){
            this.textShow=!textShow;
        }

    }
  }