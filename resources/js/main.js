$(document).ready(() => {
    document.getElementById("sliderInfo").innerHTML = "OFF";
})

/**
 * Google Maps init function
 * To add more maps, modify the following "googleMap" function and call it
 */
function initMap() {
    googleMap1();
    googleMap2();
    googleMap3();
}

function googleMap1() {
    let NY = { lat: 40.631096, lng: -73.952426 };
    let map = new google.maps.Map(
        document.getElementById('googleMap1'), { zoom: 16.5, center: NY });
    let marker = new google.maps.Marker({ position: NY, map: map });
}

function googleMap2() {
    let NY = { lat: 40.631096, lng: -73.952426 };
    let map = new google.maps.Map(
        document.getElementById('googleMap2'), { zoom: 16.5, center: NY });
    let marker = new google.maps.Marker({ position: NY, map: map });
}

function googleMap3() {
    let NY = { lat: 40.631096, lng: -73.952426 };
    let map = new google.maps.Map(
        document.getElementById('googleMap3'), { zoom: 16.5, center: NY });
    let marker = new google.maps.Marker({ position: NY, map: map });
}

let sliderBool = 0;
function switchSlider() {
    if (sliderBool === 0) {
        document.getElementById("sliderInfo").innerHTML = "ON";
        sliderBool = 1;
    } else {
        document.getElementById("sliderInfo").innerHTML = "OFF";
        sliderBool = 0;
    }
}