export const api = 'http://localhost:3000/api'
export const uplouds = 'http://localhost:3000/uplouds'

export const resquestConfig = (method,data,token = null,image = null) => {
    let config

    if(image) {
        config = {
            method,
            body:data,
            headers: {}
        }
    } else if(method === "DELETE" || data === null) {
        config = {
            method,
            body:JSON.stringify(data),
            headers:{
                "content-type":"application/json"
            }
        }
    }

    if(token) {
        config.headers.Authorization = `Beares ${token}`
    }

    return config
}

