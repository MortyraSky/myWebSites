ymaps.ready(init);
function init(){

  var myMap = new ymaps.Map("map", {
    center: [55.76, 37.64],
    zoom: 7
  },{
    serchControlProvider: 'yandex#search'
  }),

  MyIconContentLayout = ymaps.templateLayoutFactory.createClass('<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'),

  myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    hintContent: 'Собственный значок метки',
    balloonContent: 'Это красивая метка'
  }, {
    iconLayout: 'default#image',
    iconImageHref: 'images/myIcon.gif',
    iconImageSize: [30, 42],
    iconImageOffset: [-5, -38]
  }),
  myMap.geoObjects
    .add(myPlacemark)

}
