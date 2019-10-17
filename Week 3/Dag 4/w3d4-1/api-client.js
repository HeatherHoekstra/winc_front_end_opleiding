const API_KEY = AIzaSyAiWhwHpzGs75Jehfvw2mvPlxGKAD6KGy0;

let map;
const winc = { lat: 52.37836, lng: 4.85471 };
const Mijnsherenland = { lat: 51.79901, lng: 4.4863 };
const Amstelveen = { lat: 52.30569, lng: 4.86251 };
const Amsterdam = { lat: 52.370216, lng: 4.895168 };
const Amsterdam2 = { lat: 52.349579, lng: 4.90374 };
const Weesp = { lat: 52.30733, lng: 5.04261 };
const Nijmegen = { lat: 51.84169, lng: 5.85865 };
const Hoogeveen = { lat: 52.72612, lng: 6.47958 };
const Lelystad = { lat: 52.51001, lng: 5.47764 };
const Spijkenisse = { lat: 51.85046, lng: 4.32567 };
const Overveen = { lat: 52.39169, lng: 4.6116 };

const locaties = [
  Mijnsherenland,
  Amstelveen,
  Amsterdam,
  Amsterdam2,
  Weesp,
  Nijmegen,
  Hoogeveen,
  Lelystad,
  Spijkenisse,
  Overveen
];

async function getMap() {
  const mapUrl = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`;
  const result = await fetch(mapUrl, {
    method: "GET"
  });
  return result;
}

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 52.132633, lng: 5.291266 },
    zoom: 8
  });
  var wincMarker = new google.maps.Marker({
    position: { lat: 52.37836, lng: 4.85471 },
    icon: "Naamloos.png",
    map: map
  });

  const createMarker = function(locatie) {
    const marker = new google.maps.Marker({
      position: locatie,
      map: map
    });
    return marker;
  };
  locaties.forEach(plek => {
    createMarker(plek);
  });
}

getMap();
