'use strict';

const MARKER_IMAGE_RELATIVE_PATH = '../images/contact/map-pin.png';
$(document).ready(function () {
  $('.news__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    infinite: true,
  });

  let contactMap = L.map('contact-map').setView([40.6571222, -73.8429989], 12);
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic2VyaGlpNSIsImEiOiJja25wMWFkeTAwMGU2Mm5vMWdpNGpuZ3B4In0.NvhLgls5OiveTnFQtV1scA',
  }).addTo(contactMap);

  var contactIcon = L.icon({
    iconUrl: MARKER_IMAGE_RELATIVE_PATH,

    iconSize: [106, 106], // size of the icon
    iconAnchor: [53, 53], // point of the icon which will correspond to marker's location
    popupAnchor: [53, 53], // point from which the popup should open relative to the iconAnchor
  });

  L.marker([40.712775, -74.005973], { icon: contactIcon }).addTo(contactMap);
});
