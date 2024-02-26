import { getData, getSecondData } from "./components/TheDataMiner.js";
import TheThumbnail from "./components/TheThumbnail.js";
import TheContactForm from "./components/TheContact.js";
import TheLightbox from "./components/TheLightbox.js";
import TheHeader from "./components/TheTicker.js"; 
import TheVideoComponent from "./components/TheVideo.js";
import TheFormComponent from "./components/TheForm.js";
import { SendMail } from "./components/TheMailer.js";

(() => {
  let scrollerID = null;

  const myVue = new Vue({
    
    created() {
      //pull the fetch data from the dataMiner.js, which uses php to fetch from database and push to frontend as json data
      getData(null, (data) => (this.portfolioData = data));
      getSecondData(null, (data) => (this.profileData = data));

      let mailSubmit = document.querySelector('button[type=submit]');

      if (mailSubmit) {
        function processMailFailure(result) {
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
    },

    data() {
      return {
        portfolioData: [],
        profileData: {},
        currentData: {},
        //set conHid to false if you want contact info to show up on page load
        //set conHid to true if you want "click me button" to show up on page load
        conHid: true,
        porHid: true,
        videoShow: false,
        formShow: false,
        //isVisible flag sets to true when user opens the lightbox, sets to false when user closes lightbox
        isVisible: false,
        counter: 0,
        textShow: false,
        audioElement: null,
        musicPlaying: false,
        //crackSeal is triggered to true when user clicks the button, this cannot be set to false again without reloading the page
        crackSeal: false,

        //this is activated by toggling scrolling with a menu link
        //if I dont toggle this, the website will start auto scrolling everytime a user closes the lightbox, even if they werent auto scrolling when they opened it
        autoScrollEnabled: false,
        scrollingPaused: false,

      };
    },

    methods: {

      openVideoComponent() {
        //spawns the video when user clicks on menu link
        //hide the contact form when video is opened
        this.formShow = false;
        this.videoShow = !this.videoShow;

        //hide the contact info if it's open when user opens video
        //only toggles it if it's already closed
        if (this.conHid === true) {
          this.conHid = !this.conHid;
        }
        window.scrollTo(0, 0);
        this.pauseScroll();
      },

      openFormComponent() {
        //spawns in the contact form when user clicks menu link
        //hides the contact info so it doesnt show behind the form
        this.conHid = !this.conHid;

        this.formShow = !this.formShow;
        this.videoShow = false;

        window.scrollTo(0, 0);
        this.pauseScroll();
      },

      toggleMusic() {
        //toggles the music when user clicks on the speaker thing
        this.musicPlaying = !this.musicPlaying;

        if (this.musicPlaying) {
          this.audioElement = new Audio('./dist/audio/ambience_edit.wav');

          this.audioElement.addEventListener('ended', () => {
            this.audioElement.currentTime = 0;
            this.audioElement.play();
          });

          this.audioElement.play();
        } else {
          this.stopMusic();
        }
      },

      popLightBox(item) {
        //opens the lightbox when user clicks on an item in gallery
        this.currentData = item;
        this.currentIndex = this.portfolioData.findIndex((obj) => obj.id === item.id);
        this.isVisible = true;


        this.pauseScroll();
      },

      closeLightBox() {
        //closes the lightbox
        this.isVisible = false;
        if(this.autoScrollEnabled===true){
        this.resumeScroll();}
      },

      startScroll() {
        // Check if the screen width is greater than 800 pixels
          this.crackSeal = true;
          this.conHid = false;
          this.porHid = false;
          this.autoScrollEnabled = true;
      
          if(!this.scrollingPaused || scrollerID === null){
              let triggerDistance = 5;
      

              function scrollStep() {

                //only scroll if screenwidth is above 768px (non mobile)
                if (window.innerWidth > 768) {
                window.scrollBy(0, 1);
                }
                //stop scrolling when user gets to the bottom of page
                if (window.innerHeight + window.scrollY >= document.body.offsetHeight - triggerDistance) {
                  myVue.stopScroll();
                  myVue.scrollingPaused=true;

                } else {
                  scrollerID = requestAnimationFrame(scrollStep);
                }
              }
      
              scrollerID = requestAnimationFrame(scrollStep);
            }
      },

      stopScroll() {
        //clear scroll interval
        clearInterval(scrollerID);
        //reset scrollerID to null so scrolling can be started again
        scrollerID = null;
      },

      stopMusic() {
        //stops music from playing if it's playing
        if (this.audioElement) {
          this.audioElement.pause();
          this.audioElement = null;
        }
      },

      pauseScroll() {
        //pause scroll (when user opens lightbox)
        this.scrollingPaused = true;
        cancelAnimationFrame(scrollerID);
      },
      pauseAutoScroll() {
        //turns off auto scroll (scrolling is enabled every time lightbox closes if this isnt here)
        this.scrollingPaused = true;
        this.autoScrollEnabled = false;
        cancelAnimationFrame(scrollerID);
      },

      resumeScroll() {
        this.scrollingPaused = false;
        scrollerID = null;
        this.startScroll();
      },
    },

    components: {
      thumb: TheThumbnail,
      contacty: TheContactForm,
      lightybox: TheLightbox,
      toppy: TheHeader,
      videoy: TheVideoComponent,
      formy: TheFormComponent
    },
  }).$mount("#app");
})();
