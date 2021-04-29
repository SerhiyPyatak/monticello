'use strict';

let MAP_ICON;
$(document).ready(function () {
  //console.log(window.location);
  const prevArrow = '<div class="arrow-previous"></div>';
  const nextArrow = '<div class="arrow-next"></div>';

  if(window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost') {
    MAP_ICON = '../images/contact/map-pin.png';
  } else {
    MAP_ICON = `${window.location.origin}${window.location.pathname}images/contact/map-pin.png`;
  };

  $('.news__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    dots: true,
    nextArrow,
    prevArrow,
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 2,
          //slidesToScroll: 1,
          //dots: true
        }
      },
      {
        breakpoint: 910,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 530,
        settings: {
          arrows: false,
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 430,
        settings: "unslick"
      },

      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  /*$(window).resize(function(){
    if ($(window).width() >= 532){	
      // do something here
      initSlick();
    }	
  });
  */

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
    iconUrl: MAP_ICON,

    iconSize: [106, 106], // size of the icon
    iconAnchor: [53, 53], // point of the icon which will correspond to marker's location
    popupAnchor: [53, 53], // point from which the popup should open relative to the iconAnchor
  });

  L.marker([40.712775, -74.005973], { icon: contactIcon }).addTo(contactMap);

  $('body').sectionScroll({
    topOffset: -40,
    scrollDuration: 0.5
  });
});