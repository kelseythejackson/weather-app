const request = require('request')

const url = 'https://api.darksky.net/forecast/ac3260bf5101f0078a560c36a604da93/37.8267,-122.4233'

request({ url, json: true }, (error, response) => {
  // console.log(response.body.currently)
  const current = response.body.currently
  const daily = response.body.daily.data[0]
  console.log(`${daily.summary} It is currently ${current.temperature} degrees out. There is a ${current.precipProbability}% chance of rain.`)
})