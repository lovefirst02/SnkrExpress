const request = require('request')
const rp = require('request-promise')

const api = "https://api.nike.com/product_feed/threads/v2/?anchor=0&count=50&filter=marketplace%28MY%29&filter=language%28en-GB%29&filter=upcoming%28true%29&filter=channelId%28010794e5-35fe-4e32-aaff-cd2c74f89d61%29"

function getSnkrs(){
    return new Promise((resolve,reject) => {
        try {
            rp.get(api).then((result) => {
                resolve(result)
            })
        } catch (error) {
            reject(error)
        }
    })    
}

module.exports = getSnkrs