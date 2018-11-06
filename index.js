var axios = require('axios');

var locationUrl = 'https://www.metaweather.com/api/location/search/?query='
var WEATHER_URL = 'https://www.metaweather.com/api/location/'
// function getLatLng(name){
//     return axios.get(`${locationUrl}${name}`)
// }

function getLatLng(name){
  // https://www.metaweather.com/api/location/search/?query= + 'London'
    return axios.get(`${locationUrl}${name}`)
}

// Barcelona
// console.log('getLatLng(London)',getLatLng('London'));

// getLatLng('London').then(function(result){
//   console.log(result.data);
// }).catch(function(error) {
//   console.log(error);
// })


function getWeather(name) {
  getLatLng(name)
  .then(function(result){
    return result.data[0].woeid;
  })
  .then(function(woeid){
    return axios.get(`${WEATHER_URL}${woeid}`)
  })
  .then(function(result){
    console.log('result',result.data.consolidated_weather);
  })
  .catch(function(error) {
    console.log(error);
  })
}

getWeather('London');

// function betterGetWeather(name) {
//   return new Promise(function(resolve, reject){
//     getLatLng(name)
//     .then(function(result){
//       return result.data[0].woeid;
//     })
//     .then(function(woeid){
//       return axios.get(`${WEATHER_URL}${woeid}`)
//     })
//     .then(function(result){
//       resolve(result.data.consolidated_weather);
//     })
//     .catch(function(error) {
//       reject(error);
//     })
//   })
// }
//
// betterGetWeather('London').then(function(result){
//   console.log('result',result);
// })
