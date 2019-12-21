const request = require('request')

const url = 'https://api.darksky.net/forecast/ac3260bf5101f0078a560c36a604da93/37.8267,-122.4233'
const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicHVycGxldGFwZSIsImEiOiJjazRnNDkxc2EwdjdlM21vN21jdGMwczZwIn0.3NkfmcEKHQb36GIOOjejUg&limit=1'

request({ url, json: true }, (error, response) => {
  // console.log(response.body.currently)
  const current = response.body.currently
  const daily = response.body.daily.data[0]
  console.log(`${daily.summary} It is currently ${current.temperature} degrees out. There is a ${current.precipProbability}% chance of rain.`)
})

request({ url: geocodeUrl, json: true }, (error, response) => {
  const lat = response.body.features[0].center[1]
  const long = response.body.features[0].center[0]
  console.log(lat, long)
})