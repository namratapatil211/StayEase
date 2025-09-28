
      //let mapToken = "<%= process.env.MAP_TOKEN %>";
      function initMap() {
        let location = {lat: 28.6139,lng: 77.209};
        var map = new google.maps.Map(document.getElementById("map"),{
          zoom: 4,
          center:location
        });
        let marker = new google.maps.Marker({
          position:location,
          map: map
        });
      }
   
<script async defer src="https://maps.googleapis.com/maps/api/js?key=<%= process.env.MAP_TOKEN %>&callback=initMap"></script>

    