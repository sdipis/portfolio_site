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
        created: function() {
            getData(null, (data) => this.portfolioData = data);
          
            // Wait for the DOM to be fully loaded before accessing elements
            document.addEventListener("DOMContentLoaded", () => {
              let mailSubmit = document.querySelector('input[type=submit]');
          
              if (mailSubmit) {
                function processMailFailure(result) {
                  console.table(result);
                  alert(result.message);
                }
          
                function processMail(e) {
                  e.preventDefault();
          
                  SendMail(this.parentNode)
                    .then(data => processMailSuccess(data))
                    .catch(err => processMailFailure(err));
                }
          
                mailSubmit.addEventListener("click", processMail);
              }
            });
          },
data() {
    return {
            //data goes in here for Vue comps
            //portfolioData is in this array

            // ^ we declared the data we pulled from the data miner (with the code above) as portfolioData
            // v we are creating a vue array, as somewhere to place the portfolioData from above, that is non-vue js
            portfolioData: [],
            // {} obj [] array
            currentData: {},
            conHid: true,
            porHid: false,
            // message: "hello from vue",
            isVisible: false,
            counter:0,
            textShow: false,
            currentIndex: null,
            audioElement:null
 
    };
  },

        methods:{
          toggleMusic() {
            // Toggle the musicPlaying property
            this.musicPlaying = !this.musicPlaying;

            // If musicPlaying is true, start playing music
            if (this.musicPlaying) {
                // Create a new audio element
                this.audioElement = new Audio('./dist/audio/ambience.wav');

                // Add event listener for the 'ended' event to loop seamlessly
                this.audioElement.addEventListener('ended', () => {
                    this.audioElement.currentTime = 0; // Reset the current time to the beginning
                    this.audioElement.play();
                });

                this.audioElement.play();
            } else {
                // If musicPlaying is false, stop the music or add any other logic
                if (this.audioElement) {
                    this.audioElement.pause();
                }
            }
        },
            handleShowData(piece) {
                // Do something with the emitted data
                console.log("Received data:", piece.title);
                //logs out the data recieved
              },
              updateCurrentIndex(index) {
                this.currentIndex = index;
                // updates the currentIndex
              },

            //this is where we pass the data we need from the thumbnail comp to the lightbox
            popLightBox(item) {
                this.currentData = item;
                this.currentIndex = this.portfolioData.findIndex((obj) => obj.id === item.id);
                this.isVisible = true;
                //loads the currentData and sets the isVisible prop to true so the lightbox shows up
              },

            closeLightBox(){
                this.isVisible = false;
                //this just changes the isVisible bool from true to false, closing the lightbox
            },
        
            
        },

        components:{
            thumb: TheThumbnail,
            contacty: TheContactForm,
            lightybox: TheLightbox,
            toppy: TheHeader
        }
        

    }).$mount("#app");
})()