export default {
  name: "TheVideoComponent",
  created() {
    //log recieved data on component create event
    console.log('Video Loaded');
},

  template: `

  <div class="videoChunk diag">
  <video src="videos/intro_video.mp4" controls autoplay loop playsinline/>
  </div>

  `
}