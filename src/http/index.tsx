import axios from "axios";

const $host = axios.create({
    baseURL: 'https://app.ftoyd.com/fronttemp-service'
})


export {
    $host
}