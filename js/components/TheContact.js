export default {
  name: "TheContactComponent",

  template: `
  <div class="contact-page">

  <div class="contactInfo">

    <div id="bCard">
    <div>
    <img src="./dist/contact/contactPhoto.jpeg" />
    <h1>Spencer D</h1>
    <h3>Phone: <a href="tel:1">(519) 123 4567</a></h3>
    <h3>Email: <a href="">spencer@blitzed.ca</a></h3>
    <h4>London, Ontario, Canada</h4>
    </div>
    </div>

    <div class=" boxLinksContact">
    <div class="mapouter">
    <div class="gmap_canvas bevel">
    <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=Greater%20Toronto%20Area&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>
    </div>

    </div>

  <form method="post" id="mail-form" action="includes/contact.php">

  <h2>Contact me Directly</h2>

      <label for="firstName">First Name</label>
      <input type="text" id="firstName" name="firstName" placeholder="Your first name goes here...">
      <label for="lastName">Last Name</label>
      <input type="text" id="lastName" name="lastName" placeholder="Your last name goes here...">

      <label for="email">Email</label>
      <input type="text" id="email" name="email" placeholder="Your email goes here...">
      <label for="mediaType">Interested in:
      <select name="mediaType">
        <option value="Web-dev"> Web-Dev </option>
        <option value="Graphics"> Graphics </option>
        <option value="Web-dev"> Other </option>

        </select></label></br>
      <input class="short"  type="text" id="subject" name="subject" placeholder="If other is selected, specify here...">
  </br>
      <textarea id="message" name="message" placeholder="Write your message here..." style="height:200px"></textarea>
  
      <input class="bevel" type="submit" value="SEND">
    </form>
    </div>
  `,

  data:{
    conHid: false
  }
}