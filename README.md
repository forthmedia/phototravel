phototravel
==========

Access JSON Web service API

HTML, CSS, JavaScript, jQuery, AJAX, Bootstrap

This example gets 5 recent photos from Flicker and populates an interactive slide show. It accesses the Flickr JSON Response Format, using the jQuery AJAX API.

This example shows how to configure the Flickr API, which in this case requires an API Key, a Method, and Group ID. The JavaScript constructs a URL encoded parameter request. It also demonstrates how to assemble response data from Flickr to construct a valid IMG SRC URL. Please note that you will need your own Flickr API Key to run this example.

There is a Bootstrap JavaScript carousel component for the slide show, populated by jQuery selector API, using info from Flick for the photos and captions.

See a live version at:
http://www.forth-media.com/phototravel/

See a PHP implementation of the Flickr REST/XML API at:
https://github.com/forthmedia/photocars