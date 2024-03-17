# new-portfolio

Using VUE JS for a front end, and PHP to power the CMS in the backend. Animations are all done using JS and vue-transitions. No libraries are used.

Everything takes place on a single page. The actual pages are just divs that get loaded into the header.

The only seperate page used is the project.php page, for getting details about a specific project.

Example: https://dipidomain.com/project.php?id=40 (KAVORKA)

## Header
The header is where the "pages" load. Focusing on user experience, there are some small details that make it work. 

- Click on a link will automatically turn off auto scroll (if it's on) and set users window so it's on screen, and ready to view.
- White text on top of an animated gradient background isn't exactly prime readability. When user opens the contact page, or the about me page, the background animation pauses. It resumes when user closes the page.
- Page titles are ugly, so I put mine in the top left corner. It's dynamic, and there's always something there, to add a sense of consistency.

## Interactivity

### Auto-Scroll
- If user loads in from a desktop, the auto-scroll is enabled.
- click the play button in topbar to automatically scroll down the page to browse the media grid
- auto scroll pauses when user opens lightbox, and continues when user closes lightbox (only if it's enabled to begin with)
- auto scroll automatically turns off if user opens contact page, about me, or the video found in topbar
- auto scroll turns off when page gets to bottom
- user can reenable in any of these scenarios

### Audio 
- I added sounds for most site functions.
- Audio is muted by default if user is on mobile, as it's laggy on mobile. they can turn it on if they want, using the speaker icon at top of page.


### Media Grid
- Use the media grid found on the homepage to create some unique layouts of the works you want to present. 

Using the CMS, you can change the size of the tile displayed for each project from:
- small (span 1)
- mid (span 2)
- wide (span 3)
- large (span 4)

(all sizes set to span 4 columns when user is on mobile)

### Lightbox

Click on an item in the media grid to open it in the lightbox

Lightbox features:
- information button (loads project.php)
- previous slide (loads previous grid item)
- next slide (loads next grid item)
- close lightbox with the X found in lightbox menu (below image)
- or close lightbox by clicking right on the image for painless operation

## Contact Form
- The contact form is set up to email the information to spencer@dipidomain.com
- I imported the email to my mail app on phone + macbook so I get live updates as people use it.
- originally used a database to store messages which I am going to add back.
- there is no confirm screen. I should add one.

## CMS

Use the CMS found in backend to organize, edit, and add media to the grid.

Project List (media grid management) https://dipidomain.com/admin/project_list.php

- features a project search function to find project entries quickly
- upload your media with the forms on side
- create, edit, and delete projects
- when creating a new project, the thumbnail image gets added to media table automatically so it is included in images array when a user lands on project.php
- there's a small JS script that prompts user with "Are you sure you want to delete this project?" when you try to delete a project

### Media Uploading

You can upload media by using the small form above the project form. 

- last image uploaded gets put into the project's thumbnail field below so it gets used when you add project
- you must upload the image before clicking add project, it's a two step process currently
- the last uploaded file's path gets pushed to value of project thumbnail for adding project
- there's a small form right below upload form, and you can upload the media straight to media table with that also

### User Profile

User Profile https://dipidomain.com/admin/profile.php

Features:
- login info (username and password)
- profile picture
- first and last name
- cell, email, and a short bio
- Social links (instagram, linkedin, artstation, github, and codepen)

This information is fed to various parts of the site. So changing information can be done from any web browser, without opening your code.

### Projects

The projects are based in a SQL DB

Each project features some extra datapoints to curate your ideal media grid.

#### media type
The plan is to write the script so it just checks the actual file extension when a user uploads media, and uses that to conditionally render it. 

As it sits currently, there's a column for "content type" found in projects table. Set this to img, video, or embed to let the scripts know how to render the html elements.

#### tile size

The "type" column has an option for tile size. You can set tiles to be anywhere from 1-4 columns wide. This makes for a highly customizable media flow in the grid.

#### extra media

(Depreciated)

This was the alpha "content type" I need to remove it.

#### ID forwarding

I wanted to be able to show off multiple images from the same project on my media grid. So I added 2 extra columns to the projects table. 

- "Forward" = true/ false
- "Forward_ID" = int

If you set "Forward" to true, the media grid will change the "more information" link found in lightbox, so when you click on that project, it will load ./project.php?id=forward_id

So you can have multiple tiles on the media grid that all go to the same main project.

## Media List

Find all of the media entries at https://dipidomain.com/admin/media_list.php

- Filter entries by parent ID
- Add entries
- Edit entries

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

# Problem solving

## Scrolling

### Initial implementation

I really liked the way my media grid looked and I had thrown in as much as I could to create a compelling viewing experience. Then I thought it'd be cool to have an auto scrolling feature, so you can just click play and take everything in.

It wasn't easy to get it working initially. There were many hours spent between chatGPT, google searches, and trying to *massage* the code into my current vue app. I eventually got it working, and had a pretty good understanding of how it works by then.

### Problem - page links
Because my site is a single page app, the pages are loaded in the header at top. If a user clicked on a link, while the autoscrolling was happening, they had to climb back to top the read what was on the page.

#### Fix
I made it so the page automatically scrolls to top, and pauses the autoscroll if a user clicks on any of the links in the menu. 

### Problem - no controls

Once the auto scrolling feature was implemented, it just automatically started as you loaded the page. The user could still scroll manually, but they were constantly fighting the slow scroll to the bottom.

#### Fix A

I added a window check so when the user scrolled to the bottom of the page, the auto scroll turned off. And it was manual scrolling from there. The window check wasn't working, and I quickly got it working by changing the window being 0px from bottom, to 3px from bottom.

#### Fix B

Added a toggle switch in the menu. So the user can turn it on, or off. It is set to off by default. This switch controlled a flag called scrollingPaused, and when true, page scrolled. When false, page didn't scroll.

### Problem: Doesn't pause

The next problem was that if the user saw something they found interesting while on their scrolling journey, they would (assumedly) click on it, opening the lighbox. The lightbox covers the entire screen. But the scrolling continued behind the scenes, so when they closed the lightbox, they had missed a bunch of the media grid offerings.

#### Fix

Added a method into the lightbox function, so when user opens lightbox: a flag called scrollingPaused gets set to true. This obviously pauses the scrolling.

Then I added a method so when the user closes the lightbox, the scrolling continued.

### Problem B
If a user was manually scrolling (with autoscroll turned off) and they opened, then closed the lightbox, scrolling would start.

#### Fix
I added a second flag called autoScrollEnabled. This was toggled by a button in the menu. So opening and closing the lightbox would only toggle scrollingPaused if this property was set to true.

### Problem - responsive
Auto scrolling is glitchy on mobile. I didn't like it.

#### Fix
Added a screen width check on created() so when a user loads in, if their screen is 768px or less, the auto scrolling functionality is set to off, and the toggle switch is hidden.
