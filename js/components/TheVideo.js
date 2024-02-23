export default {
  name: "TheVideoComponent",
  created() {
    //log recieved data on component create event
    // console.log('Video Loaded');
},

  template: `
  <div id="bCard" class="videoChunk">
  <video src="videos/intro_video.mp4" autoplay playsinline/>
  </div>
  `
}