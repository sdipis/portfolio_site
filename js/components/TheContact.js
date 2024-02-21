export default {
  name: "TheContactComponent",
  props: ['profileData'],
  created() {
    //log recieved data on component create event
    console.log('Received profileData:', this.profileData);
},

  template: `
  <div class="hero-section">
  <div class="hero-grid contact-card">

      <!-- Component 1 -->
      <div class="hero-component">
      <div id="bCard">
      <ul>
          <li><h2 id="bCardName">{{ profileData[0].nickname }}</h2></li>
          <li><h3>{{ profileData[0].bio }}</h3></li>
          <li><h3>{{ profileData[0].cell }}</h3></li>
          <li><h3>{{ profileData[0].email }}</h3></li>
          <br>
          
      </ul>
      </div>
      </div>
      
    

  </div>
  </div>
  `,

  watch: {
    profileData(newData) {
      //declaring a variable that changes when a new dataset is loaded
      console.log("Piece prop changed:", newData);
      // Add logic to update the image or other content based on newPiece
      this.profileData.nickname = newData.nickname; // Assuming 'display' is the property representing the image source
      //whenever a new piece gets loaded, it gets passed as newPiece
    },
  },

  data() {
    return {
    conHid: true
  }}
}