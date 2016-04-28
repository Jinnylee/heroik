var marker = [];
var postIcon;
var postLat;
var postLong;
var hongKong = {lat: 22.2783, lng: 114.1747};


function getIcon(post){
  if (post == "Community") {
    postIcon = {
      url:'http://i63.tinypic.com/2u3w8wg.png',
      size: new google.maps.Size(90,90),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0, 0),
      scaledSize: new google.maps.Size(50, 50)
    }
  }
  else if (post == "Animals") {
    postIcon = {
      url:'http://i63.tinypic.com/2qis2ko.png',
      size: new google.maps.Size(90,90),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0, 0),
      scaledSize: new google.maps.Size(50, 50)
    }
  }
  else if (post == "Youth") {
    postIcon = {
      url:'http://i66.tinypic.com/16beu88.png',
      size: new google.maps.Size(90,90),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0, 0),
      scaledSize: new google.maps.Size(10500, 50)
    }
  }
  else if (post == "Environment") {
    postIcon = {
      url:'http://i64.tinypic.com/34yz3uc.png',
      size: new google.maps.Size(90,90),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0, 0),
      scaledSize: new google.maps.Size(50, 50)
    }
  }
  else if (post == "Good deeds") {
    postIcon = {
      url:'http://i67.tinypic.com/2exnc79.png',
      size: new google.maps.Size(90,90),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0, 0),
      scaledSize: new google.maps.Size(50, 50)
    }
  }
};

function initMap() {

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: hongKong
  });

  var getMarkers = function () {
    $.ajax({
      url: "/api/maps.json",
      method: "GET",
      success: function (response, status) {
        response.posts.forEach(function (elem, index){
          getIcon(elem.category);
          marker[index] = new google.maps.Marker({
            position: {lat: parseFloat(elem.latitude), lng: parseFloat(elem.longitude)},
            icon: postIcon,
            map: map,
            title: elem.title,
            postID: elem.id
          });
          marker[index].addListener("click",function(){
            modalForSinglePost(response.posts[index].post_votes,moment(response.created_at).format('MM/DD/YYYY'), response.posts[index].category, response.posts[index].title, response.posts[index].postpic, response.posts[index].location, response.posts[index].description, response.posts[index].pp, response.posts[index].username, response.posts[index].id);
            $('#showsinglepost').modal('show');
            $('.heroBtn').show();
            $('.thank-you-btn').hide();
            $('.editPostBtn').hide();
            $('.deletePostBtn').hide();

            if (response.current_user_voted > 0) {
              $('.heroBtn').hide();
              $('.thank-you-btn').show();
            }
            showAllComments();

          $.auth.validateToken().then(function(user){
            addComment(user);
            addHeroButton();
          }).fail(function(response){
            $('#comment-form-message').text("Please sign in to comment!");
          });
          });
        });
      },
      error: function(response, status) {
        console.log("did not get post data")
      }
    })
  };
  getMarkers();
};

function initAutocomplete() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: hongKong,
    zoom: 13,
  });
    var map2 = new google.maps.Map(document.getElementById('map2'), {
    center: hongKong,
    zoom: 13,
  });


  $("#addpostmodal").on("shown.bs.modal", function(e) {
      google.maps.event.trigger(map, "resize");
      map.setCenter(hongKong);
      // map.setZoom(15);
    });
  $("#editpostmodal").on("shown.bs.modal", function(e) {
      google.maps.event.trigger(map2, "resize");
      map.setCenter(hongKong);
      // map.setZoom(15);
    });


  // Create the search box and link it to the UI element.
  var input = document.getElementById('district');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  var input2 = document.getElementById('district2');
  var searchBox2 = new google.maps.places.SearchBox(input2);
  map2.controls[google.maps.ControlPosition.TOP_LEFT].push(input2);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });
  map2.addListener('bounds_changed', function() {
    searchBox2.setBounds(map2.getBounds());
  });

  var markers = [];
  var markers2 = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
  searchBox2.addListener('places_changed', function() {
    var places2 = searchBox2.getPlaces();

    if (places2.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers2.forEach(function(marker) {
      marker.setMap(null);
    });
    markers2 = [];

    // For each place, get the icon, name and location.
    var bounds2 = new google.maps.LatLngBounds();
    places2.forEach(function(place) {
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds2.union(place.geometry.viewport);
      } else {
        bounds2.extend(place.geometry.location);
      }
    });
    map2.fitBounds(bounds2);
  });
  function addMarkerOnClick(){
    setMarkersArray = []
    setMarkersArray2 = []
    google.maps.event.addListener(map, "click", function(event) {
      // place a marker
      placeMarker(event.latLng);
      postLat = event.latLng.lat().toString() || "22.2783";
      postLong = event.latLng.lng().toString() || "114.1747";

    });
    google.maps.event.addListener(map2, "click", function(event) {
      placeMarker(event.latLng);
      postLat = event.latLng.lat().toString() || "22.2783";
      postLong = event.latLng.lng().toString() || "114.1747";
    });
  };
  function placeMarker(location) {
    //remove all markers if there are any
    deleteOverlays();

    //set hero icon
    var hero = {
      url:'https://cdn3.iconfinder.com/data/icons/human-behaviour-and-situations-part-1/400/Popular-19-512.png',
      size: new google.maps.Size(300,300),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(50, 50),
      scaledSize: new google.maps.Size(100, 100)
    }
    var postMarker = new google.maps.Marker({
        position: location,
        map: map,
        icon: hero
    });
    var postMarker2 = new google.maps.Marker({
        position: location,
        map: map2,
        icon: hero
    });

    // add marker in markers array
    setMarkersArray.push(postMarker);
    setMarkersArray2.push(postMarker2);

    //re-center location to clicked point
    // map.setCenter(location);
  };
  function deleteOverlays() {
    if (setMarkersArray) {
      for (i in setMarkersArray) {
        setMarkersArray[i].setMap(null);
      }
    setMarkersArray.length = 0;
    }
    if (setMarkersArray2) {
      for (i in setMarkersArray2) {
        setMarkersArray2[i].setMap(null);
      }
    setMarkersArray2.length = 0;
    }
  };
  addMarkerOnClick();
}
