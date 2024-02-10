export default {
    name: "TheThumbnailComponent",


    props: ["piece"],

    template: `
    <transition appear name="fade-slide">
    <div @click="showmydata" class="bio-panel"
    
    :class="[piece.type]">

        <div class="p_avatar">
            <img :src='"dist/" + piece.display'>
        </div>
    </div>
    </transition>
    `,

    data:{ function(){
        return{
            message: "I am a function in vue object",
        }}
    },

    methods: {
        showmydata() {
            //debugger;
            this.$emit("showdata", this.piece);
        }
    }
}