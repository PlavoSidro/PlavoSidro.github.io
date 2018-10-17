/**
 * Created by beks on 23.01.16.
 */

function initMap() {

    var vir = {lat: 44.292776,lng: 15.121744};
    var map = new google.maps.Map(document.getElementById("map"), {
        center: vir,
        zoom: 15
    });

    var infowindow = new google.maps.InfoWindow;
    infowindow.setContent('Apartmani Plavo Sidro');

    var marker = new google.maps.Marker({map: map, position: vir});

    marker.addListener('mouseover', function() {
       infowindow.open(map, this);
    });

    marker.addListener('mouseout', function() {
        infowindow.close();
    });
}