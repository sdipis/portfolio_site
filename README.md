# new-portfolio

Using VUE JS for a front end, and PHP to power the CMS in the backend.

## Media Grid
- Use the media grid found on the homepage to create some unique layouts of the works you want to present. 

Using the CMS, you can change the size of the tile displayed for each project from:
- small (span 1)
- mid (span 2)
- wide (span 3)
- large (span 4)

(all sizes set to span 4 columns when user is on mobile)

## Contact Form
- The contact form is set up to email the information to spencer@dipidomain.com
- I imported the email to my mail app on phone + macbook so I get live updates as people use it.
- originally used a database to store messages which I am going to add back.

## CMS

Use the CMS found in backend to organize, edit, and add media to the grid.

Project List (media grid management) https://dipidomain.com/admin/project_list.php

(Make sure to upload your desired image before adding the project. It will auto fill the path of the latest img upload on the project add form. I need to fix this so it's all done in one go.)

User Profile https://dipidomain.com/admin/profile.php

This information is displayed on homepage, and in footer. It features:
- login info
- user's first and last name
- cell, email, and a short bio
- social media links

## Project.php

This page is for single project view.

Project.php does a few things:
1. renders all of the projects details from projects table
2. renders all the media from the media table
Each media table entry has an option for "content_type"
Media is rendered conditionally depending on the type set. 
This way, it works with videos, images, and even embeds (like PDF)
3. generates a QR code for each page, linking to the page it's on.

## Thumbnails.js
1. This is a vue component that fetches data from a database in the background using PHP
2. it renders each project out, filling the gallery grid with media boxes
3. it checks content type, and can render videos, or images.

## todo

- make a function to click forwards and backwards while in the lightbox to navigate through each item in gallery.

- the transfer bewteeen html to php (click on i when viewing an item in the lightbox) is kind of ghetto. To give the illusion of a one page website, opening the link from the lightbox uses target="_blank" to open the link in a new tab. Using the <- back button on the details page runs a small script that uses javascript the close the tab (returning user to exactly where they were on index page before clicking) I'd like to change this by loading all of that extra information right in the lightbox on the main page, instead of it just being a full screen view of the item clicked on. 
