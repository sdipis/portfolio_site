export default {
  name: "TheContactComponent",
  props: ['profileData'],
  created() {
    //log recieved data on component create event
    // console.log('Received profileData:', this.profileData);
},

  template: `
      <div id="bCard" class="videoChunk">
      <div class="contact-page">
      <ul>
          <li><h2 id="bCardName">{{ profileData[0].nickname }}</h2></li>
          <li><h3>{{ profileData[0].bio }}</h3></li>
      </ul>
      </div>
      </div>
  `,

  watch: {
    profileData(newData) {
      this.profileData.nickname = newData.nickname;
    },
  },

  data() {
    return {
    conHid: true
  }}
}