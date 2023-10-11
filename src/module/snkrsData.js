const request = require('request')
const rp = require('request-promise')

const api = "https://api.nike.com/product_feed/threads/v2/?count=50&filter=marketplace%28TW%29&filter=language%28zh-Hant%29&filter=channelId%28010794e5-35fe-4e32-aaff-cd2c74f89d61%29"

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

function getLevel(id){
    return new Promise((resolve, reject) => {
        try {
            rp.get(`https://api.nike.com/deliver/available_skus/v1/${id}`).then((result) => {
                resolve(result)
            })
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    "getSnkrs" : getSnkrs,
    "getLevel" : getLevel
}