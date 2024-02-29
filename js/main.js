import { getData, getSecondData } from "./components/TheDataMiner.js";
import TheThumbnail from "./components/TheThumbnail.js";
import TheContactForm from "./components/TheContact.js";
import TheLightbox from "./components/TheLightbox.js";
import TheHeader from "./components/TheTicker.js"; 
import TheVideoComponent from "./components/TheVideo.js";
import TheFormComponent from "./components/TheForm.js";
import TheAboutComponent from "./components/TheAboutMe.js";
import TheRandomTextComponent from "./components/TheRandomText.js";
import TheFooterComponenet from "./components/TheFooter.js";
import { SendMail } from "./components/TheMailer.js";


(() => {
  let scrollerID = null;

  const myVue = new Vue({

    destroyed() {
      window.removeEventListener('scroll', this.updateBlur);
    },
    
    created() {


      window.addEventListener('scroll', this.updateBlur);


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
        //set conShow to false if you want contact info to show up on page load
        //set conShow to true if you want "click me button" to show up on page load
        conShow: true,
        porHid: true,
        aboutShow: false,
        videoShow: false,
        formShow: false,
        //isVisible flag sets to true when user opens the lightbox, sets to false when user closes lightbox
        isVisible: false,
        counter: 0,
        textShow: false,
        audioElement: null,
        musicPlaying: true,
        //crackSeal is triggered to true when user clicks the button, this cannot be set to false again without reloading the page
        crackSeal: false,

        //this is activated by toggling scrolling with a menu link
        //if I dont toggle this, the website will start auto scrolling everytime a user closes the lightbox, even if they werent auto scrolling when they opened it
        autoScrollEnabled: false, //used for scroll logic, dont touch
        scrollingPaused: false, //used for scroll logic, don't touch.
        scrollEnabled: false, //turn this to false so it doesnt auto scroll when user enters site

        blurValue: 0, //declare blur value so we can use it dynamically
        scaleValue: 1, // Add this line to declare scaleValue
        opacityValue:1,




      };
    },
    computed: {
      dynamicBlur() {
        return `blur(${this.blurValue}px)`;
      },
      dynamicScale() {
        return `scale(${this.scaleValue})`;
      },
      dynamicOpacity(){
        return this.opacityValue
      },
      dynamicBG() {
        const currentPercentage = this.initialBackgroundPercentage * this.scaleFactor;
        return `${currentPercentage}% ${5 * this.scaleFactor}%`;
      }
    },
    methods: {
      updateBlur() {
        const scrollPosition = window.scrollY;
      
        this.scaleValue = Math.max(0.5, 1 - (scrollPosition) / 500); // Adjust the scaling factor as needed
      
        if (scrollPosition > 250) {
          this.blurValue = Math.min(0, scrollPosition / 0);
          this.opacityValue = Math.max(0, 1 - (scrollPosition - 250) / 100); // Adjust the opacity factor as needed
        } else {
          this.blurValue = 0;
          this.opacityValue = 1;
        }
      },

      openAboutMe(){
        //spawns in the contact form when user clicks menu link
        //hides the contact info so it doesnt show behind the form

        if(this.aboutShow===false){
          this.aboutShow = true;
          this.formShow = false;
          this.videoShow = false;
          this.conShow=true;
        }else{
          this.aboutShow = false;
          this.formShow = false;
          this.videoShow = false;
          this.conShow=false;
        }

        window.scrollTo(0, 0);
        this.pauseScroll();
      },

      openVideoComponent() {

        //toggle video to show when you click on button
        //if true, make false, if false, make true
        if(this.videoShow===false){
          this.aboutShow = false;
          this.formShow = false;
          this.videoShow = true;
          this.conShow=true;
        }else{
          this.aboutShow = false;
          this.formShow = false;
          this.videoShow = false;
          this.conShow=false;
        }

        window.scrollTo(0, 0);
        this.pauseScroll();
      },

      openFormComponent() {
        //spawns in the contact form when user clicks menu link
        //hides the contact info so it doesnt show behind the form

        if(this.formShow===false){
          this.aboutShow = false;
          this.formShow = true;
          this.videoShow = false;
          this.conShow=true;
        }else{
          this.aboutShow = false;
          this.formShow = false;
          this.videoShow = false;
          this.conShow=false;
        }

        window.scrollTo(0, 0);
        this.pauseScroll();
      },

      toggleMusic() {
        //toggles the music when user clicks on the speaker thing
        this.musicPlaying = !this.musicPlaying;

        // if (this.musicPlaying) {
        //   this.audioElement = new Audio('./dist/audio/ambience_edit.wav');

        //   this.audioElement.addEventListener('ended', () => {
        //     this.audioElement.currentTime = 0;
        //     this.audioElement.play();
        //   });

        //   this.audioElement.play();
        // } else {
        //   this.stopMusic();
        // }
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
      //play audio file on certain events. Audio file is set right in the HTML TAG/ Component
      playSound(soundFile) {
      if(this.musicPlaying === true){
      const audio = new Audio(soundFile);
      audio.play();}
      },

      buttonClicked(){
        if(this.crackSeal===false){
          this.conShow = false;
        }
          this.crackSeal = true;
          this.porHid = false;
          this.autoScrollEnabled = false;
          this.scrollingPaused=true;

          if(this.scrollEnabled===true){
            this.startScroll();
          }
      },
  

      startScroll() {
        // Check if the screen width is greater than 800 pixels

          this.autoScrollEnabled=true;
      
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
      updatePiece(newPiece) {
        this.currentData = newPiece;
      },
    },
    components: {
      thumb: TheThumbnail,
      contacty: TheContactForm,
      lightybox: TheLightbox,
      toppy: TheHeader,
      videoy: TheVideoComponent,
      formy: TheFormComponent,
      abouty: TheAboutComponent,
      randomy: TheRandomTextComponent,
      footery: TheFooterComponenet
    }

  }).$mount("#app");
})();
