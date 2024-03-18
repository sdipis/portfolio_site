export default {
    name: "TheSocialLinksComponent",
    props: ['profileData'],
    methods:{
      playSound(soundFile) {
          if (this.musicPlaying === true) {
            const audio = new Audio(soundFile);
            audio.play();
          }
        }
  },
    template: `
    <ul class="menus socialMenu disableSelect">

             <li @click="playSound('dist/audio/bop.mp3')">
             <a target="_blank" :href='profileData[0].artstation' title="Spencer's ArtStation" id="artstationLink">
             <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M0 23.63l2.703 4.672c0.552 1.094 1.667 1.781 2.885 1.781h17.943l-3.724-6.453zM32 23.661c0-0.641-0.193-1.245-0.516-1.75l-10.516-18.276c-0.557-1.057-1.656-1.719-2.854-1.719h-5.557l16.24 28.135 2.563-4.432c0.5-0.849 0.641-1.224 0.641-1.958zM17.161 19.047l-7.255-12.568-7.26 12.568z"></path> </g></svg>
             </a>
            </li>

            <li @click="playSound('dist/audio/bop.mp3')">
            <a target="_blank" :href='profileData[0].codepen' title="Spencer's CodePen" id="CodePenLink">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4265 1.18077C11.7709 0.939744 12.2291 0.939744 12.5735 1.18077L22.5735 8.18077C22.8408 8.3679 23 8.67369 23 9V16C23 16.3263 22.8408 16.6321 22.5735 16.8192L12.5735 23.8192C12.2291 24.0603 11.7709 24.0603 11.4265 23.8192L1.42654 16.8192C1.15921 16.6321 1 16.3263 1 16V9C1 8.67369 1.15921 8.3679 1.42654 8.18077L11.4265 1.18077ZM3 10.9207V14.0793L5.25621 12.5L3 10.9207ZM7 13.7207L3.74379 16L11 21.0793V16.5207L7 13.7207ZM13 16.5207V21.0793L20.2562 16L17 13.7207L13 16.5207ZM18.7438 12.5L21 14.0793V10.9207L18.7438 12.5ZM20.2562 9L17 11.2793L13 8.47934V3.92066L20.2562 9ZM11 3.92066V8.47934L7 11.2793L3.74379 9L11 3.92066ZM12 10.2207L8.74379 12.5L12 14.7793L15.2562 12.5L12 10.2207Z" fill=""></path> </g></svg>

            </a>
         </li>

         <li @click="playSound('dist/audio/bop.mp3')">
         <a target="_blank" :href='profileData[0].github' title="Spencer's GitHub" id="githubLink">
           
      <svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><g id="Page-1" stroke="none" stroke-width="1"  fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[]"> </path> </g> </g> </g> </g></svg>
       </a>
      </li>
    
                <li @click="playSound('dist/audio/bop.mp3')">
                   <a target="_blank" :href='profileData[0].instagram' title="Spencer's Instagram" id="instagramLink">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-271 273 256 256" xml:space="preserve">
                         <path d="M-64.5,273h-157c-27.3,0-49.5,22.2-49.5,49.5v52.3v104.8c0,27.3,22.2,49.5,49.5,49.5h157c27.3,0,49.5-22.2,49.5-49.5V374.7 v-52.3C-15.1,295.2-37.3,273-64.5,273z M-50.3,302.5h5.7v5.6v37.8l-43.3,0.1l-0.1-43.4L-50.3,302.5z M-179.6,374.7 c8.2-11.3,21.5-18.8,36.5-18.8s28.3,7.4,36.5,18.8c5.4,7.4,8.5,16.5,8.5,26.3c0,24.8-20.2,45.1-45.1,45.1s-44.9-20.3-44.9-45.1 C-188.1,391.2-184.9,382.1-179.6,374.7z M-40,479.5C-40,493-51,504-64.5,504h-157c-13.5,0-24.5-11-24.5-24.5V374.7h38.2 c-3.3,8.1-5.2,17-5.2,26.3c0,38.6,31.4,70,70,70c38.6,0,70-31.4,70-70c0-9.3-1.9-18.2-5.2-26.3H-40V479.5z"/>
                      </svg>
                   </a>
                </li>
    

    
                <li @click="playSound('dist/audio/bop.mp3')">
                   <a target="_blank" :href='profileData[0].linkedin' title="Spencer's LinkedIn" id="linkedinLink">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-271 283.9 256 235.1" xml:space="preserve">
                         <g>
                            <rect x="-264.4" y="359.3" width="49.9" height="159.7"/>
                            <path d="M-240.5,283.9c-18.4,0-30.5,11.9-30.5,27.7c0,15.5,11.7,27.7,29.8,27.7h0.4c18.8,0,30.5-12.3,30.4-27.7 C-210.8,295.8-222.1,283.9-240.5,283.9z"/>
                            <path d="M-78.2,357.8c-28.6,0-46.5,15.6-49.8,26.6v-25.1h-56.1c0.7,13.3,0,159.7,0,159.7h56.1v-86.3c0-4.9-0.2-9.7,1.2-13.1 c3.8-9.6,12.1-19.6,27-19.6c19.5,0,28.3,14.8,28.3,36.4V519h56.6v-88.8C-14.9,380.8-42.7,357.8-78.2,357.8z"/>
                         </g>
                      </svg>
                   </a>
                </li>






             </ul>
             `
}