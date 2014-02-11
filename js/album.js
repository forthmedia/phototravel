// Album JavaScript class

/** This JavaScript object manages the Flickr API
 *
 *  The constructor function requires a Flickr Group Id
 *
 *      var album = new Album(id);
 *
 *  The setId method also accepts a Group id and automatically
 *  generates a new Flickr URL.
 *
 *      album.setId(id);
 *
 *  The getPhotos method manages an AJAX call to the Flickr
 *  JSON API. This call is asynchronous, and the getPhotos
 *  function requires a reference to a callback function. The
 *  callback recieves an array of photo URLS and captions:
 *
 *      album.getPhotos( function(photos, captions) {
 *          // process photo URLs and captions
 *      });  
 */

// Constructor
function Album(id) {

    // Private variables
 	var that = this;
    var url;
    var api_key = "[ Your Flickr API Key ]";
    var method = "flickr.groups.pools.getPhotos";
    var group_id = id;
    var photos = [];
    var captions = [];

    // Private functions
    function buildUrl() {
    	// Closure
    	url = "http://api.flickr.com/services/rest/?&api_key=" + api_key
      		+ "&method=" + method
      		+ "&group_id=" + group_id
      		+ "&per_page=5&format=json&nojsoncallback=1";
    }
    buildUrl();

    function queryWebService(callback) {

     	var xhr = that.ajaxRequest();
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4 && xhr.status == 200 ) {
    			var json = eval('(' + xhr.responseText + ')');
    			if (json.stat == "ok") {
    				console.log("Flickr API ok");

 					// Unpack json data from Flickr to assmble valid IMG SRC URL
    				for (var item in json.photos.photo) {
						var src = "http://farm" + json.photos.photo[item].farm
						+ ".staticflickr.com/" + json.photos.photo[item].server
						+ "/" + json.photos.photo[item].id + "_" 
						+ json.photos.photo[item].secret + "_b.jpg";
						photos.push(src);

                        var txt = json.photos.photo[item].title;
                        captions.push(txt);
    				}
    			} else {
    				photos.length = 0;
                    captions.length = 0;
    				console.log("Flickr API fail");
    			}

    			// Asynchronous
    			return callback( photos, captions );
    		}
    	}
    	xhr.open("GET", url, true);
    	xhr.send(null);    	
    }

    // Privileged methods
    this.getId = function() { return group_id; }
    this.setId = function(id) { group_id = id; buildUrl(); }

    this.getPhotos = function(callback) {
    	photos.length=0;
        captions.length=0;
    	queryWebService(callback);
    }

    // Public properties
    this.version = 1.0;
}

// public methods
Album.prototype.ajaxRequest = function() {

    if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    } else {
        return new ActiveXObject("Microsoft.XMLHTTP");
    }
}