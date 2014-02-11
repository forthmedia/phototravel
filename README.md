phototravel
==========

OO JavaScript Async Web Service Class

HTML5, CSS3, Object-Oriented JavaScript, jQuery, AJAX, Bootstrap & RWD

ALBUM.JS

At the core of this project is a JavaScript Object that manages asynchronous data acquisition from a web service, in a way that approximates an OOP pattern of private, privileged, and public properties and methods in JavaScript. See the file 'album.js' in the 'js' folder.

MEDIA QUERIES

This page will dynamically adapt to smartphones, pads, and desktop using CSS3 media queries. On small screen mobile devices the floating menu collapses and attaches to the top of the screen.

There is a Bootstrap JavaScript carousel component for the slide show, populated by jQuery selector API, using info from Flick for the photos and captions. Please note that you will need your own Flickr API Key to run this example.

GOTHCHA - ASYNCHRONOUS CALLBACK

The convenience of a JavaScript helper class is complicated by asynchronous communication with a web service, "in the background." To solve this, the Object API requires a callback function, which returns to the caller when the response is available.

See a live version at:
http://www.forth-media.com/phototravel/

See a project with cool cars and a PHP full stack implementation at:
https://github.com/forthmedia/photocars