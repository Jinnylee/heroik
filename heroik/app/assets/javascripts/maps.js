// $(document).ready(function(){

var marker = [];
var postIcon;
var hongKong = {lat: 22.2783, lng: 114.1747};

var getMarkers = function () {
  $.ajax({
    url: "/api/maps.json",
    method: "GET",
    success: function (response, status) {
      response.forEach(function (elem, index){
        getIcon(elem.category);
        marker[index] = new google.maps.Marker({
          position: {lat: elem.latitude, lng: elem.longitude},
          icon: postIcon,
          map: map,
          title: elem.title,
          postID: elem.id
        });
        marker[index].addListener("click",function(){
          modalForSinglePost(response.title, response.username, response.created_at, response.description);
        });
      });

    },
    error: function(response, status) {
      console.log(response);
      console.log("did not get post data")
    }
  })
};

function getIcon(post){
  if (post = "community") {
    postIcon = {
      url:'http://discoverycrc.com/wp-content/uploads/2014/09/Community-Icon.png',
      size: new google.maps.Size(90,90),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0, 0),
      scaledSize: new google.maps.Size(50, 50)
    }
  }
  else if (post = "animals") {
    postIcon = {
      url:'https://www.jetblue.com/img/special-needs/main_service_animal_icon.png',
      size: new google.maps.Size(90,90),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0, 0),
      scaledSize: new google.maps.Size(50, 50)
    }
  }
  else if (post = "youth") {
    postIcon = {
      url:'https://metrounitedway.org/servlet/eAndar.WebExtDocument/article/323832353233/373834/July15Newsletter_GraduationIcon.png',
      size: new google.maps.Size(90,90),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0, 0),
      scaledSize: new google.maps.Size(10500, 50)
    }
  }
  else if (post = "environment") {
    postIcon = {
      url:'http://vacitup.se/wp-content/50/2014/09/wsya2011-icon5-gogreen.png',
      size: new google.maps.Size(90,90),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0, 0),
      scaledSize: new google.maps.Size(50, 50)
    }
  }
  else if (post = "goodDeeds") {
    postIcon = {
      url:'http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/glossy-black-icons-symbols-shapes/018721-glossy-black-icon-symbols-shapes-smiley-face1.png',
      size: new google.maps.Size(90,90),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0, 0),
      scaledSize: new google.maps.Size(50, 50)
    }
  }
};
function tempMarkers(){
  var marker1 = new google.maps.Marker({
    position: hongKong,
    icon: community,
    map: map,
    title: 'Hello World!',
    postID: 1
  });
  marker1.addListener("click",function(){
    console.log(marker1.postID);
  });
    var marker2 = new google.maps.Marker({
    position: {lat: 22.2852, lng: 114.1514},
    map: map,
    icon: animals,
    title: 'Sheung Wan!'
  });
    var marker3 = new google.maps.Marker({
    position: {lat: 22.2819, lng: 114.1581},
    map: map,
    icon: youth,
    title: 'Central!'
  });
    var marker4 = new google.maps.Marker({
    position: {lat: 22.2788, lng: 114.1646},
    map: map,
    icon: environment,
    title: 'Admiralty!'
  });
};

function initMap() {

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: hongKong
  });

  function addMarkerOnClick(){
    setMarkersArray = []
    google.maps.event.addListener(map, "click", function(event) {
      // place a marker
      placeMarker(event.latLng);
      var postLat = event.latLng.lat();
      var postLong = event.latLng.lng();

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
  // getMarkers();
  // tempMarkers();
  addMarkerOnClick();

  $("#addpostmodal").on("shown.bs.modal", function(e) {
      google.maps.event.trigger(map, "resize");
      map.setCenter(hongKong);
      // map.setZoom(15);
    });
};
