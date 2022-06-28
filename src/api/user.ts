import axios from 'axios';

const API_PREFIX = `http://47.104.77.198:11368/nft`;
const NEWAPI_PREFIX = 'https://nft-backend-lime.vercel.app'

// const getUserInfoAPI = async (data: any)=> {
//     return await axios.get(`${API_PREFIX}/user/getUserInfoById`, {
//         ...data
//     })
// }
// const getVertifyCodeAPI = async (data: any) => {
//     return await axios.get(`${API_PREFIX}/user/getPin?tel=${data}`)
// }

const testAPI = async () => {
    return await axios.get(`${NEWAPI_PREFIX}/`)
}
const getVerificationCodeAPI = async (data:any)=> {
    return await axios.get(`${NEWAPI_PREFIX}/getVerificationCode?phone=${data}`)
}
const loginAPI = async (data: any)=> {
    return await axios.post(`${NEWAPI_PREFIX}/login`, {
        ...data
    })
}
export {
    // getUserInfoAPI,
    getVerificationCodeAPI,
    testAPI,
    loginAPI
}