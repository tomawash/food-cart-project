$(document).ready(() => {
    document.getElementById("sliderInfo").innerHTML = "OFF";
})

const foodCarts = [
    {
        id: 1,
        location: {
            latitude: 40.631096,
            longitude: -73.952426
        }
    },
    {
        id: 2,
        location: {
            latitude: 40.631096,
            longitude: -73.952426
        }
    },
    {
        id: 3,
        location: {
            latitude: 40.631096,
            longitude: -73.952426
        }
    }
]

/**
 * Google Maps init function
 * To add more maps, modify the array of food cart objects above and add html
 * With real implementation of back-end the array isn't initialized here
 */
function initMap() {
    for (let i=0; i<foodCarts.length; i++) {
        googleMap(foodCarts[i], foodCarts[i].id);
    }
}

function googleMap(foodCart, index) {
    let NY = { lat: foodCart.location.latitude, lng: foodCart.location.longitude };
    let id = "googleMap" + index;
    let map = new google.maps.Map(
        document.getElementById(id), { zoom: 16.5, center: NY });
    let marker = new google.maps.Marker({ position: NY, map: map });
}

let sliderBool = 0;
/**
 * Function for displaying "on" or "off" for the foodcart on/off toggle
 */
function switchSlider() {
    if (sliderBool === 0) {
        document.getElementById("sliderInfo").innerHTML = "ON";
        sliderBool = 1;
    } else {
        document.getElementById("sliderInfo").innerHTML = "OFF";
        sliderBool = 0;
    }
}

function onSearch() {
    let searchResults = document.getElementById("search").value;
    document.getElementById("searchResults").style.color = "green";
    document.getElementById("searchResults").innerHTML = "Searched for: " + searchResults;
}