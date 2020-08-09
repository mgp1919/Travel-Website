var travellerType;
var cityType;
var interests = [false, false, false, false, false, false];
var time;

function getType(type) {
  travellerType = type;
  console.log(travellerType);
}

function getCity(city) {
  cityType = city;
  console.log(cityType);
}

function getInterests(id) {
  interests[id] = document.getElementById(id).checked;
}

function getTime(id) {
  time = id;
}