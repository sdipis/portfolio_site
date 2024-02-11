export default {
    name: "TheLightboxComp",

    props: ["piece"],
  
    template: `
    
    <div class="dots"  :class='[piece.size]+" "+[piece.type]'>

    <div class="lb-image">
    <a :href='"project_detail.php?id="+piece.id'><img @click="closeLightBox" :src='"dist/" + piece.display'/></a></div>

    <div class="lb-text bevel diag" >

    <h2 class="lb-title">{{ piece.title }}</h2>
    <a :href='"project_detail.php?id="+piece.id'>Learn More</a>
    <a :href='"edit_project_form.php?id="+piece.id'>Edit</a>

    <hr>
    <h3 v-show="!textShow" class="lb-subtitle">{{ piece.description }}</h3>
    <br>
    <h3 v-show="!textShow" class="lb-subtitle">{{ piece.moreinfo }}</h3>
    

    <div class="link">


    <img @click="closeLightBox"  class="backButton" src="svg/goback.svg" >
    
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