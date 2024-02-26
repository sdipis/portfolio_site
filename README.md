# new-portfolio

Using VUE JS for a front end, and PHP to power the CMS in the backend.

- Use the grid portfolio found on the homepage to create some unique layouts of the works you want to present. Using the CMS, you can change the size of the tile displayed for each project from:
-small (span 1)
-mid (span 2)
-wide (span 3)
-large (span 4)

all sizes set to span 4 columns when user is on mobile

Add projects at ../admin/project_list

Make sure to upload your desired image before adding the project. It will auto fill the path of the latest img upload on the project add form.

## todo

- make a function to click forwards and backwards while in the lightbox to navigate through each item in gallery.

- the transfer bewteeen html to php (click on i when viewing an item in the lightbox) is kind of ghetto. To give the illusion of a one page website, opening the link from the lightbox uses target="_blank" to open the link in a new tab. Using the <- back button on the details page runs a small script that uses javascript the close the tab (returning user to exactly where they were on index page before clicking) I'd like to change this by loading all of that extra information right in the lightbox on the main page, instead of it just being a full screen view of the item clicked on. 