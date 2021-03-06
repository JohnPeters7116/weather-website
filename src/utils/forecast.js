const request = require('request')
const KEY = process.env.DARKSKY_KEY

const forecast = (coordinates, callback) => {
  const {lat, long} = coordinates
  const url = `https://api.darksky.net/forecast/${KEY}/${lat},${long}`

  request({url, json: true}, (error, { body }) => {
    if (error){
       callback('Unable to connect to weather services', undefined)
    } else {
      console.log({body})
       callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
    }
  })
}

module.exports = forecast