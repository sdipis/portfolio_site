export default {
  name: "TheFormComponent",
data() {
  return {
    formShow: false
  };
},
mounted() {
  //add class to pause animation when user opens. For readability
  document.querySelector('.gridHead').classList.add('paused');
  document.querySelector('#dynamicTitle').innerHTML = 
  `
  <svg class="titleArrow" version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <path clip-rule="evenodd" d="M32,16.009c0-0.267-0.11-0.522-0.293-0.714 l-9.899-9.999c-0.391-0.395-1.024-0.394-1.414,0c-0.391,0.394-0.391,1.034,0,1.428l8.193,8.275H1c-0.552,0-1,0.452-1,1.01 s0.448,1.01,1,1.01h27.586l-8.192,8.275c-0.391,0.394-0.39,1.034,0,1.428c0.391,0.394,1.024,0.394,1.414,0l9.899-9.999 C31.894,16.534,31.997,16.274,32,16.009z" fill-rule="evenodd" id="Arrow_Forward"/>
  </svg>
  <h2>Contact Me</h2>
  `;
},
destroyed(){
  document.querySelector('.gridHead').classList.remove('paused');

},
  template: `
  
  <div class="videoChunk disableSelect" id="bCard" >
  <div class="contact-page">
  <h2 class="onlyMobile popBoxTitle">Contact Me</h2>
  <form method="post" id="mail-form" action="includes/contact.php">

      <label for="firstName">Name</label>
      <input type="text" id="firstName" name="firstName" placeholder="Your name goes here..." required>

      <label for="email">Email</label>
      <input type="text" id="email" name="email" placeholder="Your email goes here..." required>
  </br>
      <label for="message">Message</label>
      <textarea id="message" name="message" placeholder="Write your message here..." style="height:200px"></textarea>
  
      <button class="btn-shine" type="submit" value="SEND">Send Your Message</button>
    </form>
    <div id="dynamicTitle" class="dynamicTitleMobile">
    <h2></h2>
    </div>
    </div>

    </div>
  `
}