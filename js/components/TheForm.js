export default {
  name: "TheFormComponent",
  created() {
    //log recieved data on component create event
    // console.log('Form called');
},
data() {
  return {
    formShow: true, // or false, depending on your use case
  };
},

  template: `
  
  <div class="videoChunk" id="bCard" >

  <div class="contact-page">

  <form method="post" id="mail-form" action="includes/contact.php">

      <label for="firstName">First Name</label>
      <input type="text" id="firstName" name="firstName" placeholder="Your first name goes here...">

      <label for="email">Email</label>
      <input type="text" id="email" name="email" placeholder="Your email goes here...">
  </br>
      <label for="message">Message</label>
      <textarea id="message" name="message" placeholder="Write your message here..." style="height:200px"></textarea>
  
      <button class="btn-shine" type="submit" value="SEND">Send Message</button>
    </form>
    </div></div>
  `
}