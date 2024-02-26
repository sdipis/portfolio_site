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
          <li><h3>{{ profileData[0].email }}</h3></li>
          <li><h3>{{ profileData[0].bio }}</h3></li>

      </ul>

      </div>
      <div class="scrollDown textFlash onlyMobile">
      <svg viewBox="-0.5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Page-1" stroke="none" stroke-width="1" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-380.000000, -760.000000)"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M329.277067,616 C328.694576,616 328.221829,616.448 328.221829,617 L328.221829,619 C328.221829,619.552 328.694576,620 329.277067,620 C329.859559,620 330.332305,619.552 330.332305,619 L330.332305,617 C330.332305,616.448 329.859559,616 329.277067,616 L329.277067,616 Z M328.221829,609.343 C328.221829,609.896 328.694576,610.343 329.277067,610.343 C329.859559,610.343 330.332305,609.896 330.332305,609.343 L330.332305,604.207 C330.332305,603.761 331.03826,603.538 331.37066,603.853 L333.215216,605.536 C333.626759,605.926 334.356983,605.926 334.768526,605.536 C335.181124,605.145 335.18429,604.512 334.771692,604.122 L331.04037,600.585 C330.217284,599.805 328.881353,599.805 328.057212,600.585 L327.679437,600.941 L324.316393,604.121 C323.903795,604.512 323.890077,605.146 324.302675,605.536 C324.715273,605.927 325.355803,605.927 325.768401,605.536 L327.458892,603.855 C327.791292,603.54 328.221829,603.763 328.221829,604.209 L328.221829,609.343 Z M342.767231,614.336 L338.632808,616.493 C338.219155,616.765 337.658823,616.712 337.302153,616.374 C336.844179,615.94 336.910659,615.21 337.440389,614.857 L338.698233,614 L329.733985,614 C329.151494,614 328.675582,613.573 328.675582,613.02 C328.675582,612.31 329.3541,612.041 329.726599,612.041 L335.041833,612.033 L335.447044,607.716 C335.783665,606.759 336.734435,606.189 337.778065,606.387 L341.527326,606.719 C342.513974,606.906 342.995162,607.727 342.995162,608.68 L342.995162,613.515 C342.995162,613.844 343.0532,614.149 342.767231,614.336 L342.767231,614.336 Z" id="scroll_down-[]"> </path> </g> </g> </g> </g></svg>
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