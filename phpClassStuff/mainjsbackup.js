from .link in lightbox (for edit button to edit project)

<a :href='"admin/edit_project_form.php?id="+piece.id'><button @click="goForward" class="btn-shine">Edit</button></a>


from lightbox, insert this div above closeLightBox Img

<div class="lb-text bevel diag">
<h2 class="lb-title">{{ piece.title }}</h2>
<hr>
<h3 v-show="!textShow" class="lb-subtitle">{{ piece.description }}</h3>
<br>
<h3 v-show="!textShow" class="lb-subtitle">{{ piece.moreinfo }}</h3>

</div>

<a @click="closeLightBox" :href='"project.php?id="+piece.id' target="_blank"><svg class="infoButton" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><g> <path class="st0" d="M255.992,0.008C114.626,0.008,0,114.626,0,256s114.626,255.992,255.992,255.992 C397.391,511.992,512,397.375,512,256S397.391,0.008,255.992,0.008z M300.942,373.528c-10.355,11.492-16.29,18.322-27.467,29.007 c-16.918,16.177-36.128,20.484-51.063,4.516c-21.467-22.959,1.048-92.804,1.597-95.449c4.032-18.564,12.08-55.667,12.08-55.667 s-17.387,10.644-27.709,14.419c-7.613,2.782-16.225-0.871-18.354-8.234c-1.984-6.822-0.404-11.161,3.774-15.822 c10.354-11.484,16.289-18.314,27.467-28.999c16.934-16.185,36.128-20.483,51.063-4.524c21.467,22.959,5.628,60.732,0.064,87.497 c-0.548,2.653-13.742,63.627-13.742,63.627s17.387-10.645,27.709-14.427c7.628-2.774,16.241,0.887,18.37,8.242 C306.716,364.537,305.12,368.875,300.942,373.528z M273.169,176.123c-23.886,2.096-44.934-15.564-47.031-39.467 c-2.08-23.878,15.58-44.934,39.467-47.014c23.87-2.097,44.934,15.58,47.015,39.458 C314.716,152.979,297.039,174.043,273.169,176.123z"></path> </g> </g></svg></a>
<img @click="closeLightBox" class="backButton" src="svg/goback.svg" />



<?php 
    if (!empty($images) && $images[0] !== '') {
        for ($i = 0; $i < count($images); $i++) {
            if ($images[$i] !== '') {
                echo '<img class="portfolio-" src="dist/'.$images[$i].'" alt="Project Image">';
            }
        }
    }
    ?>