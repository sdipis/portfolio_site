import { getData, getSecondData } from "./components/TheDataMiner.js";
import TheThumbnail from "./components/TheThumbnail.js";
import TheContactForm from "./components/TheContact.js";
import TheLightbox from "./components/TheLightbox.js";
import TheHeader from "./components/TheTicker.js"; 
import TheVideoComponent from "./components/TheVideo.js";
import TheFormComponent from "./components/TheForm.js";
import { SendMail } from "./components/TheMailer.js";

(() => {
  let scrollerID =null;

    const myVue = new Vue({
      
        // when vue instance is born, a created event happens
        //when the event fires V we can tell it to do stuff like get our data from our database we have in dataminer
        // like so:
    created() {

      getData(null, (data) => (this.portfolioData = data));
      getSecondData(null, (data) => (this.profileData = data));

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
              .then((data) => processMailSuccess(data))
              .catch((err) => processMailFailure(err));
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
            profileData: {},
            // {} obj [] array
            currentData: {},
            conHid: true,
            porHid: false,
            videoShow: false,
            formShow: false,
            // message: "hello from vue",
            isVisible: false,
            counter:0,
            textShow: false,
            audioElement:null,
            musicPlaying: false,
            crackSeal:false
            
 
    };
  },

        methods:{

          //open video component and close contactform if open

          openVideoComponent() {
            // Close the formy component and open the videoy component
            this.formShow = false;
            this.videoShow = !this.videoShow;
          },

          openFormComponent() {
            // open the formy component and close the videoy component
            this.formShow = !this.formShow;
            this.videoShow = false;
          },
          
          toggleMusic() {
            // Toggle the musicPlaying property
            this.musicPlaying = !this.musicPlaying;
    
            // If musicPlaying is true, start playing music
            if (this.musicPlaying) {
              // this is where you set the music you want to play (on autoscroll)
              this.audioElement = new Audio('./dist/audio/ambience_edit.wav');
    
              // Add event listener for the 'ended' event to loop seamlessly
              this.audioElement.addEventListener('ended', () => {
                this.audioElement.currentTime = 0; // Reset the current time to the beginning
                this.audioElement.play();
              });
    
              this.audioElement.play();
            } else {
              // If musicPlaying is false, stop the music or add any other logic
              this.stopMusic();
            }
          },

            //this is where we pass the data we need from the thumbnail comp to the lightbox
            popLightBox(item) {
              //loads the currentData and sets the isVisible prop to true so the lightbox shows up

              this.currentData = item;
              this.currentIndex = this.portfolioData.findIndex((obj) => obj.id === item.id);
              this.isVisible = true;

            
              // Stop scrolling and music when lightbox is called
              cancelAnimationFrame(scrollerID);
              // this.stopMusic();


              },

            closeLightBox(){
                this.isVisible = false;
                //this just changes the isVisible bool from true to false, closing the lightbox
                // this.startScroll();
            },

            

            startScroll() {
              this.crackSeal=true;

              if (scrollerID === null) {
                // this.toggleMusic();
                let triggerDistance = 5; // Adjust this value as needed
            
                function scrollStep() {
                  window.scrollBy(0, 1);
            
                  if (
                    window.innerHeight + window.scrollY >=
                    document.body.offsetHeight - triggerDistance
                  ) {
                    myVue.stopScroll();
                    // myVue.musicPlaying=false;
                  } else {
                    scrollerID = requestAnimationFrame(scrollStep);
                  }
                }
            
                scrollerID = requestAnimationFrame(scrollStep);
              }
            },
            
      
      // Modify stopScroll to clear scrollerID
      stopScroll() {
        clearInterval(scrollerID);
        scrollerID = null;
        
      },
            stopMusic() {
              if (this.audioElement) {
                this.audioElement.pause();
                this.audioElement = null; // Reset audioElement after pausing
              }
            }
      
            
        },

        components:{
            thumb: TheThumbnail,
            contacty: TheContactForm,
            lightybox: TheLightbox,
            toppy: TheHeader,
            videoy: TheVideoComponent,
            formy: TheFormComponent
        }
        

    }).$mount("#app");
})()