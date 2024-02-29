export default {
  name: "TheFormComponent",
  created() {
    //log recieved data on component create event
    // console.log('Form called');
},
data() {
  return {
    formShow: false, // or false, depending on your use case
  };
},

  template: `
  
  <div class="videoChunk disableSelect" id="bCard" >

  <div class="contact-page">

  <form method="post" id="mail-form" action="includes/contact.php">
  <h2>Contact</h2>

      <label for="firstName">Name</label>
      <input type="text" id="firstName" name="firstName" placeholder="Your name goes here..." required>

      <label for="email">Email</label>
      <input type="text" id="email" name="email" placeholder="Your email goes here..." required>
  </br>
      <label for="message">Message</label>
      <textarea id="message" name="message" placeholder="Write your message here..." style="height:200px"></textarea>
  
      <button class="btn-shine" type="submit" value="SEND">Send Message</button>
    </form>
    </div></div>
  `
}