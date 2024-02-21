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