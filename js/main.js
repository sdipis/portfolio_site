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
      
      getData(null, (data) => (this.portfolioData = data));
      getSecondData(null, (data) => (this.profileData = data));

      document.addEventListener("DOMContentLoaded", () => {
        let mailSubmit = document.querySelector('input[type=submit]');

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
      });
    },

    data() {
      return {
        portfolioData: [],
        profileData: {},
        currentData: {},
        conHid: true,
        porHid: true,
        videoShow: false,
        formShow: false,
        isVisible: false,
        counter: 0,
        textShow: false,
        audioElement: null,
        musicPlaying: false,
        crackSeal: false,
        autoScrollEnabled: false,
        scrollingPaused: false,
      };
    },

    methods: {
      openVideoComponent() {
        this.formShow = false;
        this.videoShow = !this.videoShow;

        if (this.conHid === true) {
          this.conHid = !this.conHid;
        }
        window.scrollTo(0, 0);
        this.pauseScroll();
      },

      openFormComponent() {
        this.conHid = !this.conHid;

        this.formShow = !this.formShow;
        this.videoShow = false;

        window.scrollTo(0, 0);
        this.pauseScroll();
      },

      toggleMusic() {
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
        this.currentData = item;
        this.currentIndex = this.portfolioData.findIndex((obj) => obj.id === item.id);
        this.isVisible = true;

        this.pauseScroll();
      },

      closeLightBox() {
        this.isVisible = false;
        this.resumeScroll();
      },

      startScroll() {
        this.crackSeal = true;
        this.conHid = false;
        this.porHid = false;

        setTimeout(() => {
          if (!this.scrollingPaused) {
            if (scrollerID === null) {
              let triggerDistance = 5;

              function scrollStep() {
                window.scrollBy(0, 1);

                if (window.innerHeight + window.scrollY >= document.body.offsetHeight - triggerDistance) {
                  myVue.stopScroll();
                } else {
                  scrollerID = requestAnimationFrame(scrollStep);
                }
              }

              scrollerID = requestAnimationFrame(scrollStep);
            }
          }
        }, 0);
      },

      stopScroll() {
        clearInterval(scrollerID);
        scrollerID = null;
      },

      stopMusic() {
        if (this.audioElement) {
          this.audioElement.pause();
          this.audioElement = null;
        }
      },

      pauseScroll() {
        this.scrollingPaused = true;
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
