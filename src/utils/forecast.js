const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=82074549d45d2a41eead6521edb32d87&query=' + latitude + ',' + longitude + '&units=f'

    request({ url: url, json: true }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ' It is currently ' + body.current.temperature + ' degress out.  It feels like ' + body.current.feelslike + ' degrees out.')
        }
    })
}

module.exports = forecast