const request = require('request')

const url = 'https://api.darksky.net/forecast/ac3260bf5101f0078a560c36a604da93/37.8267,-122.4233'

request({ url }, (error, response) => {
  const data = JSON.parse(response.body)
  console.log(data.currently)
})