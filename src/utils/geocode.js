const request = require('request')

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1Ijoiam9obnBldGVyczcxMTYiLCJhIjoiY2lwcXByZG9rMDA2OGk5bmI0b2VodnF2bSJ9.P5Rbqx3ImctQ-UpIFm42fg`
  request({
    url,
    json: true
  }, (error, res) => {
    if (error) {
      callback('Unable to connect to location services', undefined)
    } else if (res.body.features.length === 0) {
      callback('Unable to find location. Try another search', undefined)
    } else {
      callback(undefined, {
        latitude: res.body.features[0].center[1],
        longitude: res.body.features[0].center[0],
        name: res.body.features[0].place_name,
      })
    }
  })
}

module.exports = geocode