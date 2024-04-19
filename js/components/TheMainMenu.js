export default {
    name: "TheMainMenuComp",
    props: ["musicPlaying", "crackSeal", "scrollingPaused"],
template:`
<section v-if="crackSeal" id="menuTopBar" class="topBar">
      
<div class="blurbTitle noMobile" id="dynamicTitle">
   <h2>Welcome, kemosabe</h2>
</div>

<div class="blurb">
   
   <nav>
      <ul class="menus disableSelect">
         <li v-if="crackSeal" class="noMobile" id="playMusicButton">
            <a v-if="!musicPlaying" @click="toggleMusic" title="Unmute Audio">
               <svg height="40px" version="1.1" id="Uploaded to svgrepo.com" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                     <path class="puchipuchi_een" d="M16,6v20c0,1.1-0.772,1.537-1.715,0.971l-6.57-3.942C6.772,22.463,5.1,22,4,22H3c-1.1,0-2-0.9-2-2 v-8c0-1.1,0.9-2,2-2h1c1.1,0,2.772-0.463,3.715-1.029l6.57-3.942C15.228,4.463,16,4.9,16,6z M26.606,5.394 c-0.781-0.781-2.047-0.781-2.828,0s-0.781,2.047,0,2.828C25.855,10.3,27,13.062,27,16s-1.145,5.7-3.222,7.778 c-0.781,0.781-0.781,2.047,0,2.828c0.391,0.391,0.902,0.586,1.414,0.586s1.023-0.195,1.414-0.586C29.439,23.773,31,20.007,31,16 S29.439,8.227,26.606,5.394z M22.363,9.636c-0.781-0.781-2.047-0.781-2.828,0s-0.781,2.047,0,2.828C20.479,13.409,21,14.664,21,16 s-0.52,2.591-1.464,3.535c-0.781,0.781-0.781,2.047,0,2.828c0.391,0.391,0.902,0.586,1.414,0.586s1.023-0.195,1.414-0.586 C24.064,20.664,25,18.404,25,16S24.063,11.336,22.363,9.636z"></path>
                  </g>
               </svg>
            </a>
            <a v-if="musicPlaying" @click="toggleMusic" title="Mute Audio">
               <svg height="40px" version="1.1" id="Uploaded to svgrepo.com" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                     <path class="puchipuchi_een" d="M16,6v20c0,1.1-0.772,1.537-1.715,0.971l-6.57-3.942C6.772,22.463,5.1,22,4,22H3c-1.1,0-2-0.9-2-2 v-8c0-1.1,0.9-2,2-2h1c1.1,0,2.772-0.463,3.715-1.029l6.57-3.942C15.228,4.463,16,4.9,16,6z M26.828,16l2.586-2.586 c0.781-0.781,0.781-2.047,0-2.828s-2.047-0.781-2.828,0L24,13.172l-2.586-2.586c-0.781-0.781-2.047-0.781-2.828,0 s-0.781,2.047,0,2.828L21.172,16l-2.586,2.586c-0.781,0.781-0.781,2.047,0,2.828C18.977,21.805,19.488,22,20,22 s1.023-0.195,1.414-0.586L24,18.828l2.586,2.586C26.977,21.805,27.488,22,28,22s1.023-0.195,1.414-0.586 c0.781-0.781,0.781-2.047,0-2.828L26.828,16z"></path>
                  </g>
               </svg>
            </a>
         </li>

         <li v-if="crackSeal"  id="playMusicButton" @click="playSound('dist/audio/click.mp3')">
            <a class="noMobile" v-if="!scrollingPaused" @click="pauseAutoScroll" title="Pause Auto-Scroll">
               <svg height="40px" width="40px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                     <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM14 8C14.5523 8 15 8.44772 15 9L15 15C15 15.5523 14.5523 16 14 16C13.4477 16 13 15.5523 13 15L13 9C13 8.44772 13.4477 8 14 8ZM10 8C10.5523 8 11 8.44772 11 9L11 15C11 15.5523 10.5523 16 10 16C9.44771 16 9 15.5523 9 15L9 9C9 8.44772 9.44772 8 10 8Z"></path>
                  </g>
               </svg>
            </a>
            <a class="noMobile" v-if="scrollingPaused" @click="resumeScroll" title="Start Auto-Scroll">
               <svg height="40px" width="40px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                     <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM15.5963 10.3318C16.8872 11.0694 16.8872 12.9307 15.5963 13.6683L11.154 16.2068C9.9715 16.8825 8.5002 16.0287 8.5002 14.6667L8.5002 9.33339C8.5002 7.97146 9.9715 7.11762 11.154 7.79333L15.5963 10.3318Z" fill=""></path>
                  </g>
               </svg>
            </a>
         </li>
         <li>
            <a v-on:click="openVideoComponent" title="Play Video" id="videoToggle">
               <svg v-if="!videoShow" class="spinning help" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  width="800px" height="800px" viewBox="0 0 552.855 552.855" xml:space="preserve">
                  <g>
                     <g>
                        <path d="M511.9,157.425c-3.408-25.845-17.057-53.513-40-76.463c-22.943-22.944-50.605-36.585-76.445-39.994 c-11.695-1.542-27.307-8.005-36.664-15.184C338.1,9.915,308.889,0,276.434,0s-61.665,9.915-82.351,25.784 c-9.357,7.179-24.97,13.642-36.665,15.184c-25.845,3.409-53.501,17.05-76.445,39.994c-22.944,22.95-36.592,50.619-40,76.463 c-1.536,11.695-8.005,27.295-15.178,36.653c-15.875,20.686-25.79,49.896-25.79,82.35c0,32.455,9.915,61.666,25.784,82.352 c7.179,9.357,13.642,24.963,15.178,36.652c3.409,25.844,17.056,53.514,40,76.463c22.944,22.943,50.606,36.586,76.445,39.994 c11.695,1.543,27.308,8.006,36.665,15.184c20.686,15.869,49.896,25.783,82.351,25.783c32.455,0,61.666-9.914,82.352-25.783 c9.357-7.178,24.969-13.641,36.664-15.184c25.846-3.408,53.502-17.051,76.445-39.994c22.943-22.949,36.592-50.619,40-76.463 c1.537-11.695,8.006-27.295,15.178-36.652c15.869-20.686,25.783-49.896,25.783-82.352c0-32.454-9.914-61.665-25.783-82.35 C519.9,184.72,513.438,169.12,511.9,157.425z M309.525,433.191c0,6.764-5.484,12.24-12.24,12.24h-39.652 c-6.756,0-12.24-5.477-12.24-12.24v-39.65c0-6.764,5.483-12.24,12.24-12.24h39.652c6.756,0,12.24,5.477,12.24,12.24V433.191z  M384.502,243.674c-7.994,12.632-25.068,29.823-51.238,51.58c-13.543,11.26-21.951,20.312-25.221,27.16 c-2.447,5.135-3.904,13.305-4.344,24.51c-0.264,6.758-5.588,12.234-12.352,12.234h-33.72c-6.757,0-12.301-3.428-12.369-7.65 c-0.061-3.916-0.098-6.463-0.098-7.643c0-18.869,3.122-34.389,9.357-46.562c6.243-12.172,18.715-25.862,37.429-41.083 c18.717-15.214,29.896-25.184,33.545-29.896c5.631-7.454,8.445-15.673,8.445-24.651c0-12.479-4.975-23.164-14.945-32.069 c-9.969-8.904-23.391-13.354-40.281-13.354c-11.604,0-21.842,2.356-30.741,7.068c-5.973,3.164-14.406,10.355-18.476,15.753 c-4.541,6.022-8.219,13.268-11.034,21.738c-2.136,6.414-8.636,11.138-15.349,10.306l-34.584-4.29 c-6.714-0.833-11.897-6.995-10.698-13.648c3.978-22.032,15.098-41.114,33.354-57.24c21.53-19.021,49.792-28.531,84.786-28.531 c36.824,0,66.107,9.626,87.865,28.874c21.756,19.248,32.639,41.653,32.639,67.216 C396.484,217.658,392.488,231.048,384.502,243.674z"/>
                     </g>
                  </g>
               </svg>
               <svg v-else class="closeSVG" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                     <g clip-path="url(#clip0_429_11083)">
                        <path d="M7 7.00006L17 17.0001M7 17.0001L17 7.00006" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                     </g>
                     <defs>
                        <clipPath id="clip0_429_11083">
                           <rect width="24" height="24"></rect>
                        </clipPath>
                     </defs>
                  </g>
               </svg>

            </a>
         </li>

         <li>
            <a v-on:click="openFormComponent" title="Open Contact Form" id="formToggle">
               <svg @click="playSound('dist/audio/bop.mp3')" v-if="!formShow" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"  xml:space="preserve">
                  <g>
                     <path class="st0" d="M18.71,245.495c-0.081,1.455-0.208,2.91-0.208,4.374v183.444c0,13.31,3.335,25.825,9.163,36.813l137.513-139.7 L18.71,245.495z"/>
                     <path class="st0" d="M493.291,245.495l-146.468,84.931l137.513,139.7c5.828-10.988,9.162-23.504,9.162-36.813V249.869 C493.498,248.405,493.372,246.95,493.291,245.495z"/>
                     <path class="st0" d="M256,383.089l-66.01-38.277L44.996,492.084C58.894,504.436,77.137,512,97.189,512h317.622 c20.052,0,38.296-7.564,52.193-19.916L322.01,344.812L256,383.089z"/>
                     <path class="st0" d="M256,350.993l144.968-84.055v-86.503H111.042v86.503L256,350.993z M173.879,212.829h163.464v21.588H173.879 V212.829z M173.879,259.094h81.732v21.587h-81.732V259.094z"/>
                     <path class="st0" d="M83.282,152.676h345.445v98.168l57.669-33.442c-3.47-7.645-8.087-14.784-13.897-21.045L313.687,25.166 C298.796,9.117,277.895,0,256,0c-21.894,0-42.795,9.117-57.686,25.166L39.502,196.356c-5.811,6.262-10.428,13.4-13.898,21.045 l57.678,33.442V152.676z"/>
                  </g>
               </svg>

               <svg @click="playSound('dist/audio/pop.mp3')" v-else class="closeSVG" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                     <g clip-path="url(#clip0_429_11083)">
                        <path d="M7 7.00006L17 17.0001M7 17.0001L17 7.00006" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                     </g>
                     <defs>
                        <clipPath id="clip0_429_11083">
                           <rect width="24" height="24"></rect>
                        </clipPath>
                     </defs>
                  </g>
               </svg>
            </a>
         </li>

         <li>
            <a v-on:click="openAboutMe" title="Learn About Spencer" id="aboutToggle">
               <svg @click="playSound('dist/audio/bop.mp3')" v-if="!aboutShow" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><g> <path class="st0" d="M332.933,213.451c-20.713,17.784-47.559,28.624-76.938,28.624c-29.37,0-56.224-10.84-76.928-28.624 c-54.991,20.952-92.686,66.126-92.686,132.094v98.082c0,0,14.505,19.331,45.864,37.437v-69.339h28.992v83.228 c24.848,9.78,56.243,17.047,94.758,17.047c38.524,0,69.901-7.266,94.767-17.047v-83.228h28.992v69.339 c31.359-18.106,45.864-37.437,45.864-37.437v-98.082C425.618,279.577,387.923,234.403,332.933,213.451z"></path> <path class="st0" d="M255.996,213.902c49.299,0,89.26-39.96,89.26-89.259V89.269C345.255,39.96,305.294,0,255.996,0 c-49.3,0-89.268,39.96-89.268,89.269v35.374C166.727,173.942,206.696,213.902,255.996,213.902z"></path> </g> </g></svg>
            
               <svg @click="playSound('dist/audio/pop.mp3')" v-else class="closeSVG" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                     <g clip-path="url(#clip0_429_11083)">
                        <path d="M7 7.00006L17 17.0001M7 17.0001L17 7.00006" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                     </g>
                     <defs>
                        <clipPath id="clip0_429_11083">
                           <rect width="24" height="24"></rect>
                        </clipPath>
                     </defs>
                  </g>
               </svg>
            </a>
         </li>
      </ul>
   </nav>
</div>
</section>
`,
}