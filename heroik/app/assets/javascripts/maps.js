var marker = [];
var postIcon;
var postLat;
var postLong;
var hongKong = {lat: 22.2783, lng: 114.1747};


function getIcon(post){
  if (post == "Community") {
    postIcon = {
      url:'http://discoverycrc.com/wp-content/uploads/2014/09/Community-Icon.png',
      size: new google.maps.Size(90,90),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0, 0),
      scaledSize: new google.maps.Size(50, 50)
    }
  }
  else if (post == "Animals") {
    postIcon = {
      url:'https://www.jetblue.com/img/special-needs/main_service_animal_icon.png',
      size: new google.maps.Size(90,90),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0, 0),
      scaledSize: new google.maps.Size(50, 50)
    }
  }
  else if (post == "Youth") {
    postIcon = {
      url:'https://metrounitedway.org/servlet/eAndar.WebExtDocument/article/323832353233/373834/July15Newsletter_GraduationIcon.png',
      size: new google.maps.Size(90,90),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0, 0),
      scaledSize: new google.maps.Size(10500, 50)
    }
  }
  else if (post == "Environment") {
    postIcon = {
      url:'http://www.yara.us/images/399-77022IMAGE%20banner%20image%20environment%20CORRECT.png',
      size: new google.maps.Size(90,90),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0, 0),
      scaledSize: new google.maps.Size(50, 50)
    }
  }
  else if (post == "Good deeds") {
    postIcon = {
      url:'http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/glossy-black-icons-symbols-shapes/018721-glossy-black-icon-symbols-shapes-smiley-face1.png',
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
        response.forEach(function (elem, index){
          getIcon(elem.category);
          marker[index] = new google.maps.Marker({
            position: {lat: parseFloat(elem.latitude), lng: parseFloat(elem.longitude)},
            icon: postIcon,
            map: map,
            title: elem.title,
            postID: elem.id
          });
          marker[index].addListener("click",function(){
            modalForSinglePost(response[index].post_votes, response[index].title, response[index].image, response[index].user.username, response[index].location, response[index].description, response[index].created_at, response[index].category, response[index].id);
            $('#showsinglepost').modal('show');
            $('.editPostBtn').hide();
            $('.deletePostBtn').hide();
            $('.heroBtn').removeClass("hide");
            $.auth.validateToken().then(function(user){
              addComment(user);
              addHeroButton();
            }).fail(function(response){
              console.log(response);
            });
              // console.log(elem);
            // if (response.current_user_voted > 0) {
            //   $('.heroBtn').addClass("hide");
            // }
          });
        });

      },
      error: function(response, status) {
        console.log(response);
        console.log("did not get post data")
      }
    })
  };
  getMarkers();


  // function addMarkerOnClick(){
  //   setMarkersArray = []
  //   google.maps.event.addListener(map, "click", function(event) {
  //     // place a marker
  //     placeMarker(event.latLng);
  //     var postLat = event.latLng.lat();
  //     var postLong = event.latLng.lng();

  //     // display the lat/lng in your form's lat/lng fields
  //     // document.getElementById("latFld").value = event.latLng.lat();
  //     // document.getElementById("lngFld").value = event.latLng.lng();
  //   });
  // };
  // function placeMarker(location) {
  //   //remove all markers if there are any
  //   deleteOverlays();

  //   //set hero icon
  //   var hero = {
  //     url:'https://cdn3.iconfinder.com/data/icons/human-behaviour-and-situations-part-1/400/Popular-19-512.png',
  //     size: new google.maps.Size(300,300),
  //     origin: new google.maps.Point(0, 0),
  //     anchor: new google.maps.Point(0, 0),
  //     scaledSize: new google.maps.Size(100, 100)
  //   }
  //   var postMarker = new google.maps.Marker({
  //       position: location,
  //       map: map,
  //       icon: hero
  //   });

  //   // add marker in markers array
  //   setMarkersArray.push(postMarker);

  //   //re-center location to clicked point
  //   // map.setCenter(location);
  // };
  // function deleteOverlays() {
  //   if (setMarkersArray) {
  //     for (i in setMarkersArray) {
  //       setMarkersArray[i].setMap(null);
  //     }
  //   setMarkersArray.length = 0;
  //   }
  // };
  // // getMarkers();
  // // tempMarkers();
  // addMarkerOnClick();

  // $("#addpostmodal").on("shown.bs.modal", function(e) {
  //     google.maps.event.trigger(map, "resize");
  //     map.setCenter(hongKong);
  //     // map.setZoom(15);
  //   });
};

function initAutocomplete() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -33.8688, lng: 151.2195},
    zoom: 13,
    // mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  $("#addpostmodal").on("shown.bs.modal", function(e) {
      google.maps.event.trigger(map, "resize");
      map.setCenter(hongKong);
      // map.setZoom(15);
    });


  // Create the search box and link it to the UI element.
  var input = document.getElementById('district');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });

  var markers = [];
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

      // Create a marker for each place.
      // markers.push(new google.maps.Marker({
      //   map: map,
      //   icon: icon,
      //   title: place.name,
      //   position: place.geometry.location
      // }));

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
  function addMarkerOnClick(){
    setMarkersArray = []
    google.maps.event.addListener(map, "click", function(event) {
      // place a marker
      placeMarker(event.latLng);
      postLat = event.latLng.lat().toString() || "22.2783";
      postLong = event.latLng.lng().toString() || "114.1747";

      // display the lat/lng in your form's lat/lng fields
      // document.getElementById("latFld").value = event.latLng.lat();
      // document.getElementById("lngFld").value = event.latLng.lng();
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
      anchor: new google.maps.Point(0, 0),
      scaledSize: new google.maps.Size(100, 100)
    }
    var postMarker = new google.maps.Marker({
        position: location,
        map: map,
        icon: hero
    });

    // add marker in markers array
    setMarkersArray.push(postMarker);

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
  };
  addMarkerOnClick();
}
