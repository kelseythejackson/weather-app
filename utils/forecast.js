const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/ac3260bf5101f0078a560c36a604da93/${latitude},${longitude}`

  request({
    url,
    json: true
  }, (err, res) => {
    if (err) {
      callback('Unable to connect to weather service', undefined)
    } else if (res.body.error) {
      callback('Unable to find location', undefined)
    } else {
      callback(undefined, `${res.body.daily.data[0].summary} It is currently ${res.body.currently.temperature} degrees out. There is a ${res.body.currently.precipProbability}% chance of rain.`)
    }
  })
}

module.exports = forecast