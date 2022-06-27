import axios from 'axios';

const API_PREFIX = `http://47.104.77.198:11368/nft`
const loginAPI = async (data: any)=> {
    return await axios.post(`${API_PREFIX}/user/doLogin`, {
        ...data
    })
}
const getUserInfoAPI = async (data: any)=> {
    return await axios.get(`${API_PREFIX}/user/getUserInfoById`, {
        ...data
    })
}
const getVertifyCodeAPI = async (data: any) => {
    return await axios.get(`${API_PREFIX}/user/getPin?tel=${data}`)
}
const testAPI = async () => {
    return await axios.get(`https://nft-backend-lime.vercel.app/`)
}
export {
    loginAPI,
    getUserInfoAPI,
    getVertifyCodeAPI,
    testAPI
}