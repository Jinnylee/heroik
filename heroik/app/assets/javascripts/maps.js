// $(document).ready(function(){

var marker = [];
var getMarkers = function () {
  $.ajax({
    url: "/api/maps.json",
    method: "GET",
    success: function (response, status) {
      response.forEach(function (elem, index){
        var marker[index] = new google.maps.Marker({
          position: {lat: elem.latitude, lng: elem.longitude},
          icon: elem.category,
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

getMarkers();

function initMap() {
  var hongKong = {lat: 22.2783, lng: 114.1747};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: hongKong
  });

  var community = {
    url:'http://discoverycrc.com/wp-content/uploads/2014/09/Community-Icon.png',
    size: new google.maps.Size(50,50),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 0),
    scaledSize: new google.maps.Size(20, 20)
  }
  var animals = {
    url:'https://www.jetblue.com/img/special-needs/main_service_animal_icon.png',
    size: new google.maps.Size(50,50),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 0),
    scaledSize: new google.maps.Size(20, 20)
  }
  var youth = {
    url:'https://metrounitedway.org/servlet/eAndar.WebExtDocument/article/323832353233/373834/July15Newsletter_GraduationIcon.png',
    size: new google.maps.Size(70,70),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 0),
    scaledSize: new google.maps.Size(25, 25)
  }
  var environment = {
    url:'http://vacitup.se/wp-content/uploads/2014/09/wsya2011-icon5-gogreen.png',
    size: new google.maps.Size(70,70),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 0),
    scaledSize: new google.maps.Size(25, 25)
  }
  var goodDeeds = {
    url:'http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/glossy-black-icons-symbols-shapes/018721-glossy-black-icon-symbols-shapes-smiley-face1.png',
    size: new google.maps.Size(70,70),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 0),
    scaledSize: new google.maps.Size(25, 25)
  }

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