const request = require('request')

const forecast = (latitude,longitude,callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=d42ddc393254fd316ac685123f40d437&query=' + latitude +',' + longitude

    request({url: url,json: true},(error,{body}) => {
        if(error)
        {
            callback('Unable to connect to the weather services.',undefined)
        }
        else if(body.error){
            callback('Unable to find location',undefined)
        }
        else{
            callback(undefined,body.current.weather_descriptions[0] + '.The temperature is ' + body.current.temperature + ' degrees. It feels like ' + body.current.feelslike + ' degrees.')
        }
    })
}

module.exports = forecast