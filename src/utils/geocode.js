const request = require('request')
const access_token = process.env.MAPBOX_ACCESS_TOKEN

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${access_token}`
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