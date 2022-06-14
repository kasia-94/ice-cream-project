let map;
function initMap() {
  const myLatLng = { lat:41.913712, lng:-87.624124 };
  const myLatLng2 = { lat: 41.896320, lng:-87.624324 };

  map = new google.maps.Map(document.getElementById("map"), {
    center: {lat:41.912900, lng:-87.624159},
    zoom: 13,
    mapTypeId: "satellite",
  });
  map.setTilt(45);

  const contentString =
    '<div>Our location. Welcome!</div>';
  
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });
  const infowindow2 = new google.maps.InfoWindow({
    content: contentString,
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
      map,
      icon:"https://i.ibb.co/2yJNx7w/logo.png",
    lable: "IceCream",
  });
  var marker2 = new google.maps.Marker({
    position: myLatLng2,
      map,
      icon:"https://i.ibb.co/2yJNx7w/logo.png",
    lable: "IceCream",
  });

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
      shouldFocus: false,
    });
  });
   marker2.addListener("click", () => {
    infowindow.open({
      anchor: marker2,
      map,
      shouldFocus: false,
    });
  });

  infowindow2.open(map, marker2);
  infowindow.open(map, marker);
}
window.initMap = initMap;

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-map-modal-open]"),
    closeModalBtn: document.querySelector("[data-map-modal-close]"),
    modal: document.querySelector("[data-map-modal]"),
    body: document.querySelector("body"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
  }
})();