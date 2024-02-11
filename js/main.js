import { getData } from "./components/TheDataMiner.js";
import TheThumbnail from "./components/TheThumbnail.js";
import TheContactForm from "./components/TheContact.js";
import TheLightbox from "./components/TheLightbox.js";
import TheHeader from "./components/TheTicker.js"; 
import { SendMail } from "./components/TheMailer.js";

(() => {
    const myVue = new Vue({
        // when vue instance is born, a created event happens
        //when the event fires V we can tell it to do stuff like get our data from our database we have in dataminer
        // like so:
        created: function(){
            //fetch portfolio data:
            //1. go to database and get the data ive requested
            //2. dataminer is the component that actually "mines" the data from mySQL

            getData(null, (data) => this.portfolioData = data )
                // when you get the data back, store it in the vue instance
                //look inside data object for this portfolioData key
            
        let mailSubmit = document.querySelector('input[type=submit]');

        function processMailFailure(result){
            console.table(result);
            alert(result.message);
        }

        function processMailSuccess(result){
            console.table(result);
            alert(result.message);
        }

        function processMail(e){
            e.preventDefault();

            SendMail(this.parentNode)
            .then(data => processMailSuccess(data))
            .catch(err => processMailFailure(err));
        }

        mailSubmit.addEventListener("click", processMail());
        },

        data:{
            //data goes in here for Vue comps
            //portfolioData is in this array

            // ^ we declared the data we pulled from the data miner (with the code above) as portfolioData
            // v we are creating a vue array, as somewhere to place the portfolioData from above, that is non-vue js
            portfolioData: [],
            // {} obj [] array
            currentData: {},
            conHid: false,
            porHid: false,
            // message: "hello from vue",
            isVisible: false,
            counter:0,
            textShow: false,
            currentIndex: 0, // Initialize currentIndex to 0

        },

        methods:{
            changeIndex(indexChange) {
                this.currentIndex += indexChange;
                if (this.currentIndex < 0) {
                  this.currentIndex = 0;
                } else if (this.currentIndex >= this.portfolioData.length) {
                  this.currentIndex = this.portfolioData.length - 1;
                }
              },

            //this is where we pass the data we need from the thumbnail comp to the lightbox
            popLightBox(item) {
                //debugger;
                this.currentData = item;
                this.isVisible = true;

                // let portHeader = document.querySelector(".lb-title");
                // let lightBoxImage = document.querySelector(".lb-image img");

                // if(portHeader){
                //     portHeader.textContent = item.title;
                // }

                // if(lightBoxImage){
                //     lightBoxImage.src = "dist/" + item.display;
                // }

            },

            closeLightBox(){
                this.isVisible = false;
            }
        
            
        },

        components:{
            thumb: TheThumbnail,
            contacty: TheContactForm,
            lightybox: TheLightbox,
            toppy: TheHeader
        }
        

    }).$mount("#app");
})()