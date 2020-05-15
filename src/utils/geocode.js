const request = require('request')

const geocode = (address,callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYW5zaHVtYWxlZSIsImEiOiJja2E0M3E3NDUwcXBxM2dvZ2FiaHkzZzY1In0.3zZDlhLJVqFh2zRcQ1o2OA'

    request({url: url,json: true},(error,{body}) => {
        if(error){
            callback('Unable to connect to the weather services!',undefined)
        }
        else if(body.features.length === 0){
            callback('Unable to find location.Try another search.',undefined)
        }
        else{
            callback(undefined,{
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode